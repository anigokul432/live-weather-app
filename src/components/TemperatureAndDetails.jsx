import React from 'react'
import { 
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset, 
} from '@iconscout/react-unicons'
import { formatToLocalTime } from '../services/WeatherService'

function TemperatureAndDetails({weather: {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between py-3'>
            <div className='flex flex-col space-y-2 text-white text-8xl drop-shadow-lg'>
                {`${temp.toFixed()}°`}
                <div className='flex font-light text-sm items-center text-white'>
                <p>H: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
                <p className='px-2 sm:px-2'></p>
                <p>L: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center text-white'>
                    <UilTemperature size={18} className='mr-1'/>
                    Real Feel:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                
                <div className='flex font-light text-sm items-center text-white'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                
                <div className='flex font-light text-sm items-center text-white'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>{`${speed.toFixed()} kmph`}</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <div className='font-light'>
                Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
            </div>           
            
            <p className='px-0 sm:px-2'></p>
            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails