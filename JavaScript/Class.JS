

console.log("class >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>") ; 

//-------------------
class Human {

    // properties ..
    age = 17 ; 
    name = "harry" ; 

    // private : 
    // height is private marked cannot be access outside .. 
    #height = 150 ; 

    // -------------- constructor ---------------------- 
    constructor ( newAge) {
        this.age = newAge ;
        console.log(" constructor is called successfully .. ") ;  
    }
    // -------------- constructor ---------------------- 


    // behaviors .. functionality .. 

    // function to access private (money) ... 
    accessPrivate() {
        console.log("I have accessed private : " , this.#height) ; 
    }

    walking() {
        console.log("I am Walking hurray ... ") ; 
    }

    eating() {
        console.log("I am Eating yehh ... ") ; 
    }

}
//------------------

// creating object .. 
let obj = new Human(20) ; // constructor called 

// accessing .. 
console.log(obj.name) ;
console.log(obj.age) ;

obj.accessPrivate() ;

obj.eating() ; 
 

//--------------------------------------------------------------------------------------------
// ------------------- default parameter -----------------------------------------------------
console.log("DEFAULT PARAMETER >>>>>>>>>>>>>>>>>>>>>>>>>>>> ") ; 

function sayName(myName = "prabhu deva") { // default parameter = prabhu deva .. 
    console.log("my name is : " , myName) ; 
}

sayName() ; 


// function sum(a , b = 23 ) {
//     let ans = a + b ; 
//     console.log(ans) ; 
// }

// sum(2) ; 

// deafault parameter me object bhi daal sakte he .. 
function solve ( value = {age:12 , weight: 20 , height: 50 }) {
    console.log("object as default parameter : " , value ) ; 
}

solve() ; 