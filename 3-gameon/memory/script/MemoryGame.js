"use strict"
        
    var startMemory = {  // skapar en variabel som ska symbolisera hela programmet!
    
    array:[],
    
    rows:4,
    columns:4,
    memoryArea: null,
    aTab:null,
    img: null,
    cell: null,
    lastClicked:null,
    
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
                aElement.href = "#";                                                // så att man kan taba igenom sidan!
                aElement.picture = startMemory.array[startMemory.count];            // aElement variablen är modifierad och enda gången detta kan skapa problem är om man jämnför! picture är en ny variabel i a Element
                //aElement.className = startMemory.array[startMemory.count];               //lägger in så att för varje ny count så läggs en ny bild in!
                
                var img = document.createElement("img");
                img.src = "Pics/0.png";
                img.id = "down";
                
                //img.className = startMemory.array[startMemory.count];
                //startMemory.aElement.onclick = startMemory.click(img, img.className); // hittade på en sida på google! // hade tänkt fel men tänkte med dessa innan!
                
                aElement.appendChild(img);                                          // lägger till alla förändringarna på dom olika ställena!!
                tdElement.appendChild(aElement);
                rows.appendChild(tdElement);
                
                aElement.onclick = startMemory.flipImage;                           //anropar flip Image funktionen!
                
                startMemory.count += 1;
            }
            table.appendChild(rows);
        }
        memoryArea.appendChild(table);
    },
    
    flipImage:function(){
        
        //var self = this;
        this.firstChild.src = "Pics/" + this.picture + ".png";                      // anropar firstchild i  a taggen !!
        
        startMemory.round += 1;
        
        if (startMemory.round === 2)
        {
            //var
            if(startMemory.lastClicked === this.firstChild.src)
            {
                alert("Gick");
            }
            startMemory.round = 0;
        }
        startMemory.lastChild = this.firstChild.src;
        
    }
};// end of startMemory
    
    //runGame:function(){ // skapar här min run game function som jag har tänkt ska starta hela procesen med spelet från början!
        
        
    
    
    window.onload = startMemory.init();