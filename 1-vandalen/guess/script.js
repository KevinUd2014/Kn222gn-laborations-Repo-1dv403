"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * 100)+1; // Här har vi den sats som kommer slumpa fram det hemliga talet!
	
	
	var count = 0;// den här var varieblen kommer att fungera som start för räkning! alltså man börjar på 0 gissningar och den ++ på hela tiden!!
	var maxNumber = 100;
	var minNumber = 0;
	
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		
			
		if (number == secret)//ska här kolla ifall nu personen har gissat det hemliga talet och kommer isåfall skriva ut nedrestående rad! med vad numret var, hur många försök personen hade på sig!"
		{
			count += 1;
			return [true, "Congratulations the secret number was " + secret + " And you tried " + count + " times to find it."];
					// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		}
		
		if(number < minNumber || number>maxNumber)
		{
			count += 1;
			return [false, "Sorry your number is not in the range of 0-100!"];
					// [false, "Talet är utanför intervallet 0 - 100"]
		}
		
		if(number > secret)// ska här kolla ifall det hemliga är mindre än det personen skrev in!   (&& number<maxNumber + 1)
		{											//ändring! någon sade att man skulle ha [] paranteser men () funkar lika bra!! så ändrade!
			count += 1;
			return [false, "Sorry the secret number is smaller!"];//returnerar false för talet är inte RÄTT!!
					// [false, "Det hemliga talet är lägre!"]
		}
		if(number < secret) //ska här kolla ifall hemliga är mindre än det inmatade talet kommer då visa personen att det hemliga är större än hans inmatade tal!     (&& number>minNumber)
		{											//lade även til att talen måste vara inom de ramar som jag har satt upp, glömde det innan så sista else satsen var onödig! men inte längre!!
			count += 1;
			return [false, "Sorry the secret number is greater!"];//returnerar false för talet är inte RÄTT!!
					// [false, "Det hemliga talet är högre!"]
		}
		
			
		// Plats för förändring.
		
		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};