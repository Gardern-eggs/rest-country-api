import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const Header = () => {
  return (
    <header className="headerContainer">
        <div id='question'> 
            <h2>Where in the world?</h2>
        </div>
        <div id='modeSwitch'>
        <DarkModeIcon className="moon-o"/>
       
           <h4>Dark Mode</h4>  
        </div>
    </header>
  )
}

export default Header

