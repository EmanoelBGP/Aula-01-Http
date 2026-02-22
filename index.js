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
        console.log (`Servidor exutando em http://localhost:${porta}`);

});


//criar um metodo que aceita parametros

server.get(`/tabuada`, (requisicao, resposta)=>{
    //tabuada de qual numero e ate qual sequencia?
    const numero = parseInt(requisicao.query.numero);
    const sequencia = parseInt(requisicao.query.sequencia);
    if (!numero || !sequencia){
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
                <h1> Tabuada</h1>
                <h2>Informe o numero e a sequencia na URL</h2>
                <h3>Exemplo: http://localhost:3000/tabuada?numero=5&sequencia=10</h3>
            </body>
            </html>
        `);

    }
    else{
            //informar para o cliente que a resposta e htmlk
            resposta.setHeader(`Content-Type`, `text/html`);
        resposta.write (`            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width,initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>Horario do serrvidor</title>
            </head>
            <body>
                <h1> Tabuada do ${numero} ate a sequencia ${sequencia}</h1>
                <ul>

        `);
        for (let i=0; i<sequencia; i++){
            resposta.write (`<li> ${i} x ${numero} = ${i * numero}</li>`);
        }
            resposta.write(`
            
                </ul>
                </body>
                </html>
            `);



        resposta.end(); //finaliza e envia
    }
    
    

    console.log("requisicao tabuada");



});