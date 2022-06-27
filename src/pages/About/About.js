//CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o <span>Evolua</span>
      </h2>

      <p>
      Sistemas para gestão de vagas em creche
      </p>
      {/* <div>
      <img src="https://i1.wp.com/www.colegiopilares.com.br/wp-content/uploads/2020/04/2-colegiopilares.com.br-Ep6SJ.jpg?fit=1024%2C683&strip=all&quality=90&ssl=1" alt="" />
      <img src="https://i2.wp.com/www.colegiopilares.com.br/wp-content/uploads/2020/06/4-colegiopilares.com.br-chKXS.png?resize=300%2C194&strip=all&quality=90&ssl=1" alt="" />
      </div>
      <p>
      Assim, coordenação pedagógica com a equipe de professores do Creche Evolua preocupa-se em garantir a socialização, o cuidado e a educação no cotidiano escolar por meio da interação e da brincadeira, tanto entre a criança e seus pares quanto entre ela e os adultos, objetos e/ou o meio ambiente. Brincando, as crianças constroem sentido para o mundo, desenvolvem ideias e habilidades e ainda compreendem conceitos relacionados a cada vivência.
      </p>
      <div>
     <img src="https://i.ytimg.com/vi/SqTB39SmKf4/maxresdefault.jpg" alt="crianças sentadas" />
     <img src="https://i1.wp.com/www.colegiopilares.com.br/wp-content/uploads/2020/06/6-colegiopilares.com.br-3VOnh.png" alt="" />
     </div>
      <p>Os conteúdos são oferecidos buscando uma aprendizagem significativa através de: atividades permanentes, sequenciadas e elaboração de projetos, isto é, os alunos constroem significados atribuindo sentido àquilo que aprendem, contribuindo para o aprendizado pessoal dos alunos, promovendo o desenvolvimento de habilidades e competências. Os seis grandes direitos propostos pela BNCC são estimulados para que as crianças possam desempenhar um papel ativo na construção de seus conhecimentos: CONVIVER, BRINCAR, PARTICIPAR, EXPLORAR, EXPRESSAR e CONHECER-SE.
      </p> */}
{/* 
      <Link to="/posts/create" className="btn">
        Criar post
      </Link> */}
    </div>
  );
};

export default About;
