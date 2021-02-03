// Zadanie 1

var addDiv = document.createElement("div");
addDiv.innerHTML = "To jest nowy element";
document.body.appendChild(addDiv)

// Zadanie 2

const favFruits = ['kiwi', 'mandarynka', 'truskawka', 'grejfrut', 'pomelo', 'borowki amreykanskie']; 

const favFruitsList = document.createElement('ul');              

favFruits.forEach((fruit) => 
{
    const fruitElement = document.createElement('li');
    fruitElement.innerText = fruit;

    favFruitsList.append(fruitElement);
});

document.body.appendChild(favFruitsList);

// Zadanie 3

const przycisk = document.createElement('przycisk');

przycisk.textContent = 'Usun co drugi element';

przycisk.addEventListener('click', function()
{
	const listElements = document.querySelectorAll('li');
	for(let i=0; i < listElements.length; i++)
	{
		if (i%2 !== 0)
		{
			listElements[i].remove();
		}
	}
})
document.body.appendChild(przycisk);

// Zadanie 4

const removingButton = document.createElement("button");

removingButton.innerText = "Remove";

removingButton.addEventListener("click", () => 
{
    removingButton.remove();
})

document.body.appendChild(removingButton);

// Zadanie 5

let randomNum = Math.floor(Math.random() * 10);

for(let num=1; num<= randomNum; num++)
{
	const newDiv = document.createElement('div');

	newDiv.textContent = `To jest div numer ${number}`;

	document.body.appendChild(newDiv);
}

// Zadanie 6

let div1 = document.createElement("div");
div1.innerHTML = "to jest div";

let span1 = document.createElement("span");
span1.innerHTML = "to jest span";

let div2 = document.createElement("div");
let div3 = document.createElement("div");
div3.innerHTML = "to jest div";

let span2 = document.createElement("span");
span2.innerHTML = "to jest span";

div2.appendChild(div3);

document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

// Zadanie 7

let table = ["Ford", "Audi", "BMW", "Ferrari", "Toyota", "Honda"];
let ul1 = document.createElement("ul");

let button1 = document.createElement("button");

button1.textContent = "Swap";

let ul2 = document.createElement("ul");

let button2 = document.createElement("button");

button2.textContent = "Swap";

for(let item in table)
{
    let newLi = document.createElement("li");
    newLi.innerText = item;
    ul1.appendChild(newLi);
}

document.body.appendChild(ul1);
document.body.appendChild(button1);

document.body.appendChild(ul2);
document.body.appendChild(button2);


buttonFirst.addEventListener("click", () => 
{
    let lastInFirst = ul1.lastChild;
    let lastInSecond = ul2.lastChild;
    ul2.insertBefore(lastInFirst, lastInSecond);

    (ul1.children.length == 0) ? button1.disabled = true : button1.disabled = false;
})


button2.addEventListener("click", () => 
{
    let lastInFirst = ul1.lastChild;
    let lastInSecond = ul2.lastChild;
    ul1.insertBefore(lastInSecond, lastInFirst);

    (ul2.children.length == 0) ? button2.disabled = true : button1.disabled = false;
})

// Zadanie 11

 function ex11(text) 
{
    const reg = /\d/g;
    const match = text.match(reg);
    let sum = 0;
    let ratio = 1;
    match.forEach(num => 
    {
      sum += parseInt(num);
      ratio *= parseInt(num);
    })
    console.log(`Suma liczb : ${sum}`);
    for (let i = 0; i < ratio; i++) 
    {
      const newDiv = document.createElement('div');
      newDiv.textContent = text;
      document.body.appendChild(newDiv);
    }
  }

  ex11('1 miejsce na Mistrzostwach Świata w Piłce Nożnej');

// Zadanie 12

function create(string) 
{
    return 
    {
        text: string
    }
}

let adrian = create("adrian nie ma samochodu");
adrian.checkIfContainsAla = function() 
{
      if(this.text.includes("Ala"))
    {
        this.text = this.text.replaceAll("Ala", "Ola");
        console.log(this.text);
    } else 
    {
        let newDiv = document.createElement("div");
        newDiv.textContent = "Słowo Ala nie występuje w tekście."
        document.body.appendChild(newDiv);
    }
}

adrian.checkIfContainsAla();

// Zadanie 14

let personalData = {
    name: '',
    surname: '',
    age: ''
}

function changeObject(name, surname, age)
{
    personalData.name = name;
    personalData.surname = surname;
    personalData.age = age;

    if(name.length > 5 || surname.length > 5 || age.length > 5)
    {
        let newButton = document.createElement("button");
        newButton.textContent = "Przywroc domyslne";
        newButton.addEventListener("click", () => 
	{
            personalData.name = "";
            personalData.surname = "";
            personalData.age = "";
        })
        document.body.appendChild(newButton);
    }
}

changeObject("Adrian", "Scibisz", "21");
