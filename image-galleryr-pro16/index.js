con= document.querySelector('.con')
left=document.querySelector('.left')
right=document.querySelector('.right')

con.addEventListener('wheel',(e)=>{
e.preventDefault();
con.scrolleft +=e.deltaX;
});


right.addEventListener('click',()=>{
    con.style.scrollBehavior = 'smooth';
    con.scrollLeft+=900;
})


left.addEventListener('click',()=>{
    con.style.scrollBehavior = 'smooth';
    con.scrollLeft-=900;
})