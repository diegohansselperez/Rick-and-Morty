import style from "../styles/Cards.module.css";
import Card from "./Card";

function Cards({ characters, onClose }) {
  const persRick = characters.map(
    ({ name, status, species, id, origin, image, gender }) => {
      return (
        <Card
          key={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          id={id}
          origin={origin}
          image={image}
          onClose={onClose}
        />
      );
    }
  );

  return <div className={style.containerCard}>{persRick}</div>;
}

export default Cards;
