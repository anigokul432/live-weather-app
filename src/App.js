import './App.css';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'london'})
    console.log(data);
  };

  fetchWeather();

  return (
    <div className='mx-auto py-5 px-10 max-w-screen-lg bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title='hourly forecast'/>
      <Forecast title='daily forecast'/>
    </div>
  );
}

export default App;
