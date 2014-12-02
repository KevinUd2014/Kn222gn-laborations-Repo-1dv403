"use strict"
        
    var startMemory = {  // skapar en variabel som ska symbolisera hela programmet!
    
    array:[],
    
    img:0,
    aElement:0,
    
    rows:4,
    columns:4,
    lastClicked:null,
    //clickCount:0,
    defaultPicture:"Pics/0.png",
    
    testCount:0,
    turns:0,
    newClick:0,
    count: 0,
    round: 0,
        
    init:function(){                                                                //skapar en init funktion där jag startar run game funktionen !
        //var array = startMemory.array;
        startMemory.array = RandomGenerator.getPictureArray(startMemory.rows, startMemory.columns);                   // med denna så genereras alla bilderna i random ordning och detta ska jag använda när bilderna ska vara i olika ordning!
        //startMemory.startGame(startMemory.array); // skapar massor med tables!!
        console.log(startMemory.array);
        startMemory.startGame();
        
    },
    
    startGame:function(array){
        
        var memoryArea = document.getElementById("memoryGame");                     //lägger in memoryGame diven i denna variablen!
        
        var table = document.createElement("table");                                // skapar en tabell som ska strukturera upp allt!
        //table.border = 2;
       
        
        for (var R = 0; R < startMemory.rows; R += 1)                               // ska skriva ut tabellen!
        {
            var rows = document.createElement("tr"); // skapar alla raderna
            table.appendChild(rows);
            console.log(startMemory.array[R]);
            //alert(startMemory.array[R]);
            for (var C = 0; C < startMemory.columns; C += 1)// skapar alla kolumnerna!
            {
                var tdElement = document.createElement("td");                       //skapar ett td element i listan
                
                var aElement = document.createElement("a");                         // skapar ett a element
                //aElement.pic ="Pics/"+ startMemory.array[startMemory.count] +".png";
                aElement.href = "#";                                                // så att man kan taba igenom sidan!
                
                
                //img.picture = startMemory.array[startMemory.count];
                            
                //aElement.className = startMemory.array[startMemory.count];               //lägger in så att för varje ny count så läggs en ny bild in!
                
                var img = document.createElement("img");
                img.src = startMemory.defaultPicture;
                img.flipImage = false; // om bilden inte är vänd så är det bild 0
                img.id = "down";
                img.newPicture = "Pics/" + startMemory.array[startMemory.count] + ".png";// aElement variablen är modifierad och enda gången detta kan skapa problem är om man jämnför! picture är en ny variabel i a Element
                startMemory.count+=1;
                
                
                //img.className = startMemory.array[startMemory.count];
                //startMemory.aElement.onclick = startMemory.click(img, img.className); // hittade på en sida på google! // hade tänkt fel men tänkte med dessa innan!
                
                
                aElement.addEventListener("click", startMemory.flipImage);
                
                aElement.appendChild(img);                          // lägger till alla förändringarna på dom olika ställena!!
                tdElement.appendChild(aElement);
                rows.appendChild(tdElement);
                //aElement.onclick = startMemory.flipImage;                           //anropar flip Image funktionen!
                
                //startMemory.count += 1;
            }
            table.appendChild(rows);
        }
        memoryArea.appendChild(table);
    },
    
    flipImage:function(e){
        
            var picture; 
            if(this == e.target) // här så ska vi fixa så att tab + enter vänder alla brickor!
            {
                picture = e.target.childNodes[0];
            }
            else
            {
                picture = e.target;
            }
            
            //this = picture;
            
            startMemory.newClick += 1;
        
            picture.src = picture.newPicture;
            picture.flipImage = true;
            
            e.currentTarget.removeEventListener("click", startMemory.flipImage); // om en bild är vänd så tar jag bort klickfunktionen!
            e.currentTarget.onclick = null;
                
            if (startMemory.newClick === 2)
            {
                var nowFliped = picture;                                       //this är = bilden om jag inte minns fel!
                var last = startMemory.lastClicked;
                startMemory.testCount += 1;                                 //räknar hur många gånger man vänder på 2 st bilder!!
                
                e.currentTarget.addEventListener("click", startMemory.flipImage); // lägger till klickfunktionen! tar jag bort denna så kan jag bara klicka på bilden 1 gång
                e.currentTarget.onclick = true;
                last.parentNode.addEventListener("click", startMemory.flipImage);
                last.parentNode.onclick = true;
                
                if (nowFliped.newPicture === last.newPicture)               // den här funktionen bestämmer om två bilder är av samma karaktär och gör så att dessa stannar uppvända!
                {
                    var lastclicked = last;
                    nowFliped.parentNode.removeEventListener("click", startMemory.flipImage); // tar bort klickfunktionen när två av samma är vända!
                    lastclicked.parentNode.removeEventListener("click", startMemory.flipImage);
                    nowFliped.onclick = null;
                    lastclicked.onclick = null;
                    startMemory.turns += 1;                                 // räknar paren som i nästa funktion kommer stanna programmet när alla bildpar är vända korrekt!
                    
                    if (startMemory.turns === startMemory.array.length / 2) //körs när alla par är uppvända korrekt!
                    {
                        var resultboard = document.getElementById("ResaultBoard"); // lägger in en ny div tagg 
                        resultboard.innerHTML = ("Congratulation you made it in " + startMemory.testCount + " turns, you're a BOZZ!");// med detta som argument.
                    }
                }
                
                else
                {
                    setTimeout(function() // är dessa inte rätt så ska dessa vändas tillbaka och det fixar denna funktionen!
                    {
                       last.src = startMemory.defaultPicture;
                       nowFliped.src = startMemory.defaultPicture;
                    },800);
                }
                    startMemory.newClick = 0;
            }
            startMemory.lastClicked = picture;
                    
    }
};// end of startMemory
        
        //var self = this;
        /*this.firstChild.src = "Pics/" + this.picture + ".png";                      // anropar firstchild i  a taggen !!
        
        startMemory.round += 1;
        
        if (startMemory.round === 2)
        {
            //var
            if(startMemory.lastClicked === this.firstChild.src)
            {
                
            }
            startMemory.round = 0;
        }
        startMemory.lastChild = this.firstChild.src;*/
        

    
    //runGame:function(){ // skapar här min run game function som jag har tänkt ska starta hela procesen med spelet från början!
        
        
    
    
    window.onload = startMemory.init();