let boton = document.getElementById("boton"),
    copy = document.getElementById('copy');
let contenido;

const encriptar = () => {
    let caja1 = document.getElementById("caja1"),
        texto = "";

        if(boton.innerText == 'Desencriptar'){
            boton.innerHTML = 'Encriptar';
            caja1.value = contenido;
        }
        else if(boton.innerText == 'Encriptar' && caja1.value.length > 0){
            contenido = caja1.value;
            boton.innerHTML = 'Desencriptar';
            for (let i = 0; i < caja1.value.length; i++) {

                if (caja1.value[i] == "a") {
                  texto = texto + "ai";
                } 
                else if (caja1.value[i] == "e") {
                  texto = texto + "enter";
                } 
                else if (caja1.value[i] == "i") {
                  texto = texto + "imes";
                } 
                else if (caja1.value[i] == "o") {
                  texto = texto + "ober";
                } 
                else if (caja1.value[i] == "u") {
                  texto = texto + "ufat";
                } 
                else if (caja1.value[i] == " ") {
                  texto = texto + " ";
                } 
                else {
                  texto = texto + contenido[i];
                }
          
                
              
            }caja1.value = texto;
        }


};


const copiar = () => {
    let caja1 = document.getElementById("caja1");

    navigator.clipboard.writeText(caja1.value);
    copy.classList.add('active');
    setTimeout(() => {
        copy.classList.remove('active');
    }, 1000);
}




boton.addEventListener("click", encriptar);
copy.addEventListener("click", copiar);
