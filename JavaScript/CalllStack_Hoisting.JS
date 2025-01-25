

// ------------ Function Hoisting -------------------- 
console.log("FUNCTION HOISTING >>>>>>>>>>>>>>>>>>>>>> ") ; 
// function ko call function bananane ke pehle hi kr diya he to according to function hoisting kya hogaa function top of the stack move ho jaaye .. 
sayMyName("tanishk") ; 

function sayMyName(finalname) {
    console.log(finalname) ; 
}



// ------------  Hoisting -------------------- 
console.log("Variable HOISTING >>>>>>>>>>>>>>>>>>>>>> ") ; 
// variable hoisting me bhale hi variable declare baad m kra ahe lekin use vaiable ko pehle kr liya he to according to hoisting variable current scope me upar move ho jaayega 
// lekin sirf VAR per hi kaam krta he .. 
console.log(age) ; 

var age = 25 ; 



