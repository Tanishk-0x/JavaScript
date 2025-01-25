
// compile time error .. 
console.log("COMPILE TIME ERROR ______________________ ") ; 
// console.log(1 ; // syntax errror in the category of compile time error 


// run time error ... 
console.log("RUN TIME ERROR __________________________ ") ; 
// console.log( x ) ; // runtime error ( reference error ) ... because x is not declared .. 



// --------------- TRY - CATCH BLOCK ---------------------------
console.log("TRY_CATCH BLOCK __________________________ ") ; 

// console.log( x ) ; 


try{
    console.log("Try block Starts here .. ") ; 
    console.log( x ) ; // ERROR .. 

    // a ----------
    // b ----------
    // c ----------
    console.log("try block end here") ; // execute hi nhi hogi directly catch pr pahuch jaeyga .. 

}

catch(error) {
    // define krta he , error ke sath kya krna he .. 
    // jaise------ 
    // retry logic
    // fallback mechanism 
    // logging 
    // custom error 

    console.log(" I A'm inside Catch_Block ") ; 

    //------------------------------------------------------
    // printing error .. 
    console.log( " the error is : " , error) ; 
    //------------------------------------------------------

}

// finally{

//     console.log(" I a'm finally bloack i runs every time ") ; 
// }


// ---------- HOW TO ADD CUSTOM ERROR USING ( THROW ) KEYWORD ....


try {
    console.log( marks ) ;
}

catch(err){
    throw new Error("Bhai Pehle marks ko declare to kr lo fir use krna .... ") ; 
}

