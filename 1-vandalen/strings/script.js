"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		

		
		
	if (str === "")
		{
			throw new Error("Please write a string of words!");
			// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		}
			
	var newArray = [];//deklarerar en ny array
	  newArray = str.split("");

	for (var i = 0; i < str.length; i++) // skapar en for lop som ska göra detta för varje bokstav!!
	{
		if (newArray[i] === newArray[i].toUpperCase()) // detta är elementet och sätter och visar stor bokstav!
		{
		newArray[i] = newArray[i].toLowerCase(); // elementet som finns på i blir nu liten boksav och placeras i min newArray på platsen [i]
		}
		else
		{
			newArray[i] = newArray[i].toUpperCase();// annars så körs denna igen!
		}
	}
			
			str = newArray.toString(); // 
			str = str.split(/,/).join("");
			str = str.split(/[aA]/).join("#");
			return str; 		// Returnera den konverterade strängen.

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};