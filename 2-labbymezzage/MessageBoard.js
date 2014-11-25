"use strict";
    
    
    var MessageBoard = {
    
    message: [], // skapar en array! message
    numberOfMessages: 0,// en funktion som ska hålla reda på hr många kommentarer de har skrivits!
     
    init:function()
    {
        var send = document.getElementById("sendButton"); //skapar här en ny variabel som ska ta omhand om när man trycker på skicka knappen
        
        send.onclick = function(e){//när man nu trycker på skicka knappen så anropar denna funktionen send message som tar omhand om de skickade meddelnadet!
            
            if (document.getElementById("textEntry").value !== "") // om nu detta uppfylls så skickas infon 
            {
                MessageBoard.sendMessage();
            }
            else // och om detta inte uppfylls så händer inget!
            {
                e.preventDefault();
            }
        };
        
        var enterSend = document.getElementById("textEntry"); // samma här om man nu klickar på enter knappen så hände ringet om inget är skrivet i textrutan!!
        enterSend.onkeypress=function(e) // gör så att ifall eventets krav uppfylls så skickas den till send message!
        {
            if (e.keyCode == 13 && !e.shiftKey && document.getElementById("textEntry").value !== "") //key 13 är enterknappen
            {
                e.preventDefault(); // vet ej varför denna är här!
                MessageBoard.sendMessage(); // anropar min send message funktion i messageboard
            }
            if (e.keyCode == 13 && document.getElementById("textEntry").value === "") // finns det inget i textrutan så skrivs intget ut!!
            {
                e.preventDefault();
            }
        
        };
    
    
    },
    
    sendMessage: function() // skickade meddelande funktionen!
    {
        var entry = document.getElementById("textEntry").value; // skapar nu en ny variabel som innehåller allt som står i text entry rutan och ger detta ett värde med value!
        MessageBoard.message.push(new Message(entry, new Date()));// skapar här ett nytt message som innehåller entry variabeln och ett datum
        //alert(MessageBoard.message[MessageBoard.numberOfMessages]);
        MessageBoard.numberOfMessages++;// plussar här på antalet meddelanden
        document.getElementById("numberOfMessages").innerHTML = "Message Count: " + MessageBoard.message.length;// länkar här nummer av meddelanden till denna skriver samma text vilket kommer ändras i html documentet!
        var arrayList = MessageBoard.message.length -1; // skapar nu en array som ska innehålla alla meddelanden (vet inte riktigt vad -1 gör!)
        MessageBoard.RenderMessage(arrayList);// skickar nu listan till render message !
    },
    
    RenderMessage: function(entry)  // tar emot entry variablen
    {
        var textArea = document.createElement("div");// skapar en ny variabel och ett element p!
        textArea.id = "textArea";
        //document.getElementById("messagesSection").innerHTML = textString + MessageBoard.messages[entry].getHTMLText() + textString;
        //textString.innerHTML = MessageBoard.message[entry].getHTMLText(); // 
        var funcTion = document.getElementById("messagesSection");
        funcTion.appendChild(textArea); // får inte denna att funka!!!!
        funcTion.scrollTop = funcTion.scrollHeight;
        
        var textString = document.createElement("p");
        textString.innerHTML = MessageBoard.message[entry].getHTMLText();
        textArea.appendChild(textString);
        
        var theTimeOutput = document.createElement("div"); // skriver ut tiden med nummer!!
        theTimeOutput.id = "timeNumber";
        theTimeOutput.innerHTML = MessageBoard.message[entry].getDateText();
        textArea.appendChild(theTimeOutput);
        
        //textString.appendChild(funcTion);
        
        /*var childTime = document.getElementById("timeChildElement");
        var timeOfMessage = document.createElement("h5");// en ny variabel som sparar tiden i timeOfMessage
        timeOfMessage.innerHTML = MessageBoard.message[entry].getDateText();// lägger här in arrayen i inner html koden 
        childTime.appendChild(timeOfMessage);// applicerar här detta på alla child element i html documentet*/
        
        var image = document.createElement("img"); // iconen för ta bort meddelandet!
        image.src = "Pics/Deleate.png"; //iconens källa 
        image.id = "Delete"; // skapar ett id för iconen
        textArea.appendChild(image); // lägger in iconen i messageboard.message, den hamnar dock fel!
        
        var timeImage = document.createElement("img");// samma som ovan fast med klockan!
        timeImage.src = "Pics/Clock.png";
        timeImage.id = "Clock";
        textArea.appendChild(timeImage);
        
        
        
        
        
        image.onclick = function(e)
        {
            if (confirm("Are you sure you want to delete this message?"))
            {
                //MessageBoard.numberOfMessages -= 1;
                //textArea.parentNode.removeChild(textArea);//tar bort texten
                //textString.parentNode.removeChild(textString);
                /*theTimeOutput.parentNode.removeChild(theTimeOutput);//Tiden, nummer
                image.parentNode.removeChild(image);//papperskorgs iconen
                timeImage.parentNode.removeChild(timeImage);//klock iconen!*/
                MessageBoard.message.splice(entry, 1);
                document.getElementById("numberOfMessages").innerHTML = "Message Count: " + MessageBoard.message.length;// länkar här nummer av meddelanden till denna skriver samma text vilket kommer ändras i html documentet!
                MessageBoard.renderMessages();
                //document.getElementById("numberOfMessages").innerHTML = "Message Count: " + MessageBoard.numberOfMessages;// länkar här nummer av meddelanden till denna skriver samma text vilket kommer ändras i html documentet!
            }
        };
        timeImage.onclick = function(e)
        {
            alert(MessageBoard.message[entry].getDate()); // skickar en alertruta om att vi håller på o ta bort ett inlägg!
        };
    },
        
        renderMessages: function()
        {
            document.getElementById("messagesSection").innerHTML = "";
        
            for(var del = 0; del < MessageBoard.message.length; ++del){
            
                MessageBoard.RenderMessage(del);
        }
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