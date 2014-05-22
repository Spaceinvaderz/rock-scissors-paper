(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./logic":2}],2:[function(require,module,exports){
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

},{}]},{},[1])