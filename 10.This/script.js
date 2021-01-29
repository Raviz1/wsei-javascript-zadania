// Zadanie 1

function Person (name,surname,age,country,city)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
}

Person.prototype.showAll = function() 
   {
    console.log(Object.values(this))
   }

Person.prototype.addOneAge = function() 
   {
    this.age++;
   }

let person1 = new Person("Adrian", "Scibisz", 21, "Poland", "Legionowo");
let person2 = new Person("Filip", "Knur", 20, "Poland", "Krakow")

person1.showAll();
person1.addOneAge();
person1.showAll();

// Zadanie 2

person1.favoriteDish = [];

person1.addNewDish = function(dishName) 
{
    this.favoriteDish.push(dishName);
}
person1.addNewDish("Placek po wegiersku");

// Zadanie 3

function Calculator(number1, number2) 
{                                     
    this.number1 = number1;
    this.number2 = number2;

    this.addition = function () 
    {                                    
        return (this.number1 + this.number2);
    }

    this.subtraction = function () 
    {                                    
        return (this.number1 - this.number2);
    }

    this.multiplication = function () 
    {                                    
        return (this.number1 * this.number2);
    }

    this.division = function () 
    {                                    
        if (!number2)
            throw new Error("Pamietaj cholero nie dziel przez zero!");
        return this.number1 / this.number2;
    }
}

const calculator1 = new Calculator(12, 6);
const calculator2 = new Calculator(9, 3);
const calculator3 = new Calculator(10, 0);

console.log(calculator1.addition());

console.log(calculator1.subtraction());

console.log(calculator2.multiplication());

console.log(calculator2.division());
console.log(calculator3.division());

// Zadanie  4

function Ladder ()
{
	this.steps = 0;

	this.up =  function()
	{
		this.steps++;
	}
	
	this.down = function()
	{
		if(this.steps > 0)
	{
			this.steps--;
	}else 
	
	{
		console.log('Jestes na zmieni');

	}

		this.showLevel = function(){
			console.log(this.steps);
	}
}

const ladder = new Ladder();

ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.dwon();
ladder.showLevel();
