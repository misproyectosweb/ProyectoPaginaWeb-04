/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global process, __dirname */

// Hacemos la solicitud para requerir el módulo express y lo almacenamos en una constante para guardar
// toda la funcionalidad del módulo
const express = require('express');

// Para hacer uso de la funcionalidad del módulo creamos una constante que permita almacenar el objeto
// que retorna la función. A través de esa constante podemos crear el servidor
const app = express();

// Utilizamos la librería nodemailer para enviar los datos a la cuenta de correo asignada
const nodemailer = require('nodemailer');

// Para desplegar nuestra aplicación utilizamos el puerto 3000 o en su defecto, el puerto que el sistema
// nos esntregue
const puerto = process.env.PORT || 4000;

// Middleware
app.use(express.static('public'));

// Ajustamos este archivo para recibir la información
//app.use(express.urlencoded({extends:false}));
app.use(express.json());

// Accedemos al archivo
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

//
app.post('/', (request, response) => {
    
    // Creamos una cadena como salida para el cuerpo del email con todos los campos del formulario
    // utilizando formato de HTML
    const salida = `
        <div><img src="cid:logopizzeria@nodemailer.com" style="margin-top:30px"/></div>
        <h3>Coméntanos tu experiencia en nuestro restaurante</h3>
        <h4>Datos del cliente:</h4>
        <ul style="padding:0">
            <li>Nombre: ${request.body.nombre}</li>
            <li>Teléfono casa: ${request.body.telcasa}</li>
            <li>Teléfono celular: ${request.body.telcelular}</li>
            <li>Correo: ${request.body.correo}</li>
            <li>Direción: ${request.body.direccion}</li>            
        </ul>
        <h4>Mensaje:</h4>
        <p>${request.body.mensaje}</p>
    `;
       
    // Se crea un objeto transportador usando el transporte SMTP por defecto
    // En esta sección se colocan las credenciales para el servidor
    let transporte = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "pruebasproyectosweb000@gmail.com",   // cuenta de correo del usuario
        pass: "1L7j#y3c6w9F"                        // contraseña cuenta del usuario
      }
//      tls: {
//          rejectUnauthorized: false
//      }
    });

    // Enviamos el correo con el objeto transporte definido
    let infoCorreo = {
      from: '"Nuevo mensaje" <pruebasproyectosweb000@gmail.com>',   // dirección remitente
      to: "pruebasproyectosweb000@gmail.com",                       // lista de destinatarios
      subject: "Nuevo mensaje desde nuestra página web",            // asunto del correo      
      html: salida,                                                 // cuerpo del mensaje en formato HTML
      attachments: [{
            filename: 'logoPizzeria.png',
            path: './public/imagenes/logoPizzeria.png',
            cid: 'logopizzeria@nodemailer.com'                      // mismo valor cid que en el html img src
        }]
    };
        
    transporte.sendMail(infoCorreo, (err, info) => {
        if(err){
            console.log(err);
            response.send(err);
        }
        else {
            console.log('Email enviado: ' + info.response);
            response.send('El mensaje de correo fue enviado con éxito');
        }        
    });        
});

app.listen(puerto, () => {
    console.log(`El servidor se está ejecutando en el puerto: ${puerto}`);
});