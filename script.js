// let maxSpeed =15

// console.log(maxSpeed)
// alert(number)
// number =10
// alert (number)

// const name =`rasheed`

let age = 19; //data type = number

let myName1 = "Rasheed"; //data type = string

let bool = false; // data type = boolean

let number; // data type= undefined
// console.log(number)

// console.log(a)

//hard data types

//object
let person = {
  name: `Rasheed`, //string
  age: 19, //number
  isMarried: false, //boolesan
};
// console.log(person);
//array
let array = ["phone", "mouce", "soap"]
console.log(array[0])
//function























// function fits(x, y) {
//   if (Number.isInteger(y / x)) {
//     return 'Fits!';
//   }
//   return 'Does NOT fit!';
// }

// console.log(fits(5, 10));
// // Expected output: "Fits!"

// console.log(fits(5, 11));
// // Expected output: "Does NOT fit!"
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
levelUp += 5
powerLevel -= 100
multiplyMe *= 11
quarterMe /= 4

// Use the mathematical assignments in the space below:






// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);



let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++
console.log(gainedDollar)
lostDollar--
console.log(lostDollar)

let favouriteAnimal = "cat"
console.log('My favourite animal:' + favouriteAnimal )


const myName = "Abdurashid"
const myCity ='Tashkent'
console.log(`My name is ${myName}  My favourite city is ${myCity}.` )

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable)
newVariable = 1
console.log(typeof newVariable)

//kelvin is set
var kelvin = 0
//celsius is set 
let celsius = kelvin -273
//Fahrenheit is set
let Fahrenheit = celsius * (9/5) + 32
//to get a decimal place
Fahrenheit = Math.floor(Fahrenheit)
//newton scale
let newton = celsius * (33/100)
newton = Math.floor(newton)

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)

//trenary operators In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.
let isLocked = false;

 isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ?
  console.log('Correct!')
:
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';


favoritePhrase === 'Love That!' ? 
  console.log('I love that!')
:
  console.log("I don't love that!");

// if else if else 
  let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if ( season ==='winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
} else if (season ==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

//switch case 

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
  console.log('You get the gold medal!')
  break;
    case 'second place':
  console.log('You get the silver medal!')
  break;
    case 'third place':
  console.log('You get the bronze medal!')
  break;
  default:
  console.log('No medal awarded.')
  break;
}



//practice 
let userName = ''
userName ?  console.log('Hello, ${userName}') : console.log('Hello!')

const userQuestion = ''

console.log(userQuestion)

const randomNumber = Math.floor(Math.random()*8)
console.log(randomNumber)

const eightBall= randomNumber
if (randomNumber == '0'){
  console.log('It is certain')
} else if (randomNumber=='1'){
  console.log('It is decidedly so')
}
else if (randomNumber=='2'){
  console.log('Signs point to yes')
} else if (randomNumber=='3'){
  console.log('Reply hazy try again')
} 
else if (randomNumber=='4'){
  console.log('Cannot predict now')
} 
else if (randomNumber=='5'){
  console.log('do not count on it')
} 
else if (randomNumber=='6'){
  console.log('My sources say no')
} 
else if (randomNumber=='7'){
  console.log('Outlook not so good')
} else {
  console.log('Invalid season.');
}
