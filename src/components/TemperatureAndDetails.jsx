import React from 'react'
import { UilSun } from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Clear</p>
        </div>

        <div className='flex flex-row items-center justify-betweent text-yellow-200 py-3'>
            <UilSun size={50}/>
        </div>
    </div>
  )
}

export default TemperatureAndDetails