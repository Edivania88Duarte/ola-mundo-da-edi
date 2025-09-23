import styles from './Projetos.module.css';
import React from 'react';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';

const projetos = [
  {
    nome: 'Aromas de Afeto',
    descricao: 'Landing page para a loja Aromas de Afeto.',
    imagem: '/assets/aromasDeAfeto2.png',
    link: 'https://aromas-de-afeto.vercel.app/',
  },
  {
    nome: 'Sistema de Vendas',
    descricao: 'Sistema de vendas e gestão de estoque.',
    imagem: '/assets/sistemaDeVendas.png',
    link: 'https://sistema-de-vendas-peach.vercel.app/',
  },
  {
    nome: 'Acquative',
    descricao: 'Site institucional para empresa de Acquative.',
    imagem: '/assets/acquative.png',
    link: 'https://acquative.vercel.app/',
  },
   {
    nome: 'Projeto Jandaya',
    descricao: 'Site educacional para o Projeto Jandaya.',
    imagem: '/assets/projetoJandaya.png',
    link: 'https://projeto-jandaya.vercel.app/',
  },
];


const Projetos = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Projetos">
      <h1 className={styles.subtitulo}>Projetos e Colaborações</h1>

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