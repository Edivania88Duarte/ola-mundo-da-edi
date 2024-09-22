import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/_Edi.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
           <h3 className={styles.subtitulo}>
                Olá, eu sou a Edi!
           </h3>

           <img 
                src={fotoSobreMim}
                alt='Foto da Edi sorrindo'
                className={styles.fotoSobreMim}
           />

           <p className={styles.paragrafo}>
            Que bom te ter por aqui!
           </p>
           <p className={styles.paragrafo}>
            Tenho formação em Direito, uma área que me ensinou muito sobre disciplina e análise crítica. 
            No entanto, meu coração bateu mais forte pela Tecnologia, quando tive o primeiro contato, o que me levou a fazer uma transição de carreira. 
            Hoje, sou Desenvolvedora Full Stack em formação. Atualmente, curso Análise e Desenvolvimento de Sistemas e atuo como estagiária de Desenvolvimento.
            </p>
            <p className={styles.paragrafo}>
            O primeiro contato com tecnologia, se deu através de uma conversa com minha filha no começo de 2023.
            A forma como ela abordou o assunto me deixou super curiosa, então comecei a pesquisar e ainda sem entender, participei de workshop de programação e
            posteriormente fiz uma aula experimental, o que me deixou encantada. Na época, por incompatibilidade de horários, não consegui fazer o curso   
            presencial, porém, na metade do ano encontrei um curso online, que viabilizou o início dos meus estudos e fometou ainda mais, a vontade de
            migrar de carreira.            
            </p>
            <p className={styles.paragrafo}>
            Dessa forma, iniciei meus estudos no período noturno, quando chegava do trabalho, já bem cansada do dia e da rotina exaustiva, mas sempre com a mente
            focada em realizar minha transição de carreira, pois visava muito, conseguir o tão sonhado home-office para ter mais tempo de qualidade com 
            a minha filha e acompanhar melhor o crescimento dela, coisa que não pude fazer na primeira infância, por ter de trabalhar fora.
            </p>
            <p className={styles.paragrafo}>
            Foi então, que com dedicação, esforço, networking e muita fé, aproximadamente aos 10 meses de estudos, consegui meu primeiro estágio na 
            área. No qual, estou tendo diariamente a oportunidade de aprender e de me desenvolver. No estágio, vivo a rotina da empresa, participo dos
            projetos, tendo a liberdade de dar ideias, de dizer onde são minhas dificuldades, de aprender a fazer, de pesquisar e aplicar, de trabalhar
            em equipe e de entregar as tasks que fazem parte dos projetos reais.
            </p>
            <p className={styles.paragrafo}>
            Tudo isso tem sido tão intenso e gratificante, que quando olho pra trás, só consigo sentir gratidão a Deus e aos anjos que me ajudaram a 
            trilhar esse caminho e que permancem ao meu lado, segurando minha mão e torcendo pela minha evolução. A tecnologia me trouxe não só
            aprendizados e habilidades para migrar de carreira, mas amigos valiosos que estão junto comigo nessa jornada. 
            E se você chegou até aqui e ainda tá bem no início, cheio de anseios, incertezas e dúvidas, como um dia estive, te digo: 
            É possível. Acredite em você, dê seu melhor até quando sua mente tentar te pregar peças e não desista!A bênção já existe. Basta clareza para acessá-la.🌟
            </p>
        </PostModelo>
    )
}