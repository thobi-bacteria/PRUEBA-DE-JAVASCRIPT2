function restaurar() {       //Reinicar valores de la pagina
    document.getElementById('formulario').reset(); 
}

function enviar() {   
    alert('Formulario enviado!')    //enviar formulario
    const formulario= document.getElementById('formulario');
formulario.onsubmit();

}