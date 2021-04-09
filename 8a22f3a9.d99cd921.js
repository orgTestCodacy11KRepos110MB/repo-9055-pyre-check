(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a,r=n(3),i=n(7),o=(n(0),n(97)),l={id:"errors",title:"Errors",sidebar_label:"Errors"},s={unversionedId:"errors",id:"errors",isDocsHomePage:!1,title:"Errors",description:"Common Issues",source:"@site/docs/errors.md",slug:"/errors",permalink:"/docs/errors",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/errors.md",version:"current",sidebar_label:"Errors",sidebar:"pyre",previous:{title:"Types in Python",permalink:"/docs/types-in-python"},next:{title:"Querying Pyre",permalink:"/docs/querying-pyre"}},c=[{value:"Common Issues",id:"common-issues",children:[{value:"Covariance and Contravariance",id:"covariance-and-contravariance",children:[]},{value:"Optional Attributes",id:"optional-attributes",children:[]},{value:"Third-Party Libraries",id:"third-party-libraries",children:[]}]},{value:"Error Codes",id:"error-codes",children:[{value:"3: Missing Return Annotation",id:"3-missing-return-annotation",children:[]},{value:"6: Incompatible Parameter Type",id:"6-incompatible-parameter-type",children:[]},{value:"9: Incompatible Variable Type",id:"9-incompatible-variable-type",children:[]},{value:"11: Undefined or Invalid Type",id:"11-undefined-or-invalid-type",children:[]},{value:"14,15: Behavioral Subtyping",id:"1415-behavioral-subtyping",children:[]},{value:"16: Missing Attributes",id:"16-missing-attributes",children:[]},{value:"18,21: Undefined Name, Undefined Import",id:"1821-undefined-name-undefined-import",children:[]},{value:"34: Invalid type variable",id:"34-invalid-type-variable",children:[]},{value:"35: Invalid type variance",id:"35-invalid-type-variance",children:[]},{value:"53: Missing annotation for captured variables",id:"53-missing-annotation-for-captured-variables",children:[]},{value:"56: Invalid decoration",id:"56-invalid-decoration",children:[]}]},{value:"Suppression",id:"suppression",children:[{value:"Suppressing Individual Errors",id:"suppressing-individual-errors",children:[]},{value:"Suppressing All Errors",id:"suppressing-all-errors",children:[]},{value:"Suppressing Errors Across Files",id:"suppressing-errors-across-files",children:[]}]}],p=(a="Internal",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"common-issues"},"Common Issues"),Object(o.b)("h3",{id:"covariance-and-contravariance"},"Covariance and Contravariance"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)"}),"Variance")," is tricky and a common source of confusion for people new to Python's type system."),Object(o.b)("p",null,"Pyre will error when, for instance, a ",Object(o.b)("inlineCode",{parentName:"p"},"List[int]")," is passed in when a ",Object(o.b)("inlineCode",{parentName:"p"},"List[float]")," is expected, as in the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def to_seconds(milliseconds: List[float]) -> List[int]:\n  return [int(x/1000.0) for x in milliseconds]\n\nmy_list: List[int] = [1]\nmy_list = to_seconds(my_list) # Pyre errors here!\n")),Object(o.b)("p",null,"This code is works perfectly fine at runtime, and we may think that since ",Object(o.b)("inlineCode",{parentName:"p"},"int")," is a subtype of ",Object(o.b)("inlineCode",{parentName:"p"},"float")," this should not be a problem for the type checker either. However, consider the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def halve_first_element(list: List[float]) -> None:\n  list[0] /= 2\n\nmy_list: List[int] = [1]\nhalve_first_element(my_list)\nfunction_taking_int(my_list[0]) # Oh no, my_list[0] is 0.5!\n")),Object(o.b)("p",null,"If we allowed passing in ",Object(o.b)("inlineCode",{parentName:"p"},"my_list")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"halve_first_element")," function here, the above code would type check. It's perfectly valid from the perspective of the callee to modify the list's element to be a float, as it was annotated as taking a list of floats, but because this list escapes the scope of the callee, we can't allow this in the type checker."),Object(o.b)("p",null,"To work around this, we can signal to the type checker that the parameter can't be modified. Here's how you can tell the type checker that you won't change the container in your function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# I can't modify milliseconds here, so it's safe to pass a Iterable[int].\ndef to_seconds(milliseconds: Iterable[float]) -> List[int]:\n  return [int(x/1000.0) for x in milliseconds]\n\nmy_list: List[int] = [1]\nmy_list = to_seconds(my_list) # Type checks!\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"typing.Iterable")," is an immutable variant for lists that allows accessing the list without modifying it. Most commonly used generic containers have immutable variants, and I would encourage you to use them for function parameters whenever you don't need to modify a container in your function.\nHere are some immutable variants for commonly used containers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"typing.List \u2192 typing.Sequence (if you need random access via my_list[id])\ntyping.List \u2192 typing.Iterable (if you're just iterating over the list in a loop and want to support sets as well)\ntyping.Dict \u2192 typing.Mapping\ntyping.Set \u2192 typing.AbstractSet\n")),Object(o.b)("p",null,"Invariance, combined with type inference, comes with a few gotchas. When you write an expression, Pyre infers the most precise type possible. For instance, Pyre infers the ",Object(o.b)("inlineCode",{parentName:"p"},"List[int]")," type for ",Object(o.b)("inlineCode",{parentName:"p"},"[1, 2]"),", even though ",Object(o.b)("inlineCode",{parentName:"p"},"List[float]")," would be a perfectly valid type here. This can cause issues, as in the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def zeroes(number_of_elements: int) -> List[float]:\n  a = [0] * number_of_elements\n  return a # Pyre errors here!\n")),Object(o.b)("p",null,"What happened above is that Pyre inferred a type of ",Object(o.b)("inlineCode",{parentName:"p"},"List[int]")," for a, and invariance kicked in. You can work around this by adding an explicit annotation when declaring a:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def zeroes(number_of_elements: int) -> List[float]:\n  a: List[float] = [0] * number_of_elements\n  return a # Type checks!\n")),Object(o.b)("h3",{id:"optional-attributes"},"Optional Attributes"),Object(o.b)("p",null,"A common pattern in Python is to check whether an attribute is ",Object(o.b)("inlineCode",{parentName:"p"},"None")," before accessing its value. E.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from typing import Optional\n\nclass Data:\n  field: Optional[int]\n\ndef process_field(input: int) -> None:\n  ...\n\ndef process_data(data: Data) -> None:\n  if data.field:\n    # ...\n    process_field(data.field)  # Error: expected `int` but got `Optional[int]`\n")),Object(o.b)("p",null,"The above fails to type-check because Pyre cannot guarantee that ",Object(o.b)("inlineCode",{parentName:"p"},"data.field")," is not ",Object(o.b)("inlineCode",{parentName:"p"},"None")," even after checking explicitly in the line before: ",Object(o.b)("inlineCode",{parentName:"p"},"field")," could be set to ",Object(o.b)("inlineCode",{parentName:"p"},"None")," by another thread or it could be a property that returns something different the next time we access it."),Object(o.b)("p",null,"The preferred way to make this code type-check is to mark the attribute ",Object(o.b)("inlineCode",{parentName:"p"},"Final"),", i.e. to specify that it can't be reassigned."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from typing import Final, Optional\n\nclass Data:\n  # Needs to be assigned in the constructor and cannot be changed afterwards.\n  field: Final[Optional[int]] = 1\n")),Object(o.b)("p",null,"It is always safe to refine attributes when their types are ",Object(o.b)("inlineCode",{parentName:"p"},"Final"),"."),Object(o.b)("p",null,"Alternatively, it is also safe to assign the attribute to a local variable before accessing its value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def process_data(data: Data) -> None:\n  field = data.field\n  if field:\n    process_field(field)\n")),Object(o.b)("h3",{id:"third-party-libraries"},"Third-Party Libraries"),Object(o.b)("p",null,"Not all third-party libraries come with Python code that Pyre can analyze (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"cython")," modules), and some libraries contain source code without annotations. This will often show up in the form of undefined attribute errors:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Undefined attribute [16]: Module <library> has no attribute <some attribute>.\n")),Object(o.b)("p",null,"Since it is not always possible to annotate code, PEP 484 specifies a format for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-0484/#stub-files"}),"stub files")," with a ",Object(o.b)("inlineCode",{parentName:"p"},".pyi")," extension. Pyre will look for stub files in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"typeshed"),", or next to your source code. You can also provide additional paths to Pyre to look for stubs (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration"}),"Configuration"),")."),Object(o.b)(p,{mdxType:"Internal"}),Object(o.b)("h2",{id:"error-codes"},"Error Codes"),Object(o.b)("p",null,"Different errors raised by Pyre have different error codes. E.g. in"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"(venv) $ pyre\n \u019b Found 1 type error!\ntest.py:1:0 Incompatible variable type [9]: a is declared to have type `int` but is used as type `str`.\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"9")," in the brackets indicates that we raised an error with code 9."),Object(o.b)("h3",{id:"3-missing-return-annotation"},"3: Missing Return Annotation"),Object(o.b)("p",null,"If strict mode is turned on, Pyre will error when a function is either annotated with a return type that contains ",Object(o.b)("inlineCode",{parentName:"p"},"typing.Any"),", or is not annotated with any return type at all (in which case Pyre will treat it as returning ",Object(o.b)("inlineCode",{parentName:"p"},"typing.Any")," by default)."),Object(o.b)("p",null,"This is bad because a return type of ",Object(o.b)("inlineCode",{parentName:"p"},"typing.Any")," may potentially hiding legitimate type errors that may happen at runtime:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from typing import Any\n\ndef f():\n  return 42\n\n# This line will raise at runtime, but no type error here since `f()` has type `Any`.\nprint("a" + f())\n')),Object(o.b)("p",null,"The best way to silence this error is to add non-",Object(o.b)("inlineCode",{parentName:"p"},"Any")," return annotation to every function."),Object(o.b)("h3",{id:"6-incompatible-parameter-type"},"6: Incompatible Parameter Type"),Object(o.b)("p",null,"Pyre will error if an argument passed into a function call does not match the expected parameter type of that function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def takes_int(x: int) -> None:\n  pass\ndef f(x: Optional[int]) -> None:\n  takes_int(x) # Incompatible parameter type error\n")),Object(o.b)("p",null,"If you are seeing errors with invariant containers where some ",Object(o.b)("inlineCode",{parentName:"p"},"Container[T]")," is expected but you are passing ",Object(o.b)("inlineCode",{parentName:"p"},"Container[S]")," where ",Object(o.b)("inlineCode",{parentName:"p"},"S < T"),", please see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"errors#covariance-and-contravariance"}),"Covariance and Contravariance"),"."),Object(o.b)("h3",{id:"9-incompatible-variable-type"},"9: Incompatible Variable Type"),Object(o.b)("p",null,"Pyre will error when assigning incompatible types to local variables and parameters that were explicitly annotated."),Object(o.b)("p",null,"That is, the following will error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'def f(x: int) -> None:\n  x = "" # Incompatible variable type error\n  y: int = 1\n  y = "" # Incompatible variable type error\n')),Object(o.b)("p",null,"The rationale here is that it's surprising for an explicitly annotated variable to have an\nincompatible type later on in the same function."),Object(o.b)("p",null,"If you are constructing an object that is generic over an invariant type, you may run into an error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"_T = TypeVar('_T')\n\nclass Foo(Generic[_T]):\n    def __init__(self, x: _T) -> None: ...\n\ndef f() -> None:\n    foo: Foo[Optional[int]] = Foo(x=1) # Incompatible variable type error\n")),Object(o.b)("p",null,"This is due to the fact that ",Object(o.b)("inlineCode",{parentName:"p"},"Foo[X]")," is not less than ",Object(o.b)("inlineCode",{parentName:"p"},"Foo[Y]")," even if ",Object(o.b)("inlineCode",{parentName:"p"},"X < Y")," when the type variable is invariant.\nYou can declare your intention to initialize the object with a wider type than is given to fix this error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def f() -> None:\n    foo: Foo[Optional[int]] = Foo[Optional[int]](x=1)\n")),Object(o.b)("h3",{id:"11-undefined-or-invalid-type"},"11: Undefined or Invalid Type"),Object(o.b)("p",null,"Pyre recognizes class names as valid annotations. Most basic types are imported from the ",Object(o.b)("inlineCode",{parentName:"p"},"typing")," module or are already available from builtins like ",Object(o.b)("inlineCode",{parentName:"p"},"str"),", ",Object(o.b)("inlineCode",{parentName:"p"},"int"),", ",Object(o.b)("inlineCode",{parentName:"p"},"bool"),", etc. You can also define your own type alias on the global scope, which can be used as annotations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from typing_extensions import TypeAlias\n\nINT_OR_STR: TypeAlias = Union[int, str]\n")),Object(o.b)("p",null,"If you use a name as an annotation that is not a class name or valid alias, you will see this error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'GLOBAL_VALUE = "string"\n\ndef foo() -> GLOBAL_VALUE: # Undefined or Invalid type error\n  pass\n')),Object(o.b)("p",null,"You can fix this error by verifying that your annotation is"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"properly imported from ",Object(o.b)("inlineCode",{parentName:"li"},"typing")," if applicable."),Object(o.b)("li",{parentName:"ol"},"properly defined in the module you are importing from. If the module you are importing from has a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#third-party-libraries"}),"stub file"),", you should check the definition there.")),Object(o.b)("p",null,"For type aliases, check that your type alias is defined"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"with a valid type on the RHS. If you provide an annotation for the TypeAlias assignment, it must be ",Object(o.b)("inlineCode",{parentName:"li"},"typing_extensions.TypeAlias"),"."),Object(o.b)("li",{parentName:"ol"},"on the global scope, not nested inside a function or class.")),Object(o.b)("h3",{id:"1415-behavioral-subtyping"},"14,15: Behavioral Subtyping"),Object(o.b)("p",null,"Method overrides should follow\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Liskov_substitution_principle"}),"Liskov's substitution principle"),".\nIn short, parameter types can't be more restrictive and return types\ncan't be more permissive in overridden methods. To see why, consider the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  def width(image: Image) -> float:\n    return image.width()\n")),Object(o.b)("p",null,"Say we now have different implementations of our ",Object(o.b)("inlineCode",{parentName:"p"},"Image")," class, one of which\nviolates the substitution principle:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  class Image:\n    @abstractmethod:\n    def width() -> float: pass\n\n  class JpegImage(Image):\n    @override\n    def width() -> int: return 10  # this is fine\n\n  class ComplexImage(Image):\n    @override\n    def width() -> complex: return 1j\n")),Object(o.b)("p",null,"Clearly our ",Object(o.b)("inlineCode",{parentName:"p"},"width")," function above breaks when used with a ",Object(o.b)("inlineCode",{parentName:"p"},"ComplexImage")," instance.\nThe case for parameters follows analogously."),Object(o.b)("h3",{id:"16-missing-attributes"},"16: Missing Attributes"),Object(o.b)("p",null,"Your code is most likely trying to access an attribute that Pyre does not know about.\nPyre has various ways of inferring what is an attribute of an object:"),Object(o.b)("h4",{id:"explicitly-declared"},"Explicitly Declared"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  class Derp:\n    attribute: int = 1\n\n    @property\n    def property(self) -> int: ...\n")),Object(o.b)("h4",{id:"implicitly-declared"},"Implicitly Declared"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  class Derp:\n    def __init__(self):\n       self.attribute: int = 1\n")),Object(o.b)("p",null,"Pyre does one level of inlining to infer implicit parameters\nWe suggest you do not heavily rely on this feature as it is not sound and makes our code brittle.\nSupport for this is temporary."),Object(o.b)("h3",{id:"1821-undefined-name-undefined-import"},"18,21: Undefined Name, Undefined Import"),Object(o.b)("p",null,'Error 18 ("Undefined name") is raised when your code tries to access a variable or function that Pyre could not resolve.\nThis is usually caused by failing to import the proper module.'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  # 'import some_module' is missing\n  some_module.some_func()\n")),Object(o.b)("p",null,'Pyre will raise error 21 instead ("Undefined import") when the import statement is present, but the module to be imported could not be found in the search path.\nIf the module provides stub files, please provide their location via the ',Object(o.b)("inlineCode",{parentName:"p"},"--search-path")," commandline parameter."),Object(o.b)("h3",{id:"34-invalid-type-variable"},"34: Invalid type variable"),Object(o.b)("p",null,'Type variables can only be used as types when they have already been placed "in scope".\nA type variable can be placed into scope via:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generic class declarations",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"for example, ",Object(o.b)("inlineCode",{parentName:"li"},"class C(Generic[T]):")," puts ",Object(o.b)("inlineCode",{parentName:"li"},"T")," into scope for the body of the class"))),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("strong",{parentName:"li"},"parameter")," types of a generic function",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"for example, ",Object(o.b)("inlineCode",{parentName:"li"},"def foo(x: T)")," puts ",Object(o.b)("inlineCode",{parentName:"li"},"T")," into scope for the body and return type annotation of the function")))),Object(o.b)("p",null,'Something notably absent from this list is "inside of a ',Object(o.b)("inlineCode",{parentName:"p"},"typing.Callable"),' type".\nThis means that ',Object(o.b)("inlineCode",{parentName:"p"},"Callable[[T], T]")," does not spell the type of a generic function, but rather a specific identity function, with the ",Object(o.b)("inlineCode",{parentName:"p"},"T")," defined by an outer scope.\nTherefore, if you want to spell the signature of a function that takes/returns a generic function, you will need to declare it separately via a callback protocol:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'T = TypeVar("T")\n\ndef returns_identity() -> Callable[[T], T]: ... # Rejected\n\nclass IdentityFunction(Protocol):\n  def __call__(self, x: T) -> T: ...\n\ndef returns_identity() -> IdentityFunction: # Accepted\n  def inner(x: T) -> T:\n    return x\n  return inner\n')),Object(o.b)("h3",{id:"35-invalid-type-variance"},"35: Invalid type variance"),Object(o.b)("p",null,"In brief, read-only data types can be covariant, write-only data types can be contravariant, and data types that support both reads and writes must be invariant.\nIf a data type implements any functions accepting parameters of that type, we cannot guarantee that writes are not happening. If a data type implements any functions returning values of that type, we cannot guarantee that reads are not happening.\nFor example (note: int is a subclass of float in the type system and in these examples):\nWrites taking covariants:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'_T_co = typing.TypeVar("_T_co", covariant=True)\n\nclass MyList(typing.Generic[_T_co]):\n    def write(self, element: _T_co) -> None:\n        ... # adds element to list\n\ndef takes_float_list(float_list: MyList[float]) -> None:\n    float_list.write(1.0)\n\nint_list: MyList[int] = ...\ntakes_float_list(int_list)  # this call is OK because MyList is covariant: MyList[int] < MyList[float]\n# int_list contains floats\n')),Object(o.b)("p",null,"Reads returning contravariants:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'_T_cont = typing.TypeVar("_T_cont", contravariant=True)\n\nclass MyList(typing.Generic[_T_cont]):\n    def read(self) -> _T_cont:\n        ... # returns first element from list\n\ndef takes_int_list(int_list: MyList[int]) -> int:\n   return int_list.read()\n\nfloat_list: MyList[float] = ...\ntakes_int_list(float_list)  # this call is OK because MyList is contravariant: MyList[float] < MyList[int]\n# problem with return above is clear\n')),Object(o.b)("h3",{id:"53-missing-annotation-for-captured-variables"},"53: Missing annotation for captured variables"),Object(o.b)("p",null,"Pyre makes no attempt at trying to infer the types across function boundaries. The statement holds for nested functions as well.\nFrom a nested function's perspective, a variable defined in an nesting function behaves not too differently from a global variable. Therefore, Pyre treats such variables in the same way as it treats global variable: an explicit annotation is required if strict mode is turned on."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def outer_function0() -> int:\n    x = foo()\n    def inner_function() -> int:\n        return x  # Due to the lack of explicit annotation, Pyre will treat this variable as having type `Any`.\n    return inner_function()\n\ndef outer_function1() -> int:\n    x: int = foo()\n    def inner_function() -> int:\n        return x  # This is ok: the type of `x` is known to be `int`.\n    return inner_function()\n\ndef outer_function2() -> int:\n    x = foo()\n    def inner_function(x: int) -> int:\n        return x  # This is also ok: even though the outer `x` is not annotated, the `x` parameter of the inner function is.\n    return inner_function(x)\n")),Object(o.b)("h3",{id:"56-invalid-decoration"},"56: Invalid decoration"),Object(o.b)("p",null,"This error code is a catch-all for a variety of problems that can arise in the course of resolving the type of a decorated function.\nIn all of these cases, these decoration failures will lead to the function being registered with type ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," to avoid any spurious downstream errors."),Object(o.b)("h4",{id:"pyre-was-not-able-to-infer-the-type-of-the-decorator-"},'"Pyre was not able to infer the type of the decorator ..."'),Object(o.b)("p",null,"This should only happen when the decorator access itself is invalid, e.g. when you use a decorator which isn't declared in the stubs for a third-party library."),Object(o.b)("h4",{id:"pyre-was-not-able-to-infer-the-type-of-argument-"},'"Pyre was not able to infer the type of argument ..."'),Object(o.b)("p",null,'When using the "decorator factory" pattern, we need to resolve the type of both the decorator factory itself as well as the arguments passed to the decorator factory.\nThis is because the types of these arguments can alter the behavior of the returned decorator via overloads or type variables.\nHowever, this resolution has to happen early in the environment-building pipeline, when we don\'t yet have all of the context we need in order to resolve the types of arbitrary expressions.\nWe support resolving literals and simple globals as arguments, but using anything else will result in this error.'),Object(o.b)("p",null,"To work around this, you can statically type your arguments to the decorator factory as separate globals, which can be validated later in the type-checking pipeline."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'T = TypeVar("T")\ndef decorator_factory(x: T) -> Callable[[Callable[[int], str]], Callable[[str], T]]:\n  ...\n# pyre-fixme[56]: Pyre was not able to infer the type of argument\n#  `complex_expression()` to decorator factory `decorator_factory`.\n@decorator_factory(complex_expression())\ndef foo(x: int) -> str:\n  ...\n\n\nargument: float = complex_expression()\n\n@decorator_factory(argument) # Accepted!  bar resolves to Callable[[str], float]\ndef bar(x: int) -> str:\n  ...\n')),Object(o.b)("h4",{id:"decorator-factory-x-could-not-be-called"},'"Decorator factory ',"`","X","`",' could not be called"'),Object(o.b)("p",null,"This corresponds to when the decorator factory access resolves to a type that is not callable (i.e. has no ",Object(o.b)("inlineCode",{parentName:"p"},"__call__")," method)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"not_a_factory: int = 5\n\n# pyre-fixme[56]: Decorator factory `not_a_factory` could not be called, because its\n# type `int` is not callable\n@not_a_factory(1)\ndef bar() -> None:\n  pass\n")),Object(o.b)("h4",{id:"decorator-x-could-not-be-called"},'"Decorator ',"`","X","`",' could not be called"'),Object(o.b)("p",null,"Similarly, these errors correspond to when the entire decorator expression (potentially including arguments to a decorator factory), resolves to a non-callable type."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def foo() -> int:\n  return 42\n\n# pyre-fixme[56]: Decorator `foo()` could not be called, because its\n# type `int` is not callable\n@foo()\ndef bar() -> None:\n  pass\n")),Object(o.b)("h4",{id:"while-applying-decorator-factory-"},'"While applying decorator factory ..."'),Object(o.b)("p",null,"These errors are emitted from attempting to pass the resolved factory arguments to the factory, as with any other function call."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def factory(x: str) -> Callable[[object], object]:\n  ...\n\n# pyre-fixme[56]: While applying decorator factory `factory`:\n# Expected `str` for 1st param but got `int`.\n@factory(1)\ndef foo() -> None:\n  pass\n")),Object(o.b)("h4",{id:"while-applying-decorator-"},'"While applying decorator ..."'),Object(o.b)("p",null,"Correspondingly, these errors are emitted from trying to pass the decorated function as an argument to the resolved decorator type."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"def decorator(f: Callable[[int], str]) -> int:\n  ...\n\n# pyre-fixme[56]: While applying decorator `decorator`:\n# Expected `Callable[[int], str]` for 1st param but got `Callable[[str], int]`.\n@decorator\ndef foo(x: str) -> int:\n  return 5\n")),Object(o.b)("h2",{id:"suppression"},"Suppression"),Object(o.b)("p",null,"It is not always possible to address all errors immediately \u2013\xa0some code is too dynamic and should be refactored, other times it's ",Object(o.b)("em",{parentName:"p"},"just not the right time")," to deal with a type error. We do encourage people to keep their type check results clean at all times and provide mechanisms to suppress errors that cannot be immediately fixed."),Object(o.b)("h3",{id:"suppressing-individual-errors"},"Suppressing Individual Errors"),Object(o.b)("p",null,"Pyre supports error suppression of individual errors with comments that can be placed on the line of the error or on the line preceeding the error."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"# pyre-fixme")," indicates there is an issue in the code that will be revisited later."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"# pyre-ignore")," indicates there's an issue with the type checker or the code is too dynamic and we have decided to not fix this. If this is a Pyre bug, make sure you ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/pyre/issues"}),"open an issue")," on our tracker.")),Object(o.b)("p",null,"Both comment styles allow you to suppress individual error codes as well as adding additional context."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'def foo() -> int:\n    # pyre-fixme[7]: only suppresses return mismatches\n    return ""\n')),Object(o.b)("p",null,"Pyre also supports ",Object(o.b)("inlineCode",{parentName:"p"},"# type: ignore")," comments for backwards-compatibility with ",Object(o.b)("em",{parentName:"p"},"mypy"),"."),Object(o.b)("h3",{id:"suppressing-all-errors"},"Suppressing All Errors"),Object(o.b)("p",null,"You can use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"types-in-python#upgrade"}),"Pyre upgrade tool")," to add inline error suppressions for all errors in your project."),Object(o.b)("h3",{id:"suppressing-errors-across-files"},"Suppressing Errors Across Files"),Object(o.b)("p",null,"You can suppress all errors in entire sections of your code by adding the path to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"configuration#global"}),Object(o.b)("inlineCode",{parentName:"a"},"ignore_all_errors")," section of your configuration"),"."),Object(o.b)("p",null,"Furthermore Pyre supports suppressing all errors in an individual file if you add a ",Object(o.b)("inlineCode",{parentName:"p"},"# pyre-ignore-all-errors")," to your file. Like the other suppression comments, you can use square brackets to chose to only ignore one or more particular error types."))}d.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);