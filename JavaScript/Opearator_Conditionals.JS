// ------------------------------ opearators ---------------------------

// let a = 10 ; kk
// let b = 12 ; 
// console.log(a++) ;
// console.log(++a) ; 


// strict equality .. = type of data aur value dono comparison krti he 
console.log("strict equality : ") ; 
console.log('5' === 5 ) ; 

// loose equality .. = sirf value comparison krti he .. 
console.log("loose equality : ") ; 
console.log('5' == 5 ) ; 

// ternary operator .. 
// (condition) ? val1 : val2 .. if true return val1 .. otherwise return val2 .. 
let age = 15 ; 
let ans = (age > 18) ? 'i can vote' : 'i can not vote' ; 
console.log(ans) ; 


// ------------------------------ conditionals ---------------------------

// if - else .. multiple else if can be used ...... 
// nested if else -- {if} ke andar {if} ... 
// switch cases : -----------------

console.log("IF ELSE SECTION ")
let ages = 18 ; 

if ( ages > 18 ) {
    console.log("can vote") ; 
}
else if ( ages == 18 ) {
    console.log("just able to vote") ; 
}
else{
    console.log("can not vote") ; 
}

// --------- switch case ----------- 
console.log("SWITCH CASE SECTION : ") ; 

let nums = 3 ; 
switch(nums){

    case 1:console.log("A") ; 
    break ; 
    case 2:console.log("B") ; 
    break ; 
    case 3:console.log("C") ;
    break ; 
    case 4:console.log("D") ;
    break ; 
    case 5:console.log("E") ; 
    break ; 

}