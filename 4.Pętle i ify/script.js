// Zadanie 1

let firstNumber = 10 ,
    secondNumber = 30;

if(firstNumber>secondNumber) {
  console.log(firstNumber)
  }
  else (console.log(secondNumber))
  
  // Zadanie 2
  
  let firstNumber = 8,
      secondNumber = 12,
      thirdNumber = 2;

if(firstNumber>secondNumber && firstNumber>thirdNumber) 
{
  console.log(firstNumber + ' jest najwieksze');
}
else if (secondNumber>firstNumber && secondNumber>thirdNumber) 
{
  console.log(secondNumber + ' jest najwieksze');
}
else 
{
  console.log(thirdNumber + ' jest najwieksze');
}

// Zadanie 3

for(let i = 1; i < 11; i++)
  {
    console.log("Lubię JavaScript");
  }
  
// Zadanie 4

let result = 0;
for(let i = 1; i < 11; i++)
  {
    result += i;
  }
console.log(result);

// Zadanie 5

var n = 5;

for(i=0; i<n; i++) 
{                                    
  if(i%2===0)
  {                                          
    console.log(i + " parzysta")
  }
  else
  {
    console.log(i + " nieparzysta")
  }
}

// Zadanie 6

for (let i = 0; i <= 10; i++)
{
	for (let j = 0; j <= 10; j++)
  {
  	console.log("i= " + i + ", j= " + j);
  }
}

// Zadanie 7

for (var i=1; i < 101; i++)
{
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// Zadanie 8
//(a)

let stars = 5,
    result = '';

for(let i=1; i<=stars; i++)
{
  for(let j=0; j<i; j++)
  {
    result += "*";
  }
  console.log(result);
  result=""
}

//(b)

let star = 4,
    spacebar = 4,
    result = '';

for(let i=0; i<=star; i++)
{
  result = ' '.repeat(spacebar) + "*";
  spacebar--
  for(let j=0; j<i; j++)
  { 
    result += " *";
  }
  console.log(result);
  result=""
}

//(c)

for (var i = 0; i < 5; i++) {
    var result = "";

    for (var j = 4; j > i; j--) result += " ";
    for (var j = 0; j <= i; j++) result += (j < i) ? "**" : "*";

    console.log(result);
}
