// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.json());

// // Configurar transporte do e-mail dentro da função para garantir tokens atualizados
// const createTransporter = () => {
//     return nodemailer.createTransport({
//         service: 'Outlook365',
//         auth: {
//             type: 'OAuth2',
//             user: process.env.EMAIL_USER,
//             clientId: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//             refreshToken: process.env.REFRESH_TOKEN,
//         },
//     });
// };

// app.post('/send-email', (req, res) => {
//     console.log('Requisição recebida:', req.body);
//     const { nome, email, telefone, mensagem } = req.body;

//     // Criar o transporter sempre que for enviar um e-mail
//     let transporter = createTransporter();

//     // Configurar o e-mail
//     const mailOptions = {
//         from: process.env.EMAIL_USER,  // Usar e-mail autenticado
//         replyTo: email,  // E-mail do remetente original (quem preencheu o formulário)
//         to: 'edivania88duarte@outlook.com',
//         subject: `Mensagem de ${nome}`,
//         text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
//     };

//     // Enviar o e-mail
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Erro ao enviar e-mail:', error);
//             return res.status(500).json({ message: 'Erro ao enviar e-mail', error });
//         } else {
//             return res.status(200).json({ message: 'E-mail enviado com sucesso', info });
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
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
