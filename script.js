function encriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    //i es para que afecte a tanto mayusculas como minus
    //g es para que afecte a toda la linea
    //m es para que afecte a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");//no podemos poner la variable texto en todas las lineas
    //ya que este siempre que ingresaramos una sewgunda palabra esta la remplasaria.
    // por eso una vez tomado el texto se trabaja sobre el  
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("logo-derecho").style.display = "none";
    document.getElementById("texto-area").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto-texarea").innerHTML = txtcifrado;
    document.getElementById("inputtext").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("logo-derecho").style.display = "none";
    document.getElementById("texto-area").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto-texarea").innerHTML = txtcifrado;
    document.getElementById("inputtext").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function copiar() {
    var contenido = document.querySelector("#texto-texarea");
    contenido.select();
    document.execCommand('copy');
    alert("Texto copiado con exito!");
  }