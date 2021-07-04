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
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let stringArreyzada = str.split(' ');
  return stringArreyzada;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let virgula = ', ';
  let stringComVirgula = array[array.length - 1] + virgula + array[0];
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
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let deramMole = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return deramMole;
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  const result = [];
  for (const numb of arrayNumeros) {
    if (numb % 3 === 0 && numb % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numb % 3 === 0) {
      result.push('fizz');
    } else if (numb % 5 === 0) {
      result.push('buzz');
    } else result.push('bug!');
  }
  return result;
}

// Desafio 9
function encode(stg) {
  // seu código aqui
  // https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  let stg2 = stg.replace(/a/g, '1');
  let stg3 = stg2.replace(/e/g, '2');
  let stg4 = stg3.replace(/i/g, '3');
  let stg5 = stg4.replace(/o/g, '4');
  let stg6 = stg5.replace(/u/g, '5');
  return stg6;
}
function decode(stg7) {
  // seu código aqui
  let stg8 = stg7.replace(/1/g, 'a');
  let stg9 = stg8.replace(/2/g, 'e');
  let stg10 = stg9.replace(/3/g, 'i');
  let stg11 = stg10.replace(/4/g, 'o');
  let stg12 = stg11.replace(/5/g, 'u');
  return stg12;
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
