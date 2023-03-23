import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.containerMain}>
          <div className={styles.colLeftMain}>
            <h1>Olá, sou o Wendhel Nogueira</h1>
            <p className="txt-color-yellow">Desenvolvedor Front-End</p>
            <p>
              Após alguns anos de experiência em desenvolvimento de aplicações
              web e e-commerce, estou sempre atento as mudanças e inovações no
              universo da tecnologia.
            </p>
            <p>
              Busco sempre me aperfeiçoar, na vida pessoal e profissional, e
              mantenho esse portfólio atualizado para registrar minha evolução e
              experiências ao longo do caminho. Minhas especialidades são:
              Wordpress, JavaScript, HTML/CSS, Reactjs, Git e outros.
            </p>
            <a href="/cursos" className="buttonMain">
              Projetos
            </a>
          </div>
          <div className={styles.holdImgMain}>
            {/* <img src=".././Assets/logotipo-white.svg" alt="" /> */}
          </div>
        </div>
      </main>
      <section className={styles.experiencia}>
        <div className={styles.holdExperiencia}>
          <div className={styles.holdTextExp}>
            <h2>Experiência</h2>
            <p>Projetos e lugares que trabalhei</p>
          </div>
          <div className={styles.holdCompany}>
            <h3>MDGA</h3>
            <p>Comunicação e Design</p>
            <p className="txt-color-yellow">Out/2020 - Ago/2022</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
