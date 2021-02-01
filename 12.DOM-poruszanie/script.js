// Zadanie 1

console.log(document.getElementById("buz").parentElement);

console.log(document.getElementById("baz").nextSibling);

console.log(document.getElementById("foo").children);

console.log(document.getElementById("foo").parentElement);

console.log(document.getElementById("foo").children[0]);

console.log(document.getElementById("foo").children[Math.floor(document.getElementById("foo").children.length / 2)]);

// Zadanie 2

function addListener(element)
{							
	element.addNewListener("click", () => 
        {
		console.log(element.parentNode.innerText);		
	})
}
addListener(document.querySelector("#ex2"));

// Zadanie 3

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => 
{				
	element.addNewListener('click', (event) => 
        {    
          event.target.nextSibling.style.display = event.target.nextSibling.style.display == 'none' ? 'block' : 'none';	
        });
});

// Zadanie 4

const ex3Events = document.querySelectorAll('#ex3 button');

ex3Events.forEach((div) => 
{
    div.addNewListener('click', (event) => 
    {
        const parentElement = event.target.parentElement;

        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        parentElement.style.backgroundColor = randomColor;
    })
})
