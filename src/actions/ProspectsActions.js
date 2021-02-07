import axios from "axios";

export const getProspects = () => {

  const config = {
    headers:{'Acces-Control-Allow-Origin':'*'}
  }
  return dispatch => {
    axios
      .get("https://prospectos-api-nodejs-3lu95.ondigitalocean.app/prospects")
      .then(res => {
        dispatch({
          type: "get_prospects",
          payload: res.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getProspect = (idProspect) => {
  console.log("Action " + idProspect + " Si hay");
  return dispatch => {
    axios.get(`https://prospectos-api-nodejs-3lu95.ondigitalocean.app/prospects/${idProspect}`, {id: idProspect})
    .then(res => {
      console.log(res.data);
      dispatch({
        type: "get_prospect_by_id",
        payload: res.data
      })
    })
  };
};

export const postProspect = ( nombre, apellidop, apellidom, calle, numero, colonia, cp, telefono, rfc, documento) => {
  return dispatch => {
    console.log(nombre)
    axios
      .post("https://prospectos-api-nodejs-3lu95.ondigitalocean.app/add", {
        nombre,
        apellidop,
        apellidom,
        calle,
        numero,
        colonia,
        cp,
        telefono,
        rfc,
        documento
      })
      .then(res => {
        dispatch({
          type: "post_prospect",
          payload: res.data
        });
      });
  };
};

// export const deleteProspect = id => {
//   return dispatch => {
//     axios
//     .delete("http://localhost:3001/delete", { data: { id } })
//     .then(res => {
//       dispatch({
//         type: "delete_prospect",
//         payload: res.data
//       });
//     });
//   };
// };

export const updateProspect = (id, estatus, observacion) => {
  return dispatch => {
    axios
    .patch(`https://prospectos-api-nodejs-3lu95.ondigitalocean.app/update/${id}`, { estatus, observacion })
    .then(res => {
        dispatch({
          type: "update_prospect",
          payload: res.data
        });
      });
  };
};
