function performOperation() {
    var inputText = document.getElementById('input').value;
    var encryptRadio = document.getElementById('encryptRadio');
    var outputText = '';
  
    if (encryptRadio.checked) {
      outputText = encrypt(inputText);
    } else {
      outputText = decrypt(inputText);
    }
  
    document.getElementById('output').value = outputText;
  }
  
  function encrypt(text) {
    var encryptedText = text.replace(/e/g, 'enter');
    encryptedText = encryptedText.replace(/i/g, 'imes');
    encryptedText = encryptedText.replace(/a/g, 'ai');
    encryptedText = encryptedText.replace(/o/g, 'ober');
    encryptedText = encryptedText.replace(/u/g, 'ufat');
    return encryptedText;
  }
  
  function decrypt(text) {
    var decryptedText = text.replace(/enter/g, 'e');
    decryptedText = decryptedText.replace(/imes/g, 'i');
    decryptedText = decryptedText.replace(/ai/g, 'a');
    decryptedText = decryptedText.replace(/ober/g, 'o');
    decryptedText = decryptedText.replace(/ufat/g, 'u');
    return decryptedText;
  }
  
  function resetOutput() {
    document.getElementById('output').value = '';
  }
  
  function copyText() {
    var outputText = document.getElementById('output');
    outputText.select
  }
