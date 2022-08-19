import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-5xl font-medium'>
                Berlin, DE
            </p>
        </div>

        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-base font-extralight px-6 sm:text-xl'>
                Tuesday, 31 May 2022
            </p>
            <p className='text-white text-base font-extralight px-6 sm:text-xl'>
                Local Time: 12:46 PM
            </p>
        </div> 
    </div>
  )
}

export default TimeAndLocation