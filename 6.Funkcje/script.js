// Zadanie 1

function write()
{
  console.log("Udalo sie!");;
}
write();

// Zadanie 2

function random(x) 
{
    return x;
}

console.log( random(2137));

// Zadanie 3

function getArray(siema) 
{
    return siema;
}

getArray(["Czesc", "jestem", "Adrian", "a", "ty", "jak", "masz", "na", "imie?" ]);

// Zadanie 4

function showString(String) {
    var i = 0;
    var timeStamps = setInterval(() => {
        if(i < 5) {
            console.log(String);
            i++;
        }
        else{
            console.log("Koniec");
            clearInterval(timeStamps);
        } 
    }, 3000);
}


showString("Pojawiam sie raz na 3 sekundy a potem..");
