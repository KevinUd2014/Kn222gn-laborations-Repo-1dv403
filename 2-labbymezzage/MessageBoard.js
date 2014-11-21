"use strict";
    
    
    var MessageBoard = {
     
     message: [],
     
     init:function(e)
     {
    
    var mess = new Message("TestMessage", new Date());
    //alert(mess);  // den här använder toString för utskrift
    console.log(mess.getText);
    //alert(mess.getText());  //Skriver enbart ut texten
    mess.setText("Other Text");
    //alert(mess); //Skriver ut meddelandet med ändrad text
    console.log(mess.getText);
    console.log(mess.getDate);
    }
    
    
};

window.onload = MessageBoard.init;