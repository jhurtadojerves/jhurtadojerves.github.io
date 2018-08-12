/** Layout Component to Header */
import React from 'react'

/** Assets import */
import '../assets/css/Header.css'

const Header = props => {
  const { name, image, description } = props
  return(
    <header className="Header">
      <div className="Header-container">
        <img src={ image } alt="Header" className="Header-image" />
        <h1 className="Header-name">{ name }</h1>
        <h2 className="Header-description">{ description }</h2>
      </div>
    </header>
  )
}

export default Header