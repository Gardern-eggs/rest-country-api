import React from 'react'

export const Filter = () => {
  return (
    <div className='filterbar'>
        <form className='formControl'>
            <input type="search" name="search" id="search" placeholder='Search for a country…'/>
        </form>
        <div className='option'>
            <select name='select' id='select'>
            <option value="" disabled defaultValue hidden >Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    </div>
  )
}
