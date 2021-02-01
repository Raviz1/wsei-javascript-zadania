// Zadanie 1

//a)

document.querySelector("#test-event").addEventListener("click", firstevent => 
{
    console.log(firstevent);
});

//b)

document.addEventListener("mousemove", secondevent => 
{
    console.log(secondevent);
});

//c)

document.querySelector("#test-event").addEventListener("mouseover", thirdevent => 
{
    console.log(thirdevent);
});

//d)

document.addEventListener("keypress", fourthevent => 
{
    console.log(fourthevent);
});

//e)

document.addEventListener("scroll", fifthevent => 
{
    console.log(fifthevent);
});

//f)

document.querySelector("#input-test").addEventListener("input", sixthevent => 
{
    console.log(sixthevent);
});

// Zadanie 2

function span()
{
	const buttonEx2 = document.getElementByID ('ex2')
	buttonEx2.addEventListener('click', enterText => 
   {
	let dataText = enterText.target.dataset.text;
	let belowElement = enterText.target.nextElementSibling;
	belowElement.innerText = dataText
   })
}
span();

// Zadanie 3 

const square = document.getElementByID('zad3');

square.addEventListener('mouseover', function()
   {
	square.style.backgroundColor= "BLUE";
   {)
square.addEventListener('mouseout', function()
   {
	square.style.backgroundColor= "RED";
   })

// Zadanie 4

var error = document.getElementById("ex4-error");

document.getElementById("input-test").addEventListener("input", (e) => 
{
    if (checkInput(e)) error.innerHTML = "Nie można wypisywać cyfr!";
});

function checkInput(e) 
{
    return /^\d+$/.test(e.data);
}

// Zadanie 5

let counter = 0;

function counterFunction()
{
	if(counter >= 10)
    {
	document.getElementByID("ex5-button").removeEventListener("click", counterFunction);
    } else
	{
	    counter++;
	    this.nextElementSibling.innerHTML = counter;
	}
}
document.getElementByID("ex5-button").addEventListener("click", counterFunction);

// Zadanie 6

var ex6 = document.getElementsByTagName("ex6")[0];

document.addEventListener("scroll", (event) => 
{
    if (window.scrollY >= 200)
        body.style.backgroundColor = "red";
    else
        body.style.backgroundColor = "white";
});
