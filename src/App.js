import './App.css';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData, { formatToLocalTime_nf } from './services/WeatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'folsom'})
  const [units, setUnits] = useState('imperial')
  const [weather, setWeather] = useState(null)
  
  useEffect(()=>{
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(data => {
        setWeather(data);
      })
    };
  
    fetchWeather();
  }, [query, units])

  let t = 0

  const formatBackground = () => {
    if(!weather) return 'from-cyan-400 to-blue-700'

    var finalStr = "";
    //0,0,30 - night
    //95,158,245 - day
    const threshold = units === 'metric' ? 27: 80
    const rawTime = formatToLocalTime_nf(weather.dt, weather.timezone)
    let formatted_time; 
    let splitted = rawTime.split("|");
    if(splitted[1] === "AM") formatted_time = parseInt(splitted[0]);
    else if(splitted[1] === "PM") formatted_time = parseInt(splitted[0]) + 12;
    
    const night_time = (formatted_time >= 0 && formatted_time < 4 )|| (formatted_time > 20 && formatted_time <=24);


    if(weather.temp <= threshold) finalStr = finalStr.concat('from-[rgb(150,150,200)] ');
    else finalStr = finalStr.concat('from-orange-400 ');
    
    if(night_time) finalStr = finalStr.concat('to-[rgb(6,0,33)]')
    else finalStr = finalStr.concat('to-blue-700')

    return finalStr
  }

  formatBackground();

  //bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
  return (
    <div>
      <div className={`mx-auto py-5 px-2 sm:px-10 max-w-screen-lg bg-gradient-to-br ${formatBackground()}`}>
        <TopButtons setQuery = {setQuery}/>
        <Inputs setQuery = {setQuery} units setUnits = {setUnits}/>

        {weather && (
          <div>
            <TimeAndLocation weather={weather}/>
            <TemperatureAndDetails weather={weather}/>
            <Forecast title='hourly forecast' items={weather.hourly}/>
            <Forecast title='daily forecast'  items={weather.daily}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
