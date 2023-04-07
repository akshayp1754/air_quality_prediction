import React, { useState, useEffect, useRef } from 'react';

import { useAQIAPIs } from './useAQIAPIs';

import { TOKEN, SEARCH_CITIES_BASE_URL, getCityCordinate, getForecasting } from './AQIConst';

import CityAQIList from './CityAQIList';

import { getFormattedDateFromEpochInMillisecond} from './DateTime'
import ForecastCard from './forecastCard';

const SearchCities = () => {
    const [url, setUrl] = useState('');
    const [cities , loading, initial, error] = useAQIAPIs(url);
    const [searchText, setSearchText] = useState('');
    const searchInput = useRef(null);
    const [forcastData,setForecastData] = useState([])

    useEffect(() => {
        searchInput.current.focus();
    }, []);
    
    const searchCityName = (event) => {
        event.preventDefault();
        setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchText}`);
    }

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }

    
    return(
        <div>
            { error }
            <form onSubmit={ e => searchCityName(e)}>
                <label>
                
                <input 
                    type="text" 
                    ref={ searchInput }
                    value={ searchText } 
                    placeholder="Enter a City Name"
                    onChange={ e => handleSearchTextChange(e) } />
                </label>
                <input type="submit" value="Show AQI" />
                
            </form>
            <button style={{'marginTop': '10px','padding' : '12px', 'backgroundColor' : '#52B947', 'color' : 'white', 'borderRadius': '5px'}} onClick ={
                (async() =>
                 {const getData = await getCityCordinate(searchText)
                    console.log(getData)
                    const lat = getData[0]['lat']
                    
                    const lon = getData[0]['lon']
                
                  const forecast = await getForecasting(lat,lon)
                console.log(forecast);
                  setForecastData(forecast['list'])
                  
                 })}> Forecast</button>


                

            {
                <div>
                <div>{loading ?
                    (<span>loading...</span>)
                    :
                    !initial && (<CityAQIList data={ cities.data }/>)}</div>
                <div>( {forcastData.length == 0 ? null : forcastData.map((data,i) => {
                    return <ForecastCard getForecast={data}/>
                }) }</div>
                )
                </div>
            }
        </div>
    )
};

export default SearchCities;