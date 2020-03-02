var arrayNumber=[];

function adicionarNumero() {
    var numero = document.getElementById("newNumbers").value;
    arrayNumber.push(parseInt(numero));
    console.log(arrayNumber);
}
function calcular() {
    alert(Math.max.apply(Math,arrayNumber));
}