"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * (100-1)+1) + 1; // Här har vi den sats som kommer slumpa fram det hemliga talet!
	
	
	var count = 0;// den här var varieblen kommer att fungera som start för räkning! alltså man börjar på 0 gissningar och den ++ på hela tiden!!
	
	
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		
		count++;
		
		if (number===secret)//ska här kolla ifall nu personen har gissat det hemliga talet och kommer isåfall skriva ut nedrestående rad! med vad numret var, hur många försök personen hade på sig!"
		{
			return [true, "Congratulations the secret number was " + secret +" And you tried " + count +" times to find it."];
		}
		else if(number>secret)// ska här kolla ifall det hemliga är mindre än det personen skrev in!
		{
			return [false, "Sorry the secret number is smaller!"];//returnerar false för talet är inte RÄTT!!
		}
		else if(number<secret) //ska här kolla ifall hemliga är mindre än det inmatade talet kommer då visa personen att det hemliga är större än hans inmatade tal!
		{
			return [false, "Sorry the secret number is greater!"];//returnerar false för talet är inte RÄTT!!
		}
		else// kommer gå in här när perosnen inte har några gissningar kvar och personen får börja om om denne vill det!
		{
			return [false, "The number you entered is out of the allowed limits!"];//returnerar false för talet är inte RÄTT!!
		}
		
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.
		


		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
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