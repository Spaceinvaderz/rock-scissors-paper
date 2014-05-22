var getComputerChoice = function getComputerChoice(){

  return parseInt(Math.random() * 3, 10);

};

module.exports.getComputerChoice = getComputerChoice; 

var getWinner = function getWinner(x, y) {

  if(x==y) return 0;

  if(x-y == -1 || x-y == 2) return 1;

  return 2;

};

module.exports.getWinner = getWinner; 
