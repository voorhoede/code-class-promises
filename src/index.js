const output = document.getElementById('output');
const startButton = document.getElementById('start');

function logOutput(message) {
    output.innerHTML = `${output.innerHTML}\n${message}`; 
}

logOutput(`
     _____  _____  _____  _______  __________  ______________  
    /  __ |/  __ |/  _  |/       |/__/  __   |/      /  __   | 
   /  /_/ /  /_/ /  //  /  /  /  /  /__   l__/  ----/__   l__/ 
  /  ____/  __  |  //  /  /  /  /  /   l_   |  ----/   l_   |  
 /__/   /__/ /__/_____/__/__/__/__/|_______/______/|_______/  
`);

