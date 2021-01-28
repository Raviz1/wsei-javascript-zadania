// Zadanie 1

class Person 
{
    imie;
    nazwisko;
    wiek;
    kraj;
    miasto;
    jezyk;
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) 
    {
        Object.assign(this, {imie, nazwisko, wiek, kraj, miasto, jezyk});
    }

    changeAge(age) 
    {
        this.wiek = age; 
    }

    changeCity(city) 
    {
        this.miasto = city;
    }
}

var person1 = new Person("Adrian", "Ścibisz", 22, "Polska", "Legionowo", "Polski");
var person2 = new Person("Filip", "Kubek", 18, "Włochy", "Rzym", "Włoski");
var person3 = new Person("Kamila", "Opytko", 30, "Polska", "Skarzysko-Kamienna", "Polski");
var person4 = new Person("Stanislaw", "Maj", 21, "Portugalia", "Lizbona", "Portugalski");
var person5 = new Person("Ken", "Kaneki", 20, "Japonia", "Tokyo", "Japoński");

person1.changeAge(23);
person2.changeAge(19);
person3.changeAge(31);
person4.changeAge(22);
person5.changeAge(21);

person1.changeCity("Kraków");
person2.changeCity("Neapol");
person3.changeCity("Lublin");
person4.changeCity("Porto");
person5.changeCity("Kioto");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

// Zadanie 2

function calculator()
{
    this.memory = [],
    this.add = function(a, b) 
    {             
        this.memory.push('Dodawanie');
        console.log(a + b);
    };
    this.substraction = function(c,d) 
    {              
        this.memory.push('Odejmowanie');
        console.log(c - d);
    };
    this.multiplication = function(e,f) 
    {              
        this.memory.push('Mnozenie');
        console.log(e * f);
    };
        this.division = function(g,h) 
    {          
        this.memory.push('Dzielenie');
        console.log(g / h);
    };
        this.clearMemory = function() 
    {     
        this.memory = [];
    };
    this.showMemory = function() 
    {          
        console.log(this.memory);
    }
}

const calculator1 = new calculator();                       
calculator1.add(12,15)
calculator1.substraction(11,9)
calculator1.multiplication(9,3)
calculator1.division(15,3)
calculator1.showMemory()
