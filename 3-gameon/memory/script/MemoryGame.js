"use strict"






    var startMemory = {  // skapar en variabel som ska symbolisera hela programmet!
    array:[],
        
        init:function(){ //skapar en init funktion där jag startar run game funktionen !
            
            startMemory.array = RandomGenerator.getPictureArray(5,5);
            console.log(startMemory.array);
            
        }
    };
    
    //runGame:function(){ // skapar här min run game function som jag har tänkt ska starta hela procesen med spelet från början!
        

        
    
    
    window.onload = startMemory.init();