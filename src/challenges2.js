// Desafio 11
function generatePhoneNumber(arr) {
  let count = {}
  if(arr.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  for(i=0; i<arr.length; i+=1){
    if(!count[arr[i]]){
      count[arr[i]] = 1
    }
    else count[arr[i]] += 1
    
    if (arr[i] > 9 || arr[i] < 0){
      return 'não é possível gerar um número de telefone com esses valores'
    }
    else if (count[arr[i]] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
}

const pare = `(${arr[0]}${arr[1]})`
const exclui = `${arr.slice(2,7).join('')}`
const exclui2 = `${arr.slice(7).join('')}`

return `${pare} ${exclui}-${exclui2}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || 
    lineC + lineB < lineA ||
    lineA + lineC < lineB
  ){return false}
  else if (lineA < Math.abs(lineC - lineB) ||
  lineB < Math.abs(lineC - lineA) ||
  lineC < Math.abs(lineA - lineB)
  ){return false}
  else {return true}
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g);
  let count = 0
  for(i=0; i<numbers.length; i+=1){
    const qtd = parseInt(numbers[i]);
    count += qtd
  }
  const cups = count === 1 ? 'copo' : 'copos'
    {return `${count} ${cups} de água`}

}
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
