"use strict";

var theQuiz{
  
  
    init:function(){
    
    
    
  }





    renderMessage:function(){
  
    document.getElementByID("knapp").addEventListener("click", function(){
      
        var xhr = new XMLHttpRequest();
      
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var pers = JSON.parse(xhr.responseText);
                console.log(pers.first);
              
            }
        };
      
        xhr.open("GET", "http://vhost3.lnu.se:20080", true);
      
        xhr.send(null);
      
    });
    
};
}