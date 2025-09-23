import styles from './Projetos.module.css';
import React from 'react';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={32}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  // loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    1300: { slidesPerView: 3 }, // *** Coloque o MAIOR primeiro ***
    900: { slidesPerView: 2 },
    640: { slidesPerView: 1 },
  }}
>
  {projetos.map((p, idx) => (
    <SwiperSlide key={idx}>
      <div className={styles.projeto}>
        <img src={p.imagem} alt={p.nome} />
        <h2>{p.nome}</h2>
        <p>{p.descricao}</p>
        {p.link !== '#' && (
          <a href={p.link} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
        )}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </PostModelo>
  );
};

export default Projetos;