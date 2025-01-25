//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------



// async function getData() {
//     setTimeout(function() {
//         console.log("i am inside the set time out block ... ") ; 
//     }, 5000) ; 
// }

// getData() ; 


// await .. 
// await = flow of execution will stops here .. 

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//-------- FETCH API ---------------------------------------------------------------

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    // parse .. 
    let data = await response.json() ; 
    console.log( data ) ; 
}

getData() ; 

//scenario : 
// prepare url / api endpoint --> sync .. 
// { await } fetch data --> network call --> async .. (jab tak data na aa jaye tak tak process na kru)
// process data --> sync 

