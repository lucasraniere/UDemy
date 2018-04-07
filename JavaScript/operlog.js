/*
* && e
* || ou
* ! não
*/

var nota = prompt('Digite a nota do aluno:');
var nfalt = prompt('digite o numero de faltas:');

if((nota >= 7) && (nfalt < 30)) {
    alert('Aluno aprovado!');
} else if((nota < 7) && (nfalt < 30)) {
    alert('Reprovado por nota.');
} else if((nota >= 7) && (nfalt >= 30)) {
    alert('Reprovado por falta.');
} else {
    alert('Reprovado por nota e falta.');
}