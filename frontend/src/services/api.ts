import axios from 'axios';

const API_URL = 'http://localhost:8080'

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
const api = () =>{
    return axios(`${API_URL}/products`)
};

export default api;

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}