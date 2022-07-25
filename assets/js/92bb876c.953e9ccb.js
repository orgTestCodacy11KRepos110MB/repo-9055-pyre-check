"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[347],{58230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>y});var a,r=n(83117),i=n(80102),o=(n(67294),n(3905)),d=n(86341),p=n(5406),m=["components"],s={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},l=void 0,c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Welcome to the wonderful world of static typing! This guide will get you from zero to a simple project that is type checked with Pyre.",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/getting_started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"pyre",next:{title:"Installation",permalink:"/docs/installation"}},u={},y=[{value:"Requirements",id:"requirements",level:2},{value:"Setting up a Project",id:"setting-up-a-project",level:2},{value:"Running Pyre",id:"running-pyre",level:2},{value:"Introductory Video",id:"introductory-video",level:2}],g=(a="FbGettingStarted",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),h={toc:y};function x(e){var t=e.components,n=(0,i.Z)(e,m);return(0,o.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(g,{mdxType:"FbGettingStarted"})),(0,o.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,"Welcome to the wonderful world of static typing! This guide will get you from zero to a simple project that is type checked with Pyre."),(0,o.mdx)("h2",{id:"requirements"},"Requirements"),(0,o.mdx)("p",null,"To get started, you need ",(0,o.mdx)("a",{parentName:"p",href:"https://www.python.org/getit/"},"Python 3.6 or later")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman/"},"watchman")," working on your system. On ",(0,o.mdx)("em",{parentName:"p"},"MacOS")," you can get everything with ",(0,o.mdx)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ brew install python3 watchman\n")),(0,o.mdx)("p",null,"On ",(0,o.mdx)("em",{parentName:"p"},"Ubuntu"),", ",(0,o.mdx)("em",{parentName:"p"},"Mint"),", or ",(0,o.mdx)("em",{parentName:"p"},"Debian"),"; use ",(0,o.mdx)("inlineCode",{parentName:"p"},"apt-get")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install python3 python3-pip python3-venv watchman\n")),(0,o.mdx)("p",null,"We tested Pyre on ",(0,o.mdx)("em",{parentName:"p"},"Ubuntu 18.04.5 LTS"),", ",(0,o.mdx)("em",{parentName:"p"},"CentOS 7"),", as well as ",(0,o.mdx)("em",{parentName:"p"},"OSX 10.11")," and later."),(0,o.mdx)("h2",{id:"setting-up-a-project"},"Setting up a Project"),(0,o.mdx)("p",null,"We start by creating an empty project directory and setting up a virtual environment:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my_project && cd my_project\n$ python3 -m venv ~/.venvs/venv\n$ source ~/.venvs/venv/bin/activate\n(venv) $ pip install pyre-check\n")),(0,o.mdx)("p",null,"Next, we teach Pyre about our new project:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"(venv) $ pyre init\n")),(0,o.mdx)("p",null,"This command will set up a configuration for Pyre (",(0,o.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),") as well as watchman (",(0,o.mdx)("inlineCode",{parentName:"p"},".watchmanconfig"),") in your project's directory. Accept the defaults for now \u2013 you can change them later if necessary."),(0,o.mdx)("h2",{id:"running-pyre"},"Running Pyre"),(0,o.mdx)("p",null,"We are now ready to run Pyre:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"(venv) $ echo \"i: int = 'string'\" > test.py\n(venv) $ pyre\n \u019b Found 1 type error!\ntest.py:1:0 Incompatible variable type [9]: i is declared to have type `int` but is used as type `str`.\n")),(0,o.mdx)("p",null,"This first invocation will start a daemon listening for filesystem changes \u2013\xa0type checking your project incrementally as you make edits to the code. You will notice that subsequent invocations of ",(0,o.mdx)("inlineCode",{parentName:"p"},"pyre")," will be faster than the first one.")),(0,o.mdx)("h2",{id:"introductory-video"},"Introductory Video"),(0,o.mdx)(p.Z,{videoId:"k_xElpxw9aY",mdxType:"YouTube"}))}x.isMDXComponent=!0}}]);