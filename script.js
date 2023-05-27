const textArea = document.querySelector("#input");
const mensaje = document.querySelector("#output");
const copia = document.querySelector("#copySuccess");

function validarTexto() {
  let textoEscrito = textArea.value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador.length === 0) {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Solo se permiten letras minúsculas y sin acentos",
    }).then(() => {
      location.reload();
    });
    return true;
  }
  
  /*if (!validador || validador.length === 0) {
    alert("Solo se permiten letras minúsculas y sin acentos");
    location.reload();
    return true;
  }*/
}

function btnEncriptar() {
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "none";// Ocultar el mensaje de copia
  }
}

// Llaves de encriptación
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  swal({
    icon: "success",
    title: "¡Texto copiado!",
  });
  /*
  mensaje.value = "";
  alert("Texto Copiado");*/
  copia.style.display = "block"; // Mostrar el mensaje de copia
}

function resetOutput() {
  mensaje.value = "";
  //document.getElementById("output").value = "";
}

function copyText() {
  var outputText = document.getElementById("output");
  outputText.select();
  document.execCommand("copy");
  swal({
    icon: "success",
    title: "¡Texto copiado!",
  });
  copia.style.display = "block"
  /*
  alert("Texto copiado");
  copia.style.display = "block";*/
  //var outputText = document.getElementById("output");
  //outputText.select();
}

