import React from 'react'
import { 
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset, 
} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Clear</p>
        </div>

        <div className='flex flex-row items-center justify-between py-3'>
            <p className='flex flex-col space-y-2 text-white text-8xl drop-shadow-lg'>
                34°
            </p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center text-white'>
                    <UilTemperature size={18} className='mr-1'/>
                    Real Feel:
                    <span className='font-medium ml-1'>32°</span>
                </div>
                
                <div className='flex font-light text-sm items-center text-white'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>66%</span>
                </div>
                
                <div className='flex font-light text-sm items-center text-white'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>55 km/h</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <div className='font-light'>
                Rise: <span className='font-medium ml-1'>06:45 AM</span>
            </div>           
            
            <p className='px-0 sm:px-2'></p>
            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>07:35 PM</span>
            </p>
            
            <p className='px-0 sm:px-2'></p>
            <UilArrowUp/>
            <p className='font-light'>
                High: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            
            <p className='px-0 sm:px-2'></p>
            <UilArrowDown/>
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails