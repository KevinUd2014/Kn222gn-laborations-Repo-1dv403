"use strict";
    
    
    function Message (message, date){
        
        this.getText = function(){
          return message;  
        };
        
        this.getText = function(){
          message = _text;  
        };
        this.getDate = function(){
            return date;                //vet ej om denna är rätt!
        };
        this.setDate = function(){
            date = _date
        };
    }
    
    Message.prototype.toString = function(){
        return this.getText()+" ("+this.getDate()+")";
    }
    
    Message.prototype.getHTMLText = function(){
        return this.getText().replace(/[\n\r]/g, "<br/>");
    }
    
    Message.prototype.getDateText = function(){
        
    }
    
    
    
    
    window.onload = Message;