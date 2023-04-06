import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
   const[detail, setDetail] = useState({})
   const {detailId} = useParams() 
   
   useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/details/${detailId}`)
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
  <div>{
    detail.id ? 
    <div>
      <h2>{detail.name}</h2>
      <h3>{detail.status}</h3>
      <h3>{detail.species}</h3>
      <h3>{detail.gender}</h3>
      <h3>{detail.origin?.name}</h3>
      <img src={detail.image} alt={detail.name} />
    </div>
    : <h2>Loading...</h2>
    }</div>
    
  )
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

 