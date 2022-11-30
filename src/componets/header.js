import React, { useState } from 'react'
import DarkMode from '@mui/icons-material/DarkMode'


const Header = () => { 
  const [mode,setMode]=useState("light")
  const switchMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.style.setProperty('--primary', 'rgba(32, 44, 54, 1)');
      document.documentElement.style.setProperty('--secondary', 'rgba(43, 56, 68, 1)');
      document.documentElement.style.setProperty('--primary-text', 'hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--border'," hsl(209, 30%, 18%)");

  }
  else {
      document.documentElement.style.setProperty('--primary', 'hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--secondary', ' hsl(0, 0%, 98%)');
      document.documentElement.style.setProperty('--primary-text', 'hsl(200, 15%, 8%)');
      document.documentElement.style.setProperty('--border'," rgb(198, 204, 206)");
      setMode('light');
  }
}
  

  return (
    <header className="headerContainer">
        <div id='question'> 
            <h2>Where in the world?</h2>
        </div>
        <div id='modeSwitch'onClick={switchMode}>
        <DarkMode  />
        {mode === 'dark' ? 
                <>
                    <span>Light Mode</span>
                </>
                :
                    <>   
                      <span >Dark Mode</span>
                    </>
                }
           
        </div>
    </header>
  )
}

export default Header

