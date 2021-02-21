/* eslint-disable new-cap */
'use strict';

let maximumClicks = 25;
let attempts = 0;

let imag1Index ;
let imag2Index;
let imag3Index;

let imag1Element = document.getElementById('imag1');
let imag2Element = document.getElementById('imag2');
let imag3Element = document.getElementById('imag3');

let arrOfObjects = [];
function busmall(name, src) {
  this.name = name;
  this.src = src; //this.path = 'image/'+src
  this.votes = 0;
  this.timesShown=0;
  // busmall.prototype.arrOfObjects.push(this);
  arrOfObjects.push(this);
}

new busmall('bag', 'images/bag.jpg');
new busmall('banana', 'images/banana.jpg');
new busmall('bathroom', 'images/bathroom.jpg');
new busmall('boots', 'images/boots.jpg');
new busmall('breakfast', 'images/breakfast.jpg');
new busmall('bubblegum', 'images/bubblegum.jpg');
new busmall('chair', 'images/chair.jpg');
new busmall('cthulhu', 'images/cthulhu.jpg');
new busmall('dog-duck', 'images/dog-duck.jpg');
new busmall('dragon', 'images/dragon.jpg');
new busmall('pen', 'images/pen.jpg');
new busmall('pet-sweep', 'images/pet-sweep.jpg');
new busmall('scissors', 'images/scissors.jpg');
new busmall('shark', 'images/shark.jpg');
new busmall('sweep', 'images/sweep.png');
new busmall('tauntaun', 'images/tauntaun.jpg');
new busmall('unicorn', 'images/unicorn.jpg');
new busmall('usb', 'images/usb.gif');
new busmall('water-can', 'images/water-can.jpg');
new busmall('wine-glass', 'images/wine-glass.jpg');





function renderThreeRandomImages() {
  imag1Index = generateRandomIndex();
  imag2Index = generateRandomIndex();
  imag3Index = generateRandomIndex();


  function generateRandomIndex() {

    let randomIndex = Math.floor(Math.random() * arrOfObjects.length);
    return randomIndex;
  }

  let same = true;
  while (same) {
    if (imag1Index===imag2Index) {imag2Index=generateRandomIndex();}
    else if(imag1Index===imag3Index) {imag3Index=generateRandomIndex();}
    else if(imag2Index===imag3Index) {imag3Index=generateRandomIndex();}
    else { same=false;}
  }


  imag1Element.setAttribute('src', arrOfObjects[imag1Index].src);
  imag2Element.setAttribute('src', arrOfObjects[imag2Index].src);
  imag3Element.setAttribute('src', arrOfObjects[imag3Index].src);

}

renderThreeRandomImages();


imag1Element.addEventListener('click', handleClicking);
imag2Element.addEventListener('click', handleClicking);
imag3Element.addEventListener('click', handleClicking);



function handleClicking(event) {

  attempts++;
  if (attempts <= maximumClicks) {
    if (event.target.id === 'imag1') {
      arrOfObjects[imag1Index].votes++;
      arrOfObjects[imag1Index].timesShown++;
      arrOfObjects[imag2Index].timesShown++;
      arrOfObjects[imag3Index].timesShown++;

    } else if (event.target.id === 'imag2'){
      arrOfObjects[imag2Index].votes++;
      arrOfObjects[imag1Index].timesShown++;
      arrOfObjects[imag2Index].timesShown++;
      arrOfObjects[imag3Index].timesShown++;

    } else {
      arrOfObjects[imag3Index].votes++;
      arrOfObjects[imag1Index].timesShown++;
      arrOfObjects[imag2Index].timesShown++;
      arrOfObjects[imag3Index].timesShown++;

    }
    renderThreeRandomImages();


  } else {
    let unorderdList = document.getElementById('unList');
    let li;
    for (let i = 0; i < arrOfObjects.length; i++) {
      li = document.createElement('li');
      unorderdList.appendChild(li);
      li.textContent = `${arrOfObjects[i].name} had a ${arrOfObjects[i].votes} votes , And was seen ${arrOfObjects[i].timesShown} times.`;
    }
    imag1Element.removeEventListener('click', handleClicking);
    imag2Element.removeEventListener('click', handleClicking);
    imag2Element.removeEventListener('click', handleClicking);
  }

}



//ButtonR.addEventListener = document.getElementById('showenRsult');
//let button = document.getElementById('button');
//button.addEventListener('click', Result);


// eslint-disable-next-line no-inner-declarations
//function Result(){
// let para = document.createElement('p');
// showenRsult .appendChild(para);
/// para.textContent = ' '
