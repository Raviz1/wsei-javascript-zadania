// Zadanie 1

const tab = ["Czesc", "jestem", "Adrian", "a", "ty", "jak", "masz", "na", "imie?" ];
    
console.log(tab[0]);                        
console.log(tab[1]);
console.log(tab[2]);
console.log(tab[3]);
console.log(tab[4]);
console.log(tab[5]);
console.log(tab[6]);
console.log(tab[7]);
console.log(tab[8]);

// Zadanie 3

const numberArray = [10, 2, 8, 12, 69, 99];

const sum = numberArray.reduce((account, number) => (account + number));    
console.log(sum)

const difference = numberArray.reduce((account, number) => (account - number));    
console.log(difference)

console.log(sum / numberArray.length);      

numberArray.forEach((value) => 
{        
    if (value % 2 === 0) 
    {
        console.log(value);
    }
})

numberArray.forEach((value) => 
{        
    if (value % 2 !== 0) 
    {
        console.log(value);
    }
})

console.log(Math.max(numberArray));     

console.log(Math.min(numberArray));     

for (const value of numberArray.reverse()) 
{            
    console.log(value);
}

// Zadanie 4

const sumArray = table => table.reduce((x,y)=>x+y);   

console.log(sumArray([12, 18, 25, 11, 21]));

// Zadanie 5

const calculatorArray = (table) => 
{
    const average = table.reduce((account, number) => (account + number)) / table.length;       

    table.map(value => console.log(value * average))      
};

calculatorArray([22, 11, 18, 6, 30]);

// Zadanie 6

const sumArray = (table) => 
{
    const simpleArray = [];

    table.forEach((value) => 
    {
        if (value % 2 === 0) 
        {                      
            simpleArray.push(value);                      
        }
    })

    return simpleArray.reduce((account, number) => (account + number)) / table.length;      
}

console.log(sumArray([2, 4, 6, 8, 10, 12, 14]));

// Zadanie 7

var randomArray = [30, 3, 1, 2, 5, 10, 6];

function sortingArray(arrayNumbers) 
   {
      return arrayNumbers.sort((a, b) => a - b);
   }

console.log("Liczby posortowane: " + sortingArray(randomArray));

// Zadanie 8

const ArrayA = [20, 54, 12, 22]
const ArrayB = [11, 33, 123, 28]

function sumArrays(arrayA, arrayB) 
{
    let newArray = [];

    arrayA.forEach((num1, i) => 
    {
        newArray.push(num1 + arrayB[i]);            
    });

    return newArray;
}

console.log(sumArrays(ArrayA, ArrayB));

// Zadanie 10

const EditionArray = [-129, 22, -12, 50, -3, 19, -2, 9];           

console.log("Przed: " + EditionArray);

function changeArray(table) 
    {
        return table.map(number => (number * (-1)));                
    }

const newArray = changeArray(EditionArray);

console.log("Po: " + newArray);
