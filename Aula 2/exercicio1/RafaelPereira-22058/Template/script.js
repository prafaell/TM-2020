function atualizaTexto(){
    var texto = document.getElementById( "inputTexto").value;
    if(!texto.length) alert("String vazia");
    else document.getElementById( "texto").innerText = texto;

}