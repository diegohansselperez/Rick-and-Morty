import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";
//import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Card(props) {
  const { id, name, image, onClose } = props;

  const [isFav, setIsFav] = useState(false);

  const { myFavorites } = useSelector((state) => state);

  console.log(myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) { 
      setIsFav(false);
      dispatch(removeFav(id));
     
    } else {
      dispatch(addFav(props));
      setIsFav(true);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if(fav.id === id) {
        setIsFav(true);
      }
    })
  }, [myFavorites, id]);

  return (
    <div className={style.card} key={id}>
      <div className={style.btns_Top_Detail}>
        {" "}
        {isFav ? (
          <button className={style.btnFavorite} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.btnFavorite} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={style.btnDelete} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <img src={image} alt={name} />
      <h2 className={style.name}>{name}</h2>
      <div className={style.containBtn}>
        <Link to={`/detail/${id}`}>
          <button className={style.btnDetail}>Detail Card</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;

// function mapDispatchToProps(dispatch) {
//   return {
//     addFav: (ch) => dispatch(addFav(ch)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
