import express from 'express'


const host='0.0.0.0';
const porta = 3000;

const server = express(); //Oferecendo ao dev um servidor http de modo express

//rechear com funcionalidades

function PaginaInicial(req, res){}

server.get('/',(requisicao, resposta) => {
    resposta.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Primeiro Prog p internet usando node + express</title>
        </head>
        <body>
            <h2> Bem-vindo a pagina inicial parca </h2>
            <p> <a href="http://localhost:3000/HoraAtual">Horario</a></p>
            <video controls> <source src="homen de ferro.mp4" type=video/mp4></video>
        </body>
        </html>

    `);


    
});

server.get (`/HoraAtual`, (requisicao, resposta)=> {

    const HoraAtual = new Date();
    const hora = HoraAtual.getHours()+ ":" + HoraAtual.getMinutes()+ ":"+ HoraAtual.getSeconds();
    resposta.send(`
         <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Horario do serrvidor</title>
        </head>
        <body>
            <h2> Horario atual: ${hora} </h2>
        </body>
        </html>
        `);
});
server.listen (porta, ()=>{
        console.log (`Servidor exutando em http://${host}:${porta}`)

});
