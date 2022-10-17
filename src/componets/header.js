import React from 'react'

const Header = () => {
  return (
    <header className="headerContainer">
        <div id='question'> 
            <h3>Where in the world?</h3>
        </div>
        <div id='modeSwitch'>
        <i className="fa-solid fa-moon-stars"></i>
           <h6>Dark Mode</h6> 
        </div>
    </header>
  )
}

export default Header

