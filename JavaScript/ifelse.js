// operadores de comparação

/*
* == igual
* === identico (valor e tipo)
* != <> diferente
* !== não  identico (valor e tipo)
* < menor
* > maior
* <= menor que ou igual
* >= maior que ou igual 
*/

if(2 == '2') {
    document.write('Verdadeiro <br />');
} else {
    document.write('Falso <br />');
}

if(2 === '2') {
    document.write('Verdadeiro <br />');
} else {
    document.write('Falso <br />');
}

var nota = prompt('Digite a nota do aluno:');

if(nota >= 7) {
    alert('Aluno aprovado!');
} else {
    alert('Aluno reprovado!');
}