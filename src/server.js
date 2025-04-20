// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = 3001;

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // Rota de envio de e-mail
// app.post('/send-email', async (req, res) => {
//   const { nome, email, telefone, mensagem } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.SENHA_DE_APP,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: 'edivania.duarte.dev@gmail.com',
//     subject: 'Novo contato recebido',
//     text: `
//       Nome: ${nome}
//       Email: ${email}
//       Telefone: ${telefone}
//       Mensagem: ${mensagem}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Mensagem enviada com sucesso.');
//   } catch (error) {
//     console.error('Erro ao enviar e-mail:', error);
//     res.status(500).send('Erro ao enviar mensagem.');
//   }
// });

// // Inicia o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });



import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

console.log('Iniciando o servidor...'); // Log inicial
dotenv.config();
console.log('Variáveis de ambiente carregadas:', {
  email: process.env.EMAIL,
  senha: process.env.SENHA_DE_APP ? 'Definida' : 'Não definida',
});

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
console.log('Configurando middlewares...');
app.use(cors());
app.use(bodyParser.json());

// Rota de envio de e-mail
app.post('/send-email', async (req, res) => {
  console.log('Requisição recebida:', req.body);
  const { nome, email, telefone, mensagem } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.SENHA_DE_APP,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'edivania.duarte.dev@gmail.com',
    subject: 'Novo contato recebido',
    text: `
      Nome: ${nome}
      Email: ${email}
      Telefone: ${telefone}
      Mensagem: ${mensagem}
    `,
  };

  try {
    console.log('Enviando e-mail...');
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso.');
    res.status(200).send('Mensagem enviada com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Erro ao enviar mensagem.');
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});