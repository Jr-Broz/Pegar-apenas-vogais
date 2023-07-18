function countVowels(){

let entradaUsuario = prompt('escreva');

let resultado = entradaUsuario.match(/[aeiou]/gi).join("")

   console.log(resultado);
 }

countVowels();
