"use strict";

window.onload = function(){

	
	var birthday = function(date){
		


			// Din kod här.
			
			
			var wholeDay = (1000*60*60*24); //24*60*60*1000 // Millisekunder*Sekunder*Minuter*Timmar, Detta gör man för att få hela dagen i millisekunder // kollade upp på Google!
		
			var personsBirthday = new Date(date); // Här så skapar jag ett objekt med information om användaren
			var userMonth = personsBirthday.getMonth(); // MM // ber personen i fråga mata in sin födelsedag
			var userDay = personsBirthday.getDate(); // DD
		
			var todayDate = new Date(); //Här skapar jag ett objekt med dagens datum!
			var Year = todayDate.getFullYear(); // med vilket år det är
			var Month = todayDate.getMonth();// månad det är // sätter dom olika datumen till dagens datumet get...
			var Day = todayDate.getDate();// dag det är
		
			var birthdayYear;
			var birthdayMonth; // skapar lite variablar som senare ska innehålla personens födelsedags datum!!
			var birthdayDay;
			
			if (date === "") // här kollar programmet så att man skriver i något i fälten annars så kastar det ett undantag med text-strängen!
				{
					throw new Error("Please enter a valid date!");//undantag!!
				}
		
			if(Month == userMonth && userDay < Day) // lägger till ett år så att dagarna blir kanske 365!! Kan visa vad jag menar ta dagens datum -1 så blir det 364 dagar kvar till din födelsedag!
			{ // Här kommer programmet lägga till ett år om nu födelsedagen redan varit! om det är den månaden!
				birthdayYear = Year + 1;
			} 
			
			else if (userMonth < Month) // lägger även på ett år om månaden redan varit!
			{
				birthdayYear = Year + 1;
			}
			
			else
			{
				birthdayYear = Year; // samma som det inmatade året!
			}
		
			birthdayMonth = userMonth; // här visar jag att födelsemånaden är samma som användarens inmatade månad!
			birthdayDay = userDay + 1; // samma med inmatade dagen
			
			var birthdayDates = new Date(birthdayYear, birthdayMonth, birthdayDay); 
			var makeDate = Math.floor(Math.abs(birthdayDates.getTime() - todayDate.getTime())/(wholeDay));// Fick detta från - http://www.vijayjoshi.org/2008/10/24/faq-calculate-number-of-days-between-two-dates-in-javascript/
		
			return makeDate;



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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};