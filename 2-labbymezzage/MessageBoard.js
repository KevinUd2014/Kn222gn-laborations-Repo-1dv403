"use strict";
    
    
    var MessageBoard = {
    
    message: [], // skapar en array! message
    numberOfMessages: 0,// en funktion som ska hålla reda på hr många kommentarer de har skrivits!
     
    init:function()
    {
         var send = document.getElementById("sendButton"); //skapar här en ny variabel som ska ta omhand om när man trycker på skicka knappen
         send.onclick = MessageBoard.sendMessage;//när man nu trycker på skicka knappen så anropar denna funktionen send message som tar omhand om de skickade meddelnadet!
    },
    
    sendMessage: function() // skickade meddelande funktionen!
    {
        var entry = document.getElementById("textEntry").value; // skapar nu en ny variabel som innehåller allt som står i text entry rutan och ger detta ett värde med value!
        MessageBoard.message.push(new Message(entry, new Date()));// skapar här ett nytt message som innehåller entry variabeln och ett datum
        //alert(MessageBoard.message[MessageBoard.numberOfMessages]);
        MessageBoard.numberOfMessages++;// plussar här på antalet meddelanden
        document.getElementById("numberOfMessages").innerHTML = "Message Count: " + MessageBoard.numberOfMessages;// länkar här nummer av meddelanden till denna skriver samma text vilket kommer ändras i html documentet!
        var arrayList = MessageBoard.message.length -1; // skapar nu en array som ska innehålla alla meddelanden (vet inte riktigt vad -1 gör!)
        MessageBoard.RenderMessage(arrayList);// skickar nu listan till render message !
    },
    
    RenderMessage: function(entry)  // tar emot entry variablen
    {
        var textString = document.createElement("p");// skapar en ny variabel och ett element p!
        //document.getElementById("messagesSection").innerHTML = textString + MessageBoard.messages[entry].getHTMLText() + textString;
        textString.innerHTML = MessageBoard.message[entry].getHTMLText(); // 
        var funcTion = document.getElementById("messagesSection");
        funcTion.appendChild(textString); // får inte denna att funka!!!!
        funcTion.scrollTop = funcTion.scrollHeight;
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