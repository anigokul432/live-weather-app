import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        <div className='flex items-center justify-center p-6'>
            <p className='text-white text-5xl font-medium'>
                {`${name}, ${country}`}
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-base font-extralight px-6 sm:text-xl'>
                {formatToLocalTime(dt, timezone).split('|')[0]}
            </p>
            <p className='text-white text-base font-extralight px-6 sm:text-xl'>
                {formatToLocalTime(dt, timezone).split('|')[1]}
            </p>
        </div> 
    </div>
  )
}

export default TimeAndLocation