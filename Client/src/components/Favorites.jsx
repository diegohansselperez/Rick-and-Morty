import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import {
  filterCards,
  orderCards,
  removeFav,
} from "../redux/actions";
import style from "../styles/Favorite.module.css";

export default function Favorites(props) {
  //const { onClose } = props;

  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFavorite(id) {
    //onClose(id);
    dispatch(removeFav(id));
  }

  const handleOrder = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(orderCards(value));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(filterCards(value));
  };


  return (
    <div className={style.containerFav}>
      {" "}
      <h2>Favorites Characters</h2>
      <div className={style.containerBtns}>
        <select name="order" onChange={handleOrder} defaultValue={"Order"}>
          <option value="Order" disabled>
            Select Ordenar
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter} defaultValue={"Filter"}>
          <option value="Filter" disabled>
            Seleccion Filtrar
          </option>
          <option value="Male">Hombre</option>
          <option value="Female">Mujer</option>
          <option value="Genderless">Sin Genero</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
      <main >
        {" "}
        {myFavorites && myFavorites.map((element) => {
          return (
            <Card
              key={element.id}
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
      </main>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
