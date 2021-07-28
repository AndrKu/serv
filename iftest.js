

//Смена фото функция onclick
let myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/111.png') {
      myImage.setAttribute ('src','img/222.png');
    } else {
      myImage.setAttribute ('src','img/111.png');
    }
}
   //Приветствие функция onclick
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
   var myName = prompt('Please enter your name.');
   localStorage.setItem('name', myName);
   myHeading.textContent = 'Mozilla is cool, ' + myName;
 }

 if(!localStorage.getItem('name')) {
   setUserName();
 } else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = 'Mozilla is cool, ' + storedName;
 }

 myButton.onclick = function() {
   setUserName();
 }
 


/* 

if (num < 49) {
   console.log('neverno');
} else if (num > 100) {
   console.log('mnogo');
} else {
   console.log('verno');
}

(num == 50) ? console.log('verno2') : console.log('noooo');

switch (num) {
   case num < 49:
}

var num = 50;

// while (num < 55) {
//    console.log(num);
//    num++;

// }

do {
   console.log(num);
   num++;

}

while (num < 55);

for (let i = 1; i < 18; i++) {
   if (i == 10) {
      continue
   }



}


let persone = {

   name: 'Fifa',
   age: 44,
   tyty: false


}

console.log(persone['name']);

let arr = ['plam.png', 33, 'nyny.bmp'];

console.log(arr[2]); */

//ale('hello');


    
