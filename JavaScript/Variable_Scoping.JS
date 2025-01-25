

//-------------------- GLOBAL SCOPE ------------------------------------
console.log("GLOBAL SCOPE >>>>>>>>>>>>>>>>>>>>>>>>>>>> ")
// isko function me bloack me aur khi per bhi access kr sakte he .. 

var age = 17 ; 
console.log(age) ; 

//-------------------- FUCNCTION SCOPE ------------------------------------
console.log("FUNCTION SCOPE >>>>>>>>>>>>>>>>>>>>>>>>>>>> ")
// function ke andar access kr sakte he sirf .. 

function funcscope() {
    var marks = 25 ; 
    console.log("function variable : " , marks) ; // accesable .. 
}
// calling .. 
funcscope() ; 

// console.log(marks) ; // not accessable .. 


//-------------------- BLOCK SCOPE ------------------------------------
console.log("BLOCK SCOPE >>>>>>>>>>>>>>>>>>>>>>>>>>>> ")
// var ko bahar bhi access kr sakte he .. 
// let k osirf andar hi access kr sakte he .. 

{
    var mop = 190 ; 
}

console.log(mop) ; 



//-------------------- TEMPORAL DEAD ZONE ------------------------------------

console.log(money) ;
console.log("harry") ; 
console.log("chai") ; 
let money = 120 ; 
console.log(money) ; 

// line no 39 se 42 tak temporal  dead zone he .. jha variable ki value ko access krna possible nhi he 
