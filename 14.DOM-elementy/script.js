// Zadanie 1

function getElems(elements)
{
	let tags = [];
	  for(let i = 0; i < elements.length; i++)
	{
	     tags.push(elements[i].tagName);
	}
	console.log(tags)
}

const elements = document.getElementsByClassName("more-divs");

getElems(elements);

// Zadanie 2

var ulShortList = document.getElementsByClassName("ul.short-list")[0];

function ex2(ulShortList) 
{
    console.log(ulShortList.innerHTML);
    console.log(ulShortList.outerHTML);
    console.log(ulShortList.className);
    console.log(ulShortList.classList);
    console.log(ulShortList.dataset);
}

ex2(ulShortList);

// Zadanie 3

function mathEx()
{
	let element = document.getElementByID('datasetCheck');
	console.log(element.dataset)
	let fistNum = Number(element.dataset.numberone);
	let secondNum = Number(element.dataset.numbertwo);
	let thirdNum = Number(element.dataset.numberthree);
	console.log(firstNum+secondNum+thirdNum);
	console.log(firstNum-secondNum-thirdNum);
}

mathEx();

// Zadanie 4

document.getElementById("spanText").textContent = "jakisTekst";

// Zadanie 5

document.getElementById("spanText").className = "dowolna_klasa";

// Zadanie 6

const div = document.getElementById("classes");
const classes = div.classList;

function showClasses(classesToShow)
{
	var str = "";

	classesToShow.forEach(className => 
	{
	   console.log(className);
	   str += '+${className}';
	});

	str = str.substring(1);

	console.log(str);
}

showClasses(classes);

div.classList = "";

// Zadanie 7

const longList = (els) => 
{
	for(let el of [...els]) if (!li.getAttribute('data-text')) li.setAtributte('data-text', 'text');
};

longList(document.querySelectorAll('#longList>li'));

// Zadanie 8

function makeObject(someString) 
{
    var string = { newClass: someString };
    setToDivId(string);

}

function setToDivId(objectWithSomeString) 
{
    document.getElementById("myDiv").classList.add(objectWithSomeString.newClass);
}

makeObject("obiekt");

// Zadanie 9

const div = document.getElementById('numbers');

const addClass = () => 
{
	let params = Math.floor(Math.random() * 10);

	if(params % 2 == 0) div.className = "even";
	    else div.className = "odd";
{;

addClass();

// Zadanie 10

function getElements(elems) 
{                                           
    const result = [];                                                  

    elems.forEach((elem) => 
    {
       result.push(elem.innerText);                                  
    });

    return result;
}

console.log(getElements(document.querySelectorAll('#longList > li')));
