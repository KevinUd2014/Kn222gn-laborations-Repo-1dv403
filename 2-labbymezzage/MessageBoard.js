"use strict";
    
    
    var MessageBoard = {
     
    message: [],
    numberOfMessages: 0,
     
    init:function()
    {
         var newMessage = document.getElementById("sendButton");
         newMessage.onclick = MessageBoard.sendMessage;
    },
    
    sendMessage: function()
    {
        var entry = document.getElementById("textEntry"). value;
        MessageBoard.message.push(new Message(entry, new Date()));
        alert(MessageBoard.message[MessageBoard.numberOfMessages]);
        MessageBoard.numberOfMessages++;
    }
    
};
    
    /*    var mess = new Message("TestMessage", new Date());
    //alert(mess);  // den här använder toString för utskrift
    console.log(mess.getText());
    //alert(mess.getText());  //Skriver enbart ut texten
    mess.setText("Other Text");
    //alert(mess); //Skriver ut meddelandet med ändrad text
    console.log(mess.getText());
    console.log(mess.getDate());
    MessageBoard.getMessages();*/
    
    /*getMessages: function(){
        MessageBoard.message.push(new Message("Testar om ", new Date()), new Message("allt går o skriva såhär", new Date()), new Message("Verkar gå bra!", new Date()));

        console.log(MessageBoard.message[0]);
        console.log(MessageBoard.message[2].getText());
    }*/


window.onload = MessageBoard.init;