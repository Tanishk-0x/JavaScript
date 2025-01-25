let cl = document.getElementById("fpara") ; 

function bgchnage() {
    let cl = document.getElementById("fpara") ; 
    cl.style.color = "red" ; 
} 

cl.addEventListener('click' , bgchnage ) ; 

// cl.removeEventListener('click' , bgchnage ) ; 


// ------------ multiple --------------------------------------- 
// ------------ --------------- ---------------- --------------- 

let paraa = document.querySelectorAll('p') ; 

for ( let i=0 ; i<paraa.length ; i++ ) {
    let temp =  paraa[i] ; 
    temp.addEventListener('click' , function() {
        temp.style.backgroundColor = "blue" ; 
        // alert("you have click on para" + (i+1) ) ; 
    })
}; 


//--------------- multiple events ----------------------------------
// ------------ --------------- ---------------- --------------- 

function alertpara(event) {
    alert("you have clicked on para : " + event.target.textContent ) ; 
}


let mydiv = document.getElementById("wrap") ; 

document.addEventListener('click' , alertpara)