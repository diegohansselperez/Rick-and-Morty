import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Detail.modules.css";
import Loading from "../hook/loading";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/detail/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setDetail(data);
        } else {
          window.alert("No se encontro el ID");
        }
      });
    return () => setDetail({});
  }, [detailId]);

  return (
    <div className="containerDetail">
      <h2>Detail Character</h2>
      {detail.id ? (
        <div className="cardDetail">
          <div>
            <h2>{detail.name}</h2>
            <p>
              <h4>Status: </h4>
              {detail.status}
            </p>
            <p>
              <h4>Species: </h4>
              {detail.species}
            </p>
            <p>
              <h4>Gender: </h4>
              {detail.gender}
            </p>
            <p>
              <h4>Origin: </h4>
              {detail.origin}
            </p>{" "}
          </div>

          <img src={detail.image} alt={detail.name} />
        </div>
      ) : (
        Loading()
      )}
    </div>
  );
};

export default Detail;

// const[infoDetail, setInfo] = useState({})
//   const {detailId} = useParams()
//   console.log("detailId>", useParams())

//   useEffect(() => {
//     fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
//       .then((response) => response.json())
//       .then((char) => {
//         if (char.name) {
//           console.log(char)
//           setInfo(char)
//         } else {
//           window.alert('No hay personajes con ese ID');
//         }
//       })
//       .catch((err) => {
//         window.alert('No hay personajes con ese ID');
//       });
//     return () => setInfo({});
//   }, [detailId]);

//   return <div>{infoDetail.id ? <div>
//           <h1>{infoDetail.name}</h1>
//           <h1>{infoDetail.status}</h1>
//           <h1>{infoDetail.species}</h1>
//           <h1>{infoDetail.gender}</h1>
//           <h1>{infoDetail.origin?.name}</h1>
//           <div>
//           <img src={infoDetail.image} alt={infoDetail.name} />
//         </div>
//         </div> : <h1>Loading...</h1>} </div>
// const [detail, setDetail] = useState({});
//   const { detailId } = useParams();
