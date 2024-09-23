require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

/**
 * Configuração do transporte de e-mail usando Gmail
 * e uma senha de aplicativo gerada.
 */
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,       
        pass: process.env.SENHA_DE_APP 
    }
});


app.post('/send-email', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    // Configuração do e-mail a ser enviado
    const mailOptions = {
        from: process.env.EMAIL,  
        to: 'edivania.duarte.dev@gmail.com',  
        subject: 'Novo contato recebido',
        text: `
            Nome: ${nome}
            Email: ${email}
            Telefone: ${telefone}
            Mensagem: ${mensagem}
        `
    };

    // Enviando o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar e-mail:', error);
            res.status(500).send('Erro ao enviar mensagem.');
        } else {
            console.log('E-mail enviado:', info.response);
            res.status(200).send('Mensagem enviada com sucesso.');           
        }
    });
});


app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
