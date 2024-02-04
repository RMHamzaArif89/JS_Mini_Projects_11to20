about = document.querySelector('.about')                          
info = document.querySelector('.info')
more = document.querySelector('.more')





//select btn container
btnCon = document.querySelector('.btn-container')
//select all buttons
btn = document.querySelectorAll('.btn')
//select all articels
contents = document.querySelectorAll('.content')


btnAbout = document.querySelector('.btn-about')
btninfo = document.querySelector('.btn-info')
btnMore = document.querySelector('.btn-more')

img=document.querySelector('img')





btnCon.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
  

    if (id) {
        

        btn.forEach(function (b) {

            b.classList.remove('btn-active')
            e.target.classList.add('btn-active')

        });

        contents.forEach(function (c) {
            c.classList.remove('active')
        })
        document.getElementById(id).classList.add('active');



        if(id=='info'){
            img.src='/images/con1-img3.jpg'
           }else if(id=='more'){
            img.src='/images/con3-img2.jpg'
               
           }else if(id=='about'){
            img.src='/images/con1-img2.jpg'
               
           }
    }
   



})