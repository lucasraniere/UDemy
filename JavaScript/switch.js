var val = prompt('Digite um valor de 1 a 3:');

switch(parseInt(val)) {
    case 1:
        alert('Digitou 1');
        break;
    case 2:
        alert('Digitou 2');
        break;
    case 3:
        alert('Digitou 3');
        break;
    default:
        alert('Opção inválida');
}

document.write('Fim do exemplo');