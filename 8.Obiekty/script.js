// Zadanie 1

const car = 
    {
    brand: "Chevrolet",
    model: "Camaro SS",
    engine: "petrol",
    enginePower: "432km",
    displacement: "6.2"
    }

console.log(car.brand);
console.log(car.model);
console.log(car.engine);
console.log(car.enginePower);
console.log(car.displacement);

// Zadanie 2

car.enginePowerChanger("520km");
console.log("Change engine power from 432km to 520km: ", car);

// Zadanie 3 

const numbers = 
{
    sum: 0,
    sumNumbers: function (table) 
    {    
        this.sum = table.reduce((account, number) => (account + number));
    }
}

numbers.sumNumbers([11, 22, 33, 44, 55])
console.log(numbers.sum);

// Zadanie 4

const car = 
{
    brand: "Chevrolet",
    model: "Camaro SS",
    engine: "petrol",
    enginePower: "432km",
    displacement: "6.2",
    owner: 
    {
      name: "Adrian",
      surname: "Ścibisz",
    }
}

for (const key in car) 
	
   {
	console.log(key + ': ' + car[key]);
   }

// Zadanie 5

console.log(car.owner.name);           
console.log(car.owner.surname);

// Zadanie 6

car.vintage = 2018;
car.sayingHello = () => console.log("Hello ");

car.sayingHello();
console.log(car.vintage);
