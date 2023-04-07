const axios = require('axios').default
export const TOKEN = '2d71850fc24edb7443b5922b70f3587eabb14119';
export const SEARCH_CITIES_BASE_URL = 'https://api.waqi.info/search/';
export const FEED_AQI_BASE_URL = 'https://api.waqi.info/feed/@';

export const getforecasting_url = (lat,lng) => {
  return `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lng}&appid=f68665f36f9079f636489aa77283dd8c`
}

export const getCityCordinateURl = (city) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=f68665f36f9079f636489aa77283dd8c`
}


export const getCityCordinate = async (city) => {
    const res = await axios.get(getCityCordinateURl(city),)
    return res.data
}
    
export const getForecasting = async (lat,lng) => {
    const res = await axios.get(getforecasting_url(lat,lng))
    return res.data
}