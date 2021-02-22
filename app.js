/* eslint-disable new-cap */
'use strict';

let maximumClicks = 25;
let attempts = 0;
let namesArr=[];
let votesArray=[];
let shownArray=[];
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
  namesArr.push(this.name);
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
  arrOfObjects[imag1Index].timesShown++;
  imag2Element.setAttribute('src', arrOfObjects[imag2Index].src);
  arrOfObjects[imag2Index].timesShown++;
  imag3Element.setAttribute('src', arrOfObjects[imag3Index].src);
  arrOfObjects[imag3Index].timesShown++;
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


    } else if (event.target.id === 'imag2'){
      arrOfObjects[imag2Index].votes++;



    } else {
      arrOfObjects[imag3Index].votes++;


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
    chartRender();

    imag1Element.removeEventListener('click', handleClicking);
    imag2Element.removeEventListener('click', handleClicking);
    imag2Element.removeEventListener('click', handleClicking);


    for (let j = 0; j < arrOfObjects.length; j++) {
      votesArray.push(arrOfObjects[j].votes);
      shownArray.push(arrOfObjects[j].timesShown);
    }
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



function chartRender(){
  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart (ctx, {
    type: 'bar',
    data: {
      labels: namesArr,
      datasets: [{
        label: 'Buss-mall Votes',
        backgroundColor: '#001f3f',
        borderColor: 'rgb(255, 99, 132)',
        data: votesArray,
      },{
        label: 'Buss-mall Displayed',
        backgroundColor: '#f1d1d0',
        borderColor:'rgb(155,100,30)',
        data:shownArray,

      }]
    },


    options: {}
  });


}

