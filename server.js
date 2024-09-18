const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3001; 

app.use(cors());
app.use(bodyParser.json());

// Transporte do e-mail
const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // Servidor SMTP para o Outlook
    port: 587,
    secure: false, // True para 465, falso para outras portas
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  
    }
});

app.post('/send-email', (req, res) => {
    console.log('Requisição recebida:', req.body);
    const { nome, email, telefone, mensagem } = req.body;

    // Configurar o e-mail
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Usar e-mail autenticado
        replyTo: email,  // E-mail do remetente original (quem preencheu o formulário)
        to: 'edivania88duarte@outlook.com',
        subject: `Mensagem de ${nome}`,
        text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro detalhado:', error);
            return res.status(500).send('Erro ao enviar e-mail');
        } else {
            return res.status(200).send('E-mail enviado com sucesso');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
