// Desafio 1
function compareTrue(string1, string2) {
  if(string1 === true && string2 === true){
    return true
  } else return false
}

// Desafio 2
function calcArea(base, altura) {
  const area  = base * altura / 2
  return area
}

// Desafio 3

function splitSentence(string) {
  const newArray = string.split(' ')
  return newArray
}

// Desafio 4
function concatName(array) {
  const ultimo = array.length -1
  const frase = `${array[ultimo]}, ${array[0]}`
  return frase
}

// Desafio 5
function footballPoints(win,ties) {
  const w = win * 3;
  const t = ties * 1;
  const totalPoints = w + t;
  return totalPoints
}

// Desafio 6
function highestCount(array) {
  let higher = array[0]
  let count = 0
  for(i=0; i<array.length; i+=1){
    if(array[i] > higher){
      higher = array[i]
    }
  }
  for(i=0; i<array.length; i+=1){
    if(array[i] === higher){
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, positionCat1, positionCat2) {
  if(Math.abs(positionCat1 - mouse) > Math.abs(positionCat2 - mouse)){
    return 'cat2'
  }
  if(Math.abs(positionCat2 - mouse) > Math.abs(positionCat1 - mouse)){
    return 'cat1'
  }
  else{
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8
function fizzBuzz(arr) {
  let newArr = []
  for(let i=0; i<arr.length; i+=1){
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
      newArr.push('fizzBuzz')
    }
    else if(arr[i] % 3 === 0){
      newArr.push('fizz')
    }
    else if(arr[i] % 5 === 0){
      newArr.push('buzz')
    }
    else newArr.push('bug!')
  }
  return newArr
}

// Desafio 9
function encode(string) {
  const stringArr = string.split('')
  for (let i = 0; i < stringArr.length; i++) {
    if(stringArr[i] === 'a'){
      stringArr[i] = 1
    }
    else if(stringArr[i] === 'e'){
      stringArr[i] = 2
    } else if(stringArr[i] === 'i'){
      stringArr[i] = 3
    }  else if(stringArr[i] === 'o'){
      stringArr[i] = 4
    }  else if(stringArr[i] === 'u'){
      stringArr[i] = 5
    }
  }
  return stringArr.join('')
}
// console.log(encode('hello'))
function decode(string) {
  const stringArr = string.split('')
  for (let i = 0; i < stringArr.length; i++) {
    if(stringArr[i] === '1'){
      stringArr[i] = 'a'
    }
    else if(stringArr[i] === '2'){
      stringArr[i] = 'e'
    } else if(stringArr[i] === '3'){
      stringArr[i] = 'i'
    }  else if(stringArr[i] === '4'){
      stringArr[i] = 'o'
    }  else if(stringArr[i] === '5'){
      stringArr[i] = 'u'
    }
  }
  return stringArr.join('')
}

// Desafio 10
function techList(array, string) {
  let result = []
  if(array.length === 0){
    return 'Vazio!'
  }
  for(i=0; i<array.length; i+=1){
    let obj = {
      tech: array[i],
      name: string
    }; result.push(obj)
  }
  return  result.sort((a, b) => a.tech.localeCompare(b.tech));
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
  techList,
};
