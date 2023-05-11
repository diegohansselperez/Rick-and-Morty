import style from "../styles/About.module.css";
import rick_and_morty from "../img/RickyMorty.jpg";

const About = () => {
  return (
    <body>
      <main className={style.containerCard}>
        <div className={style.containH3}><h3>Rick and Morty</h3></div>
        

        <div className={style.contain_img_text}>
          <img src={rick_and_morty} alt="Rick_y_Morty_Serie_de_TV" />{" "}
          <p>
            Rick and Morty es una serie animada de ciencia ficción y comedia
            para adultos, creada por Justin Roiland y Dan Harmon. La trama sigue
            las aventuras interdimensionales de Rick, un científico alcohólico y
            genio excéntrico, y su nieto Morty, un adolescente tímido e
            inseguro. La serie combina elementos de ciencia ficción, humor negro
            y sátira social, y es conocida por su estilo de animación peculiar y
            su contenido maduro e irreverente. Rick and Morty se ha convertido
            en un fenómeno de culto y ha sido elogiada por su originalidad,
            ingenio y complejidad temática.
          </p>
        </div>
      </main>
    </body>
  );
};

export default About;
