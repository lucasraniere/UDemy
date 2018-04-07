var lista_frutas = Array();
// lista_frutas = []; tbm serve
// lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva'); tbm serve por parametro
// lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva'];

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';

document.write("<br />array: " + lista_frutas);

// array multidimensionais

var lista_coisas = Array();

lista_coisas['frutas'] = Array('Banana');
lista_coisas['frutas'][1] = 'Maçã';
lista_coisas['frutas'][2] = 'Morango';
lista_coisas['frutas'][3] = 'Uva';

document.write("<br />array: " + lista_coisas['frutas']);

lista_coisas['pessoas'] = ['João', 'Maria', 'Jose'];

document.write("<br />array: " + lista_coisas['pessoas']);