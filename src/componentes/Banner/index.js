import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";

export default function Bannner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Seja bem-vindo(a) ao meu cantinho! <br></br>
          Eu sou a Edivania Duarte, mas pode me chamar de Edi :) <br></br>
          Sou desenvolvedora Full Stack em formação e estagiária de
          desenvolvimento, sempre sedenta por novos aprendizados e apaixonada
          por criar conexões. Aqui compartilho o conhecimento que estou
          adquirindo ao longo da minha jornada. Espero que algo que eu
          compartilhe aqui possa ser útil e inspirador para você!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Foto da circulo colorido"
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto da Edi sorrindo"
        />
      </div>
    </div>
  );
}
