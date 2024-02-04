    //create and add cut option
    var mylist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < mylist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("x");
      span.className = "close";
      span.appendChild(txt);
      mylist[i].appendChild(span);
    }
    
    
    
    

    
    
    
  
    
    
    
    
    
    //Create a new list item when click on the add-btn
    addBtn=document.querySelector('.add-btn')
    addBtn.addEventListener('click',function(){
        inp=document.getElementById('input')
    inpValue=inp.value;
    
    li=document.createElement('li')
    text=document.createTextNode(inpValue)
    li.appendChild(text)
    if(inpValue===" "){
        alert('please enter your task in the list')
    }else{
        document.getElementById('ul').appendChild(li)
    }
    document.getElementById('input').value=' ';
    
    
    
    
      var span = document.createElement("span");
      var txt = document.createTextNode("x");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);






      // add the checked classlist using toggle
        list=document.querySelectorAll('li')
    list.forEach(function(e){
        e.addEventListener('click',function(h){
          // console.log(this)
            this.classList.toggle('checked')
        })
    })
    


    
    
    
      dele = document.getElementsByClassName("close");
      for (i = 0; i < dele.length; i++) {
        dele[i].onclick = function() {
          
          var close = this.parentElement;
          close.style.display = "none";
        }
      }
    
    
    })







