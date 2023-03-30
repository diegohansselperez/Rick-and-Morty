import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const { myFavorites, id, name, image, status, onClose, removeFav, addFav } =
    props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
      setIsFav(false);
    } else {
      addFav(props);
      setIsFav(true);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={style.card} key={id}>
      <div>
        {" "}
        {isFav ? (
          <button
            style={{ backgroundColor: "#242424", padding: "5px 5px"  }}
            onClick={handleFavorite}
          >
            ❤️
          </button>
        ) : (
          <button
            style={{ backgroundColor: "#242424", padding: "5px 5px"  }}
            onClick={handleFavorite}
          >
            🤍
          </button>
        )}
        <button style={{padding:"5px 5px" }} onClick={() => onClose(id)}>X</button>
      </div>
      <img src={image} alt={name} />
      <h2>{name}</h2>

      <div className={style.containBtn}>
        <div className={style.containStatus}>
          <span>Status: </span>
          <h4>{status}</h4>
        </div>{" "}
        <Link to={`/detail/${id}`}>
          <button>
            <p>Detail Card</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (ch) => dispatch(addFav(ch)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
