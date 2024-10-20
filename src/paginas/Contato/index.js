import React, { useState } from 'react';
import styles from './Contato.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contato() {
    const [mensagemEnviada, setMensagemEnviada] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = {
            nome: event.target.nome.value,
            email: event.target.email.value,
            telefone: event.target.telefone.value,
            mensagem: event.target.mensagem.value,
        };
    
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                setMensagemEnviada(true);
                setMensagemErro('');              
                setTimeout(() => {
                    setMensagemEnviada(false);
                }, 2000);
            } else {
                throw new Error('Erro ao enviar mensagem.');
            }
        } catch (error) {
            setMensagemErro('Erro ao enviar mensagem. Tente novamente mais tarde.');
            setMensagemEnviada(false);          
            setTimeout(() => {
                setMensagemErro('');
            }, 2000);
        }
    
        event.target.reset();
    }

    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sugestões, elogios, dúvidas e parcerias"
        >
            <h3 className={styles.subtitulo}>
                Entre em contato
            </h3>
            
            {mensagemEnviada && (
                <div className={styles.mensagemSucesso}>
                    Mensagem enviada com sucesso!
                </div>
            )}

            {mensagemErro && (
                <div className={styles.mensagemErro}>
                    {mensagemErro}
                </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>

                <div className={styles.campo}>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />
                </div>

                <div className={styles.campo}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.campo}>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
                </div>

                <button type="submit" className={styles.botao}>Enviar</button>
            </form>

            <div className={styles.redesSociais}>
                <a href="https://www.linkedin.com/in/edivania-duarte/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} /> 
                </a>
                <a href="https://github.com/Edivania88Duarte" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} /> 
                </a>
            </div>
        </PostModelo>
    );
}
