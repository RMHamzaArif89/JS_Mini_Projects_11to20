btn = document.querySelector('button')
input=document.querySelector('.input')

display=document.querySelector('#display')
comment=document.querySelector('.comment')


btn.addEventListener('click',function func() {
display.innerText=input.value


if(!comment.classList.contains('block') && (input.value)){
    comment.classList.add('block')
    btn.innerText='okay'
input.value=''

    
}else{
comment.classList.remove('block');
btn.innerText='submit'


}






})







cursor=document.querySelector('.cursor')
// var timeout;
document.addEventListener('mousemove',(e) =>{
let x = e.pageX;
let y = e.pageY;
cursor.style.top = y + 'px'
cursor.style.left = x +'px'
cursor.style.display = 'block'
});