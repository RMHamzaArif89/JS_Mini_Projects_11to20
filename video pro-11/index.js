btn=document.querySelector('.switch')
play=document.querySelector('.play')
pause=document.querySelector('.pause')
video=document.querySelector('.video')
console.log(btn)
text=document.querySelector('.text')


pause.addEventListener('click',function(){
    video.pause()
    btn.classList.add('slider')
    text.innerText='VIDEO PAUSE'
})


play.addEventListener('click',function(){
 video.play()
 btn.classList.remove('slider')
 text.innerText='VIDEO PLAY'
    
})





// another method

// btn.addEventListener('click',function(){
    
//     if(!btn.classList.contains('slider')){
//         btn.classList.add('slider')
//         video.pause()
//         text.style.color='black'
//         text.innerHTML='VIDEO PAUSE'
//     }
//     else{
//         btn.classList.remove('slider')
//         video.play()
//         text.style.color='white'
//         text.innerHTML='VIDEO PLAY'
//     }
// })
