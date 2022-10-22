import React from 'react'

const Header = () => {
  return (
    <header className="headerContainer">
        <div id='question'> 
            <h2>Where in the world?</h2>
        </div>
        <div id='modeSwitch'>
        <i className="fa fa-moon-o"> '  🌘 '</i>
           <h4>Dark Mode</h4>  
        </div>
    </header>
  )
}

export default Header

