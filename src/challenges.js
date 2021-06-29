// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y === true) return true;
  return false;
}

// Desafio 2
function calcArea(b, h) {
  // seu código aqui
  let area = (b * h) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let stringArreyzada = str.split(' ');
  return stringArreyzada;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let stringComVirgula = array[array.length - 1] + ', ' + array[0];
  return stringComVirgula;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maxNumber = Math.max(...array);
  let quantidade = 0;
  for (const number of array) {
    if (number === maxNumber) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
