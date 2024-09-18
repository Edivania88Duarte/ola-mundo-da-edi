import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'


export default function Bannner() {
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>   

                <p className={styles.paragrafo}>
                    Seja bem-vindo(a) ao meu cantinho pessoal!
                    Eu sou a Edivania Duarte, mais conhecida como Edi :) 
                    Desenvolvedora Full Stack em formação e estagiária de desenvolvimento, sedenta por novos aprendizados e apaixonada por conexões. Aqui compartilho os 
                    conhecimentos que venho adquirindo ao longo da minha formação e jornada. Espero contribuir com algo novo!
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
    )
}