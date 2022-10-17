import React from 'react'

export const Filter = () => {
  return (
    <div className='filterbar'>
        <form className='formControl'>
            <input type="search" name="search" id="search" placeholder='Search for a country'/>
        </form>
        <select name='select' id='select'>
            <option value='Filter by  region' ></option>
            <option value='Filter by  region'>Africa</option>
            <option value='Filter by  region'>America</option>
            <option value='Filter by  region'>Asia</option>
            <option value='Filter by  region'>Europe</option>
            <option value='Filter by  region'>Oceania</option>

        </select>
    </div>
  )
}
