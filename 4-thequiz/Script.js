"use strict";


var theQuiz={
  
    questionArray:[],
    tries: 0,
    serverObject: null,
  
  
    init:function(){
        
        var userEntry = document.getElementById("Answer");            // HÄmtar Answer från html dokumentet
        document.getElementById("repeatQuestion").value ="";            // hämtar repeatquestion från html och ger det ett värde!
        
        document.getElementById("Button").addEventListener("click", function(e)          //Denna Funktionen lägger till så att knappen blir klickbar.!
        {
            e.preventDefault();
            theQuiz.theAnswer(userEntry.value, theQuiz.serverObject.nextURL);
        }),
        
        document.getElementById("Button").addEventListener("keydown", function(e)
        {
            if(e.keyCode === 13){
                e.preventDefault();
                theQuiz.theAnswer(userEntry.value, theQuiz.serverObject.nextURL);
            }
        }),
        
        theQuiz.renderMessage("http://vhost3.lnu.se:20080/question/1");  //skickar frågan vidare!
  },
  
    renderMessage: function(URL){ // tar emot frågan som variabeln URL
      
        theQuiz.tries = 1;
        //var xhr = new XMLHttpRequest();
        var userEntry2 = document.getElementById("Answer");
        document.getElementById("repeatQuestion").value = "";
        userEntry2.value = "";
        
        /*document.getElementByID("knapp").addEventListener("click", function(){*/
      
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                theQuiz.serverObject = JSON.parse(xhr.responseText);
                document.getElementById("question").innerHTML = theQuiz.serverObject.question;
                console.log(xhr.responseText);
            }
        
        },
        
        xhr.open("GET", URL, true);
        xhr.send(null);
        
    /*});*/
    
},

    theAnswer: function(answer, URL){
        //theQuiz.tries = 1;
        var questionRepeat = document.getElementById("repeatQuestion");
        var xhr2 = new XMLHttpRequest();
        var i;
        var status = document.getElementById("question");
        
        xhr2.onreadystatechange = function(){
        
            if(xhr2.readyState === 4)
            {
                var Serverresponse = JSON.parse(xhr2.responseText);
                
                    if (Serverresponse.message === "Correct answer!")
                    {
                        questionRepeat.innerHTML ="";
                        if(Serverresponse.nextURL !== undefined)  // fick hjälp med denna vet inte riktigt hur den funkar!
                        {
                            theQuiz.questionArray.push(theQuiz.tries);
                            theQuiz.renderMessage(Serverresponse.nextURL);
                        }
                        
                        else
                        {
                            theQuiz.questionArray.push(theQuiz.tries);
                            status.innerHTML ="Congrats your resault is:";
                            
                            document.getElementById("Button").disabled = true; //stänger av knappen
                            document.getElementById("Answer").value =""; //ger svaren ett värde!
                            document.getElementById("Answer").disabled = true; //Stänger av svarsfältet!
                            
                            
                            for (i = 1; i < theQuiz.questionArray.length + 1; i +=1) // denna kommer köras beroende på hur många frågor det är när det ska skrivas ut!
                            {
                                var questionTag = document.createElement("p");
                                questionTag.innerHTML = "Question " + i + " took you : " + theQuiz.questionArray[i-1] + " Tries";
                                status.appendChild(questionTag);
                            }
                        }
                    }
                
                else
                {
                    theQuiz.tries +=1;
                    document.getElementById("Answer").value = "";
                    questionRepeat.innerHTML="Wrong answer! please try again!";
                }
            }
      
        };
    
        var Json = {answer: answer};
        var sendanAnswer = JSON.stringify(Json);
        xhr2.open("POST", URL, true);
        xhr2.setRequestHeader("Content-type","application/json");
        xhr2.send(sendanAnswer);
  }// the answer funktionen slutar här!!

};

window.onload = theQuiz.init;