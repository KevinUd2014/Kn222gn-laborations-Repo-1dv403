"use strict";

var makePerson = function(persArr){

        // Din kod här...
    var averageAge;
    var averageAgeSum;
    
    var minAge;
    var maxAge;
    var ageArray = [];
    
    var names = "";
    var nameArray = [];
    
    
    // 
    ageArray = persArr.map(function(ageArr) // arrayen kallar på mappen som lägger in age i arrayen!
    {
        return ageArr.age; // returnerar age!
    });
    
    //här tar vi in min åldern och max åldern!
    minAge = Math.min.apply(null, ageArray); // hittade lite hjälpmedel på - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    maxAge = Math.max.apply(null, ageArray);
    
    
    
    averageAgeSum = ageArray.reduce(function(a, b){return a + b});
    averageAge = Math.round(averageAgeSum / ageArray.length);// här avrundar programmet medelåldern på personerna
    
    
    nameArray = persArr.map(function(nameArr)// den gär funktionen tar hand om personerna! och letar upp namnen ur mappen!
    {
    
    return nameArr.name; // returnerar namn !!
    
    }).sort(function (a,b){return a.localeCompare(b, 'sv');}); // sorterar objekten i ordning // fick hjälp med dessa!! // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    names = nameArray.toString().split(",").join(", ");// spliten delar upp namnen och åldern i olika och join lägger till , (mellanslag)  //!!
    
    
    // här ska vi returnera resultatet!
    var result = 
    
    { names: names, minAge: minAge, maxAge: maxAge, averageAge: averageAge };
    
    return result; // returnerar resultatet!
    
    };
    
    var data =  // här är datan som ska läsas in! namn och ålder!
    
    [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    var result = makePerson(data);
    console.log(result);
    
    