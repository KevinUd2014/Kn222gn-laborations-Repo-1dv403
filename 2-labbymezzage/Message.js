"use strict";
    
    
    function Message (message, date){
        
        this.getText = function(){
          return message;  
        };
        
        this.setText = function(_text){
          message = _text;  
        };
        this.getDate = function(){
            return date;
        };
        this.setDate = function(_date){
            date = _date;
        };
    }
    
    Message.prototype.toString = function(){
        return this.getText()+" ("+this.getDate()+")"; // fick hjälp med denna med!!
    };
    
    Message.prototype.getHTMLText = function(){
        return this.getText().replace(/[\n\r]/g, "<br/>"); // fick hjälp med denna helt omöjligt annars...
    };
    
    Message.prototype.getDateText = function(){
        
        var hour = this.getDate().getHours();// SKAPAR TRE NYA VARIABLAR SOM SKA INNEHÅLLA DATUM MED BÅDE TIMMAR, MINUTER OCH SEKUNDER!
        var minute = this.getDate().getMinutes();
        var Second = this.getDate().getSeconds();
        
            if (minute < 10)
            {
                minute = "0" + minute;
            }
            if (Second < 10)
            {
                Second = "0" + Second;
            }
            
                return + hour + ":" + minute + ":" + Second;
    };