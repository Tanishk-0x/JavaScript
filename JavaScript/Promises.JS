//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------


let firstsPromise = new Promise((resolve, reject) => {
    console.log("hello domsto ") ; 
    // resolve(1001) ; 
    reject(new Error(" internal error is occured stay .. ")) ; 
}) ; 

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

function sayMyName() {
    console.log(" my name is abcdef ") ; 
}


setTimeout(sayMyName , 10000 ) ; 

setTimeout( function sayMyName() {
    console.log(" my name is abcdef ") ; 
} , 10000 ) ; 

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------



let firstPromise = new Promise((resolve, reject) => {
    
    setTimeout( function sayMyName() {
        console.log(" my name is abcdef ") ; 
    } , 10000 ) ; 
    
}) ; 

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

let promise1 = new Promise((resolve, reject) => {
    let sucess = false ; 
    if ( sucess ) {
        resolve(" promise is fulfilled .. ") ; 
    }
    else{
        reject("promise is rejected .. ") ; 
    }
}) ; 

promise1.then((massege) => {
    console.log("then ka massege is : " + massege ) ; 
}).catch((error) => {
    console.log(" Error : " + error ) ; 
})
