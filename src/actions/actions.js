import { types } from '../reducers/Reducer';

// sample action
/*
export const updateTechnologies = (data) => ({
  type: types.UPDATE_TECHNOLOGIES,
  payload: data,
});
*/

// sample thunk
/*
export const getNotes = (userId) => {
  return dispatch => {
    fetch(APIURL + `/technology/notes?id=${userId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        "Access-Control-Allow-Origin" : "*"
      },
      mode: "cors"
    })
    .then(res => res.json())
    .then(data => dispatch(updateTechnologies(data.technologies)))
    .catch(err => console.log(err));
  }
} 
*/