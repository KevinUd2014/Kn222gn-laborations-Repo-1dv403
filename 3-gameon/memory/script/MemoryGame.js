"use strict"






    var startMemory = {  // skapar en variabel som ska symbolisera hela programmet!
    array:[],
        
        init:function(){ //skapar en init funktion där jag startar run game funktionen !
            
            startMemory.array = RandomGenerator.getPictureArray(5,5);
            startMemory.startGame(startMemory.array);
            console.log(startMemory.array);
        
    },
    
    startGame:function(array){
        
        var memoryArea = document.getElementById("memoryGame");
        
    }
    
}; // end of startMemory

    
    //runGame:function(){ // skapar här min run game function som jag har tänkt ska starta hela procesen med spelet från början!
        

        
    
    
    window.onload = startMemory.init();