import React, {useState} from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState('')

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  const handleSearchClick = () => {
    if(city !== '') setQuery({q:city})
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
      
        setQuery({lat, lon});
      })
    }
  }
  
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input id='myInput' value={city} onChange={(e) => setCity(e.currentTarget.value)} type="choose" placeholder='Search any place...' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded-2xl' />
        <button id="submit" onClick={handleSearchClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'><UilSearch/></button>
        <UilMapMarker onClick={handleLocationClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' onClick={handleUnitsChange} className='text-xl text-white font-light transition ease-out hover:scale-125'>
          °C
        </button>
        <p className='text-l text-white mx-1'>|</p>
        <button name='imperial' onClick={handleUnitsChange} className='text-xl text-white font-light transition ease-out hover:scale-125'>
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs