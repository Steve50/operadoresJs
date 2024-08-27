const form = document.getElementById('calc');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var x = parseInt(document.getElementById('val1').value);
    var y = parseInt(document.getElementById('val2').value);
    var resultSum = x + y;
    var resultRest = x - y;
    var resultMul = x * y;
    var resultDiv = x / y;
    var resultRes = x % y;
    var may = x > y;
    var equal = x == y;
    document.getElementById('result').innerHTML = "Resultado de la suma es "+ resultSum;
    document.getElementById('resultR').innerHTML = "Resultado de la resta es "+ resultRest;
    document.getElementById('resultM').innerHTML = "Resultado de la multiplicación es "+ resultMul;
    document.getElementById('resultD').innerHTML = "Resultado de la división es "+ resultDiv;
    document.getElementById('resi').innerHTML = "El resudual de la división es "+ resultRes;
    x++;
    document.getElementById('aum').innerHTML = "El aumento es "+ x;
    x--;
    document.getElementById('dec').innerHTML = "El decremento es "+ x;
    if (may==true) {
        document.getElementById('may').innerHTML = "El " + x + " es mayor que " + y;
        document.getElementById('men').innerHTML = "";
    } else if (equal==true) {
        document.getElementById('equal').innerHTML = "Son iguales";
        document.getElementById('may').innerHTML = "";
        document.getElementById('men').innerHTML = "";
    } else {
        document.getElementById('may').innerHTML = "";
        document.getElementById('equal').innerHTML = "";
        document.getElementById('men').innerHTML = "El " + x + " es menor que " + y;
    }
});