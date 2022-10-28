import React from 'react'
import './BurgerMenu.scss'

const BurgerMenu = (menuActive, changeActive) => {
    console.log(menuActive)
    
  return (
    <div onClick={changeActive} className={menuActive ? 'header-menu__icon _active' : 'header-menu__icon'}>
        <div className="menu__icon icon-menu">
                <span></span>
                <span></span>
                <span></span>
             </div>
             <nav className="menu__body">
              <ul className={menuActive ? 'menu__list active' : 'menu__list' }>
                <li><a href="*" className="menu__link">Home</a> </li>
                <li><a href="*" className="menu__link">Our mission</a> </li>
                <li><a href="tel:+38 (096) 622 86 13">Places</a></li>
                <li><a href="tel:+38 (096) 622 86 13">Team</a></li>
                <a href="*" className="menu__button">Apply</a>
              </ul>
            </nav>
    </div>
  )
}

export default BurgerMenu