//Option 1//Derectly Set on the HTML Element

//Option 2//Onclick Function
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

//Ottion 3/
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}

//Option another//
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = 'purple';
};
