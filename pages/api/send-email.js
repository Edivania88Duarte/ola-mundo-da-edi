import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
      await transporter.sendMail(mailOptions);
      res.status(200).send('Mensagem enviada com sucesso.');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).send('Erro ao enviar mensagem.');
    }
  } else {
    res.status(405).send({ message: 'Método não permitido' });
  }
}
