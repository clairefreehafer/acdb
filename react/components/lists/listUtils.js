import axios from 'axios';

export const fetchFurniture = page =>{
  return axios.get(`/api/furniture/page/${page}`)
    .catch(console.error)
}
