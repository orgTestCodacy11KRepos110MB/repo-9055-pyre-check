# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import argparse
import logging

from ..configuration import Configuration
from ..repository import Repository
from .command import Command


LOG: logging.Logger = logging.getLogger(__name__)


class PysaVersionUpdate(Command):
    def __init__(
        self,
        *,
        repository: Repository,
        hash: str,
        no_commit: bool,
    ) -> None:
        super().__init__(repository)
        self._hash: str = hash
        self._no_commit: bool = no_commit

    @staticmethod
    def from_arguments(
        arguments: argparse.Namespace, repository: Repository
    ) -> "PysaVersionUpdate":
        return PysaVersionUpdate(
            repository=repository,
            hash=arguments.hash,
            no_commit=arguments.no_commit,
        )

    @classmethod
    # pyre-fixme[40]: Non-static method `add_arguments` cannot override a static
    #  method defined in `Command`.
    def add_arguments(cls, parser: argparse.ArgumentParser) -> None:
        super(PysaVersionUpdate, PysaVersionUpdate).add_arguments(parser)
        parser.set_defaults(command=cls.from_arguments)
        parser.add_argument("hash", help="Hash of new Pysa version")
        parser.add_argument(
            "--no-commit", action="store_true", help="Keep changes in working state."
        )

    def run(self) -> None:
        global_configuration = Configuration.find_project_configuration()

        # Update to new pysa version.
        configuration = Configuration(global_configuration)
        old_version = configuration.pysa_version
        if not old_version:
            LOG.error(
                "Global configuration at %s has no pysa_version field.",
                global_configuration,
            )
            return
        configuration.set_pysa_version(self._hash)
        configuration.write()

        self._repository.commit_changes(
            commit=(not self._no_commit),
            title="Update global configuration pysa version",
            summary=f"Automatic upgrade to hash `{self._hash}`",
            ignore_failures=True,
        )
