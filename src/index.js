const output = document.getElementById('output');
const startButton = document.getElementById('start');

function logOutput (message) {
  output.innerHTML = `${output.innerHTML}\n${message}`;
}

startButton.addEventListener('click', makeDrink, false);

const vessels = ['mug', 'paper cup', 'glass'];
const drinks = ['latte', 'cappuccino', 'espresso', 'americano', 'tea', 'chai'];

function makeDrink () {
  getCup(vessel => {
    chooseDrink(vessel, filledVessel => {
      grabDrink(filledVessel);
    });
  });
}

function getCup (callback) {
  let randomVessel = vessels[ Math.floor(Math.random() * vessels.length) ];
  logOutput(`Grabbing a ${randomVessel}.\n`);

  setTimeout(() => {
    callback(randomVessel);
  }, 1000);
}

function chooseDrink (vessel, callback) {
  let randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];
  logOutput(`Choosing ${randomDrink}.\n`);

  setTimeout(() => {
    callback(`${randomDrink} in a ${vessel}`);
  }, 1000);
}

function grabDrink (drink) {
  logOutput(`Enjoy your ${drink}.\n`);
}
