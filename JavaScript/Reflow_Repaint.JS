

// perfornmace . now method ... 
// it is used to determine how much time is taken to reun the code .. 

// REFLOW = process of calculating position and dimensions of the elements .. time taken and computational task 
// REPAINT = process of displaying content or element [pixel by pexel] .. it is faster than reflow 

// ---- code 1 : --------------------------------------------- 
// ---- code 1 : --------------------------------------------- 
// ---- code 1 : --------------------------------------------- 

const t1 = performance.now() ; 



for ( let i=1 ; i<20 ; i++ ) {
    let para = document.createElement('p') ; 
    para.textContent = "this is para : " + i ; 
    document.body.appendChild(para) ; 
}


const t2 = performance.now() ; 

console.log("total time taken by code 1 is : "  +  (t2-t1) ) ; 

// 20 reflows 
// 20 repaints 


// ---- code 2 : --------------------------------------------- 
// ---- code 2 : --------------------------------------------- 
// ---- code 2 : --------------------------------------------- 


const t3 = performance.now() ; 


let mydiv = document.createElement('div') ; 


for ( let i=1 ; i<20 ; i++ ) {
    let para = document.createElement('p') ; 
    para.textContent = "this is para : " + i ; 
    mydiv.appendChild(para) ; 
}

document.body.appendChild(mydiv) ; 

const t4 = performance.now() ; 

console.log("total time taken by code 2  is : "  +  (t4-t3) ) ; 

// 1 reflows 
// 1 repaints 


// thus code 2 is faster than code 1 ------------------------- 
// thus code 2 is faster than code 1 ------------------------- 
// thus code 2 is faster than code 1 ------------------------- 




// ---------------- best code ----------------------------------------  
// ---------------- best code ----------------------------------------  
// ---------------- best code ----------------------------------------  

// Document Fragement = ek light weight object he jo element addition ya append karne ke time ..  
// no reflow aur no repaint leta he .. 

// creating document fragement .. 
let fragment = document.createDocumentFragment() ; 

for ( let i=1 ; i<20 ; i++ ) {
    let para = document.createElement('p') ; 
    para.textContent = "This is para : " + i ; 
    // no reflow and no repaint for the below line .. 
    fragment.appendChild(para) ; 
}

// the below line takes 1 reflow and 1 repaint .. 
document.body.appendChild(fragment) ; 