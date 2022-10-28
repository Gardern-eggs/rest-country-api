import React from 'react'

export const Filter = () => {
  
  const search=document.getElementById('search')
  search.addEventListener('input', (e)=>{

    const {value}=e.target
    const countryName=document.querySelectorAll('.countryName')

    countryName.forEach((name)=>{
      if(name.innerText.toLowerCase().includes(value.toLowerCase())){
        name.parentElement.parentElement.style.display='block'
      }else{
        name.parentElement.parentElement.style.display='none'
      }
    })
  })


  return (
    <div className='filterbar'>
        <form className='formControl'>
            <input type="search" name="search" id="search" placeholder='Search for a country…' />
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
