var logic = require('./logic');

var CHOICES = ['rock', 'scissors', 'paper'];
var WINNERS = ['draw', 'you', 'computer'];

document.querySelector('#user-choice').addEventListener('click', function(e){
  var userChoice = parseInt(e.target.getAttribute('data-choice'), 10);
  var computerChoice = logic.getComputerChoice();
  var winner = logic.getWinner(userChoice, computerChoice);

  document.querySelector('#computer-choice').textContent = CHOICES[computerChoice];
  document.querySelector('#winner').textContent = WINNERS[winner];
});
