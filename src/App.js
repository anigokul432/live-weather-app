import './App.css';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'folsom'})
  const [units, setUnits] = useState('metric')
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
    if(!weather) return 'from-[rgb(100,158,275)]'
    //0,0,30 - night
    //95,158,245 - day
    const threshold = units === 'metric' ? 27: 80
    if(weather.temp <= threshold) return 'from-[rgb(150,150,200)]'

    return 'from-orange-400'
  }

  formatBackground();

  //bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
  return (
    <div className={`mx-auto py-5 px-10 max-w-screen-lg bg-gradient-to-br ${formatBackground()} to-blue-700 h-fit shadow-xl shadow-gray-400`}>
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
  );
}

export default App;
