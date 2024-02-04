
(function(){
    All = document.querySelectorAll('.item')

   
    
    
            btn = document.querySelectorAll('.btn')
        
        
        
    
            btn.forEach((button) => {
                
                button.addEventListener('click', (e)=>{
                    // e.preventDefault()
                    // const filter =e.target.dataset.filter
                    // console.log('hn')
                    // console.log(filter)
                    cls=button.innerHTML
                    // console.log(cls)
    
                    
                    All.forEach((item) => {
                        
                        if (cls==='All'){
                            
                            item.style.display='block'
                        }
                           
                       else if(cls==='web'){
                        item.style.display='none'
                        web = document.querySelectorAll('.web')
                       
                        
                            for(i=0;i<web.length;i++){
    
                                web[i].style.display='block';
    
                            }
    
                            
    
                       }           
                       else if(cls==='mobile'){
                        item.style.display='none'
                        mobile = document.querySelectorAll('.mobile')
                        
                            for(i=0;i<mobile.length;i++){
                
                                mobile[i].style.display='block';
    
                            }
    
    
                            
    
                       }
                      
                       else if(cls==='graphic'){
                        item.style.display='none'
                        
                        graphic = document.querySelectorAll('.graphic')
                        
                        
                            for(i=0;i<graphic.length;i++){
                                
                               a=graphic[i]
                                a.style.display='block';
    
                            }
                       }           
                       
                    });
                })
            });
})();





