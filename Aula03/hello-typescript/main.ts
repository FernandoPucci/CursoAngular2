var minhaVar = 'minha variável';

function minhaFunc(x, y) {

    return x + y;
}

//ECMASCRIPT 2015 - ECMA6
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];

numeros.map(function (valor) {

    return valor * 2;


});

numeros.map(valor => { return valor * 2 }); //ECMA SCRIPT 2015

class Matematica {

    soma(x, y) {
        return x + y;
    }
    subracao(x, y) {
        return x - y;
    }
    multiplicacao(x, y) {
        return x * y;
    }
    divisao(x, y) {
        if (y !== 0) {
            return x / y;
        } else { return null; }
    }

}