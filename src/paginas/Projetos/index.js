import styles from './Projetos.module.css';
import React from 'react';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';

const projetos = [
  {
    nome: 'Iberolife',
    descricao: 'Sistema de gestão de saúde e bem-estar.',
    imagem: '/assets/iberoLife.png',
    link: 'https://iberolife.vercel.app/pt',
  },
  {
    nome: 'Sistema de Vendas',
    descricao: 'Sistema de vendas e gestão de estoque.',
    imagem: '/assets/sistemaDeVendas.png',
    link: 'https://sistema-de-vendas-peach.vercel.app/',
  },
  {
    nome: 'Arte Di Maria',
    descricao: 'Sistema de cadastro de artes.',
    imagem: '/assets/.png',
    link: '#',
  },
];


const Projetos = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Projetos">
      <h1 className={styles.subtitulo}>Meus Projetos</h1>

    <div className={styles.projetosContainer}>      
      <div className={styles.listaProjetos}>
        {projetos.map((p, index) => (
          <div className={styles.projeto} key={index}>
            <img src={p.imagem} alt={p.nome} />
            <h2>{p.nome}</h2>
            <p>{p.descricao}</p>
            {p.link !== '#' && (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
    </PostModelo>
  );
};

export default Projetos;