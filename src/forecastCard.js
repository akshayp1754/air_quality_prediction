
import React from 'react'
import DateTime from './DateTime'

function ForecastCard({getForecast}) {
  return (
    <div style={{'backgroundColor' : '#52B947', 'border-radius' : '10px' , 'color' : 'white'}}>
        <h1>{`AQI: ${getForecast['main']['aqi']}`}</h1>
        <h5>{DateTime.getFormattedDateFromEpochInSecond(getForecast['dt'])}</h5>
        <h4>{`CO: ${getForecast['components']['co']}`}</h4>
        <h4>{`NH3: ${getForecast['components']['nh3']}`}</h4>
        <h4>{`NO: ${getForecast['components']['no']}`}</h4>
        <h4>{`O3: ${getForecast['components']['o3']}`}</h4>
        <h4>{`PM2_5: ${getForecast['components']['pm2_5']}`}</h4>
        <h4>{`PM10: ${getForecast['components']['pm10']}`}</h4>
        <h4>{`SO2: ${getForecast['components']['so2']}`}</h4>
    </div>
  )
}

export default ForecastCard