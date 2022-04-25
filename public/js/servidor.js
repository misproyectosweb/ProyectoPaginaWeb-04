/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Swal */

const formulario = document.querySelector('.frmContacto');

let nombre = document.getElementById('nombre');
let telcasa = document.getElementById('telcasa');
let telcelular = document.getElementById('telcelular');
let correo = document.getElementById('correo');
let direccion = document.getElementById('direccion');
let mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
   
//   console.log('botón enviar presionado');

    let datos = {
        nombre: nombre.value,
        telcasa: telcasa.value,
        telcelular: telcelular.value,
        correo: correo.value,
        direccion: direccion.value,
        mensaje: mensaje.value
    };
    
//    console.log(datos);

    // Los datos obtenidos serán procesados y enviados vía email a la dirección especificada. Por
    // lo tanto, se debe utilizar ajax para enviarlos
    let xhr = new XMLHttpRequest();
    
    // Se abre la solicitud
    xhr.open('POST', '/');
    
    // Configuramos el tipo de contenido y los datos del objeto serán enviados en formato json
    xhr.setRequestHeader('content-type', 'application/json');
    
//    xhr.responseType = 'text';
            
    // Esta función se activará cuando se reciba una respuesta. Se ejecutará una función que
    // registrará la respuesta recibida desde el servidor y si es exitosa, entonces se mostrará un
    // mensaje de aceptación y se limpiarán los campos del formulario
    xhr.onload = function(){                
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                console.log(xhr.readyState);
                console.log(xhr.status);
                console.log(xhr.responseText);                                
            }
            
            nombre.value = '';
            telcasa.value = '';
            telcelular.value = '';
            correo.value = '';
            direccion.value = '';
            mensaje.value = '';                                                              
        }        
        if(!xhr.responseText === 'OK') {
            Swal.fire({
                icon: 'error',
                imageUrl: 'imagenes/logoPizzeria.png',        
                imageAlt: 'Logo de la pizzería',
                title: 'Estado del mensaje de correo',
                text: 'Su mensaje no ha sido enviado'  
            });                        
        }
        else {
            Swal.fire({
                icon: 'success',
                imageUrl: 'imagenes/logoPizzeria.png',        
                imageAlt: 'Logo de la pizzería',
                title: 'Estado del mensaje de correo',
                text: 'Su mensaje se envió correctamente'                      
            });
        }  
    };
    
    // Enviamos el objeto datos 
    xhr.send(JSON.stringify(datos));
});
