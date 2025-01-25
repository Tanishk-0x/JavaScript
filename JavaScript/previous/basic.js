// how to output in console .. 
console.log("jai shree ram") ; 
//console.log(3+5) ; 
//console.log("3") ; 

//---------------------------------------------------------------------

// declaring variable .. 
// data type define nhi krte .. 

// a = 10 ; 
// console.log(a+5) ; 
// x = "tanishk" ; 
// console.log(x) ;
// b = 10.54 ; 
// console.log(b) ; 
// d = "tanishk namdev" ; 
// console.log(d) ;
// t = 5 ; 
// t *= 6 ; 
// console.log(t) ;
// a = 10 ; 
// b = 76 ;

//-----------------------------------------------------------------

// console.log(a,b,a+b) ; 
// seprate using , ans also we can use + to add to or more things .. 
// age = 18 ; 
// console.log("my age is",age) ; 
// console.log("my age is " + age) ; 

//-------------------------------------------------------------------

//   let 
//   var 
//   const 


// let x = 2**3 ; // iska matlab 2 ki power 3 .. 
// console.log(x) ; 

// === operator in javascript ...

//---------------------------------------------------------------------

// data types in javascript .. 
// a = 4 ; 
// b = 7.54 ; 
// c = "tanishk" ; 
// d = true ; 
// e = 't'
// typeof function se uska type pta kr sakte he .. 
// single quotes me bhi string hi hoti he .. 
// console.log(typeof a) ; 
// console.log(typeof c) ; 
// console.log(typeof d) ; 


//----------------------------------------------------------------------
// coditional statements ... 

// let age = 15 ; 

// same as C++ .. 

// if( age > 18 ){
//     console.log(" adult .. ") ; 
// }
// else if( age < 18 && age > 13){
//     console.log("teenager .. ") ;; 
// }
// else{
//     console.log("child .. ") ; 
// }

//----------------------------------------------------------------------
// Logical operator .. 

//          && 
//          ||
//          != 
//          == 
//          ===

//  ==
// let a = 45 ; 
// let b = '45' ; 
// console.log(a==b) ; //  True // == sirf value ko dekhta he 

//  ===  
// let r = 76 ; 
// let s = "76" ; 
// console.log(r===s) // false  // === value or type dono ko dekhta he .. 


//----------------------------------------------------------------------
// LOOPS IN JAVASCRIPT .. 
// same as C++ .. 

    // FOR LOOP .. 
    // for(let i = 0 ; i < 10 ; i++){
    //     console.log("jai shree ram " , i ) ; 
    // }


    // WHILE LOOP .. 
    // let i = 1 ; 
    // while( i <= 10 ){
    //     console.log("jai shree ram " , i ) ;
    //     i++ ;  
    // }


    // DO WHILE LOOP 
    // let i = 1 ; 
    // do{
    //     console.log( " jai shree ram " , i) ; 
    //     i++ ; 
    // }
    // while( i <= 5 ) ; 

//----------------------------------------------------------------------
// ARRAY IN JAVASCRIPT .. array hi vector he .. 

// declaring 
//  arr = [ 5 , 10 , 15 , 19 , 21 ] ; 
//  console.log(arr) ;  // pura array print ho jaeyaga .. 

// printing through iterate .. 
//  n = arr.length ; 
//  for( let i = 0 ; i < n ; i++){
//     console.log(arr[i]) ; 
//  }

// // push .. 
// arr.push(92) ; 
// console.log(arr) ; 

// // pop .. 
// arr.pop() ; 
// console.log(arr) ; 

// // unshist operator 
// // array ke aage hi element dal sakte he .. 
// arr.unshift(53) ; 
// console.log(arr) ; // isse array ke aage element (53) insert ho jayega ..

// // shift operator .. 
// // array ke first element ko remob=ve kr dega .. 
// arr.shift() ; 
// console.log(arr) ; 

// array me alag alag data types ke element bhi dal sakte he .. 
// let xrr = [55 , "tanishk" , true , 5.21 ] ; 
// console.log(xrr) ; 

// indexing same hoti he .. C++ jaisi .. 

//    2D ARRAY .........................................

    // let brr = [[1,5,7,9],[2,4,6,8]] ; 
    // console.log(brr) ; 

//  forof and foreach loop .................................

    // let srr = [54 , 76 , 23 , 98 , 92 , 87 ] ; 

    //  FOROF loop ......................................
    // for (const iterator of object) { // object ki jagah array ka naam 
                                        // iterator .. 
    // }

    // for (const it of srr) {
    //     console.log(it) ; // index print nhi kra sakate .. 
    // }


    // FOREACH loop ....................................
    // array.forEach(element => {
        
    // });

    // srr.forEach((value , index)  => {
    //     console.log(value , index , "jai shree ram ") ; 
    // });

//----------------------------------------------------------------------
// truthy ans falsy ...............

// FALSY VALUES = falses condition , false , 0  , null , undefined , NaN

    // if(true){
    //     console.log("if wali statement chali he .. ") ; // truthy 
    // }
    // else{
    //     console.log("else wali statement chali he .. ") ; // falsy 
    // }

//--------------------------------------------------------------------
// STRING IN JAVASCRIPT .............. 

    // let str = "tanishk" ;
    // console.log(str) ; 
    // console.log(str[3]) ; 

    // // for loop ... 
    // for(let i=0 ; i<str.length ; i++){
    //     console.log(str[i]) ; 
    // }

    // // forof loop ... 
    // for (const it of str) {
    //     console.log(it) ; 
    // }

    // // foreach loop string ke liye kaam nhi kartta ... 

    // // INBUILT FUNCTION ....... 
    // console.log(str.toUpperCase()) ; 

    // console.log(str.indexOf('s')) ;
    
    // console.log(str.trim()) ; 

    // console.log(str.slice(1 , 4)) ; 

    // // split function ... 
    // let xtr = "my name is tanishk namdev " ; 
    // let arr = xtr.split(' ') ; 
    // console.log(arr) ; 
    // for (const itr of arr) {
    //     console.log(itr) ; 
    // }

//---------------------------------------------------------------------
// template literals ...... ( ` ` )

// let age = 25 ; 
// let exp = 3 ; 

// console.log(` my age is ${age} and my experience is ${exp} `) ; 

// //  if we have to print tan"ishk .... 
// console.log(` tan"ishk `) ; 

//---------------------------------------------------------------------
// OBJECTS ....................................... 
// javascript me object map ki tarah hote he jha pe key-value ke pairs hote he ... 

// let x = {
//  //  key - values    
//     name: "tanishk" ,  
//     age: 18 , 
//     cgpa: 8.05 , 
//     isMarried: false 
// };
// // name , age , cgpa , ismarried is the keys and tanishk , 18 , 8.05 , false is the values .. 

// console.log(x) ; // agar pura object print krna he .. 

// console.log(x.name) ;
// console.log(x.cgpa) ; 
// console.log(x['isMarried']) ; 
// // rechanege ...... 
// x.age = 20 ; // changingggggg ... 

//   forin loop se print krte he ... 

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in x) {
//     if (Object.hasOwnProperty.call(x, key)){
//         console.log(key , x[key]) ; 
//     }
//  }

//  // forof -----> forin ... 
//  for (const key in x) {
//     console.log(key)
//  }






//----------------------------------------------------------------------