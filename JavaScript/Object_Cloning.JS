// object cloning and garbage collector ............ 

console.log("__________________________________________") ; 

// object can be change dynamically .. 

let obj = {
    age : 12 , 
    weight : 87 , 
    height : 150 
}; 


// console.log(obj) ; 

// obj.height = 222 ; 
// console.log(obj) ; 


let src = {
    age : 12 , 
    weight : 87 , 
    height : 150 
};

// cloning src by using spread operator [ . . . ] 
let dest = { ...src } ; // cloning .. 

console.log("After Clonning ( spread operator)---- ") ; 
console.log("dest : " , dest) ;


// cloning src by using assign method 
let assdest = Object.assign( {} , src ) ; 

console.log("After Clonning ( assign method ) ---- ") ; 
console.log("dest : " , assdest) ; 