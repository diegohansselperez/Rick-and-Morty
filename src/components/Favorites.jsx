import { connect } from "react-redux";
import Card from "./Card";
import { removeFav } from "../redux/actions";
import style from "../styles/Favorite.module.css";

function Favorites(props) {
  const { myFavorites, onClose, removeFav } = props;
  
  
  function removeFavorite(id){
    onClose(id);
    removeFav(id);
  }
  
  
  return (
    <div className={style.containerFav}>
      <h2>FAVORITES CHARACTERS</h2>
      {myFavorites?.map((element, index) => {
        return (
          <Card
            key={index}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            id={element.id}
            origin={origin}
            image={element.image}
            onClose={() => removeFavorite(element.id)}
          />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFav: (id) => dispatch(removeFav(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
