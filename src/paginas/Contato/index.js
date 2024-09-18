import React, { useState } from 'react';
import styles from './Contato.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contato() {
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = {
            nome: event.target.nome.value,
            email: event.target.email.value,
            telefone: event.target.telefone.value,
            mensagem: event.target.mensagem.value,
        };
    
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            setMensagemEnviada(true);
                      
        } else {
            alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        }
    
        event.target.reset();
    }

    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Contato"
        >
            <h3 className={styles.subtitulo}>
                Entre em contato
            </h3>

           
            {mensagemEnviada && (
                 alert('Mensagem enviada com sucesso!')
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
                    <FaLinkedin size={30} /> {/* Ícone do LinkedIn */}
                </a>
                <a href="https://github.com/Edivania88Duarte" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} /> {/* Ícone do GitHub */}
                </a>
            </div>
        </PostModelo>
    );
}
