let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _Een reeks tekens._ vul je antwoord in op de lijn
let myInt = 34; //dit is een variabele van het datatype _Integer_ waarom? _Een geheel getal, in de context van computerprogrammering, omdat het een gegevenstype is dat wordt gebruikt om reële getallen weer te geven die geen fractionele waarden hebben._ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _Variabelen gedefinieerd met let kunnen niet opnieuw worden gebruikt_ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _op regel 19_ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de _Parameter_ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _onclick_ de waarde noemen we een _Atribute_ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _alert_ op het scherm met de tekst _Eric!_ deze tekst staan op regel _19_ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _Nee wat anders linked het niet meer het het html element_ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _het switched tussen 2 afbeeldingen als je er op klikt_ en waar wordt deze in je HTML aangeroepen? _25_ vul je antwoorden in op de lijn
}

function block(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _die moet je veranderen in de "" van onclick_ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _het zorgd er voor dat je alleen een ID kan gebruiken_ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _het laat een afbeelding zien die verborgen is_ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _op regel 34_ en wanneer wordt deze aangeroepen _als je op de button klikt_ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _van regel 2 met de waarde 3_ en waar komt de waarde van getal vandaan? _die komt van regel 34 in je html bestand_ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _queryselector link met element op regel 32 in html_  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _het zorgt er voor dat je alleen het antwoord kunt zien_ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _het telt het bij elkaar op_ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _op regel 46_ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _this_ en waar komt de waarde van kleur vandaan? _orange_ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _30px_ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _het verandert de kleur grote en element_ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven _er is een alert_ en wanneer gebeurt dat _als je de pagina opstart of refreshed_ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _als je de pagina opstart dan is er een alert met een text en die verandert._ vul je antwoord in op de lijn.