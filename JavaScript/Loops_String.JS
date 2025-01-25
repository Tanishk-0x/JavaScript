
// ---------------------- Loops Section --------------------------- 


console.log("FOR LOOP >>>>>>>>>>>>>>>")
 for ( let i=1 ; i<=5 ; i++ ) {
    console.log("num = " , i ) ; 
 }

// break = loop se bahar nikal jao .. 
// continue = current iteration ko skip kr do aur next iteration pe chale jao 

// break --------------------
console.log("BREAK >>>>>>>>>>>>>>>")
for ( let i=1 ; i<=5 ; i++) {
    if ( i == 4 ) {
        break ; // bahar nikal diya .. 
    }
    else{
        console.log(i) ; 
    }
}

// continue ----------------- 
console.log("CONTINUE >>>>>>>>>>>>>>>") ; 
for ( let i=1 ; i<=5 ; i++) {
    if ( i == 4 ) {
        continue; // skip the current iteration 
    }
    else{
        console.log(i) ; 
    }
}

console.log("WHILE LOOP  >>>>>>>>>>>>>>>") ; 

let i = 0 ; 
while ( i < 8 ) {
    console.log("while loop : " , i ) ; 
    i++ ; 
}


// do while loop = ek baar to kr hi do fir condition check kro .. 
console.log(" DO WHILE LOOP  >>>>>>>>>>>>>>>") ; 
let j = 0 ; 
do {
    console.log("Do WHile : " , j ) ;
    j++ ; 
}
while( j <= 6 ) ; 


// ------------------------- Strings ------------------------------------

// strings = sequence of characters .. 
console.log(">>>>>>>>>>>>>>>>>>> String  >>>>>>>>>>>>>>>") ; 


let FirstName = "tanishk" ; 
let SecondName = 'namdev' ; 

console.log(typeof(FirstName)) ; 
console.log(typeof(SecondName)) ; 

let names = new String("Jai Shree ram") ; 
console.log(names) ;


// ---------- string operations ----------------------- 

let op1 = 'English' ; 
let op2 = 'Hindi' ; 

// concatinate matlab jodna ...... 
let temp = op1 + op2 ; 
let temp2 = `${op1} ${op2}` ; 

console.log(temp) ; 
console.log(temp2) ; 

// to lower case .. 
// to upper case .. 

// substring ...
let str = "hellotanishk" ; 
console.log(str.substring(2,7)) ; // starting , ending index .. 

// sepration basis on space .. 
let words = "my name is tanishk namdev" ; 

let ret = words.split(' ') ; 
console.log(ret) ; 