// Zadanie 1

let time = 0;

const timeStamps = setInterval(() => {
  time += 1;
  console.log(`Czesc po raz ${time}`);
  if(time>=15)
    {
      clearInterval(timeStamps);
    }
}, 3000);

// Zadanie 2

var sampleArray = ["Czesc", "jestem", "Adrian", "a", "ty", "jak", "masz", "na", "imie?" ];

setTimeout(function()  {
  console.log(sampleArray);
  
  let i = 0;

  var arrayInterval = setInterval(() => {
      if(i < sampleArray.length) {
          console.log(sampleArray[i]);
          i++;
      }
      else clearInterval(arrayInterval);
  }, 3000);
}, 2000);
