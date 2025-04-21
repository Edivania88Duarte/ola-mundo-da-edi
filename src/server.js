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



// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';

// console.log('Iniciando o servidor...'); // Log inicial
// dotenv.config();
// console.log('Variáveis de ambiente carregadas:', {
//   email: process.env.EMAIL,
//   senha: process.env.SENHA_DE_APP ? 'Definida' : 'Não definida',
// });

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middlewares
// console.log('Configurando middlewares...');
// app.use(cors());
// app.use(bodyParser.json());

// // Rota de envio de e-mail
// app.post('/send-email', async (req, res) => {
//   console.log('Requisição recebida:', req.body);
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
//     console.log('Enviando e-mail...');
//     await transporter.sendMail(mailOptions);
//     console.log('E-mail enviado com sucesso.');
//     res.status(200).send('Mensagem enviada com sucesso.');
//   } catch (error) {
//     console.error('Erro ao enviar e-mail:', error);
//     res.status(500).send('Erro ao enviar mensagem.');
//   }
// });

// // Inicia o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Liberar CORS para localhost e vercel
// app.use(cors({
//   origin: (origin, callback) => {
//     const allowedOrigins = ['http://localhost:3000', 'https://ola-mundo-da-edi.vercel.app'];
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['POST'],
//   allowedHeaders: ['Content-Type'],
// }));

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

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 🌍 Lista de origens permitidas
const allowedOrigins = [
  'http://localhost:3000',
  'https://ola-mundo-da-edi.vercel.app',
];

// 🔐 Função para controlar origens permitidas
function corsOrigin(origin, callback) {
  if (!origin) return callback(null, true); // Permitir chamadas sem origem (ex: Postman)
  
  const isAllowed = allowedOrigins.includes(origin) ||
    (typeof origin === 'string' && origin.endsWith('.vercel.app'));

  if (isAllowed) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
}


// 🛡️ Middleware CORS
app.use(cors({
  origin: corsOrigin,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// ✅ Trata requisições OPTIONS (preflight)
app.options('*', cors());

// 📩 Rota para envio de e-mail
app.post('/send-email', async (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
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
    await transporter.sendMail(mailOptions);
    res.status(200).send('Mensagem enviada com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Erro ao enviar mensagem.');
  }
});

// 🚀 Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
