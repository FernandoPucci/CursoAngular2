var minhaVar = 'minha variável';
function minhaFunc(x, y) {
    return x + y;
}
//ECMASCRIPT 2015 - ECMA6
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ECMA SCRIPT 2015
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    Matematica.prototype.subracao = function (x, y) {
        return x - y;
    };
    Matematica.prototype.multiplicacao = function (x, y) {
        return x * y;
    };
    Matematica.prototype.divisao = function (x, y) {
        if (y !== 0) {
            return x / y;
        }
        else {
            return null;
        }
    };
    return Matematica;
}());
