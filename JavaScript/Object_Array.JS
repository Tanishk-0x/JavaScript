
// ------------------- objects --------------------- 

let obj = {
    name : "tanishk" , 
    age : 17 , 
    address : "Indore" ,
    // function in object .. 
    greet : function() {
        console.log("object 's function called ") ; 
    }
} ; 

console.log(obj) ; 

console.log(obj.name) ; 

// calling objects function 
obj.greet()  ; 

console.log(typeof(obj)) ; 

let obj2 = obj ; // obbj2 points to the same object .. 


// ------------------------------ arrays -------------------------------
// array = collection of items 
console.log("ARRAY SECTION >>>>>>>>>>>>>>>>>>>>>>>>>>") ; 


let arr = [ 1,2,3,4,5] ; 
console.log(arr) ; 

let brr = new Array ('tanishk' , 5 , true ) ; 
console.log(brr) ; 

// map inbuilt method .. 
let ans = arr.map((number) => {
    return number*number ;
}); 

console.log(ans) ; 

// filter inbuilt method .. 
let bns = arr.filter((number) => {

    if ( number % 2 === 0 ) {
        return true ; 
    }
    else{
        return false ; 
    }

});

console.log(bns) ; 

// reduce inbuilt method ..
let array = [10 , 20 , 30 , 40] ; 
let sns = array.reduce((acc , curr) => {
    return acc + curr ; 
}, 0 ) ; 

console.log(sns) ; 

// FOR EACH LOOP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("FOR EACH >>>>>>>>>>>>>>>>>>>>> ") ; 

let aarr = [10,20,30,40,50] ; 
aarr.forEach((value , index) => {
    console.log("Number :" , value , "Index : " , index ) ; 
});

// FOR IN LOOP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("FOR IN >>>>>>>>>>>>>>>>>>>>> ") ; 

let objs = {
    name : "tanishk" , 
    age : 17 , 
} ; 

for ( let key in objs ) {
    console.log(key) ; 
}



// FOR OF LOOP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("FOR OF >>>>>>>>>>>>>>>>>>>>> ") ; 

let fullname = "TANISHK" ; 
for ( let itr of fullname ) {
    console.log(itr) ; 
}


// PAAASING ARRAY TO FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("PASSING ARRAY INTP FUNCTION >>>>>>>>>>>>>>>>>>>>> ") ; 

// paasing array into the functioon ... 
let arra = [10,20,30,40,50] ; 

function getSum (arra) {
    let n =arra.length ; 
    let sum = 0 ; 

    for ( let i=0 ; i<n ; i++ ) {
        sum = sum + arra[i] ; 
    }
    return sum ; 
}

let total_ans = getSum(arra) ; 
console.log(total_ans) ; 