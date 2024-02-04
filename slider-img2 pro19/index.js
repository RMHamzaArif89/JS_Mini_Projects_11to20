buttons = document.querySelectorAll('.btn')

img = document.querySelector('img')



async function logimages() {
    const response = await fetch("index.json");
    imgArr = await response.json();
    

    
    generateImages()
  }
  logimages()






let counter = 0;
buttons.forEach(function(button){
      button.addEventListener('click',generateImages=()=>{
        if(button.classList.contains('btn-left')){
            counter--;
            if(counter <0){
                counter = imgArr.length-1;
            }
            
         img.src=`/images/${imgArr[counter]}`
         console.log(img.src)

            
         
           
        }
        if(button.classList.contains('btn-right')){
            counter++;
            if(counter > imgArr.length){
                counter =1;
            }
        
             img.src=`/images/${imgArr[counter]}`
        }
        
    })


});
