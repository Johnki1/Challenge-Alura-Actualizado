var botonEncriptar = document.querySelector('.btn-encriptar');
var botonDesencriptar = document.querySelector('.btn-desencriptar');
var munieco = document.querySelector('.contenedor-munieco');
var contenedor = document.querySelector('.contenedor-parrafo');
var resultado = document.querySelector('.texto-resultado');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
   
    let cajaTexto = recuperarTexto();
    let textoEncriptado = encriptarTexto(cajaTexto);
    let text = document.querySelector('.caja-texto');
    if (textoEncriptado == ""){
        return text.value = "";
        
    }else{
        ocultarAdelante();
        resultado.textContent = encriptarTexto(cajaTexto);
        return text.value = "";
    }
    
}

function desencriptar(){
    let text = document.querySelector('.caja-texto');
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
    return text.value = "";
}

function recuperarTexto(){
    let cajaTexto = document.querySelector('.caja-texto');
    return cajaTexto.value;
}

function ocultarAdelante (){
    munieco.classList.add('ocultar');
    contenedor.classList.add('ocultar');
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = '';

    if (/[^a-z\s]/.test(texto)) {
        alert('solo se puede introducir letras minusculas y sin caracteres especiales')
    }else{
        for (let i = 0 ; i< texto.length; i++){
            if (texto[i] == 'a'){
                textoFinal = textoFinal + 'ai';
            }else if (texto [i] == 'e'){
                textoFinal = textoFinal + 'enter';
            }else if (texto [i] == 'i'){
                textoFinal = textoFinal + 'imes';
            }else if (texto [i] == 'o'){
                textoFinal = textoFinal + 'ober';
            }else if (texto [i] == 'u'){
                textoFinal = textoFinal + 'ufat';
            }else{
                textoFinal = textoFinal + texto[i];
            }
        }
    }
    return textoFinal;
}

function desencriptarTexto (mensaje){
    let texto = mensaje;
    let textoFinal = '';

    for (let i = 0 ; i< texto.length; i++){
        if (texto[i] == 'a'){
            textoFinal = textoFinal + 'a';
            i = i + 1;
        }else if (texto [i] == 'e'){
            textoFinal = textoFinal + 'e';
            i = i + 4;
        }else if (texto [i] == 'i'){
            textoFinal = textoFinal + 'i';
            i = i + 3;
        }else if (texto [i] == 'o'){
            textoFinal = textoFinal + 'o';
            i = i + 3;
        }else if (texto [i] == 'u'){
            textoFinal = textoFinal + 'u';
            i = i + 3;
        }else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector('.btn-copiar'); 
    btnCopiar.addEventListener('click', copiar = () => {
    let contenido = document.querySelector('.texto-resultado').textContent;
    navigator.clipboard.writeText(contenido);
    console.log('hola'); 
});