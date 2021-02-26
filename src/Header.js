import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
      <img className="header__logo" src="https://logo-marque.com/wp-content/uploads/2020/04/Amazon-Symbole.png" alt="logo amazon"/>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchinput"/>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option1">hello</span>
            <span className="header__option2">Sing in</span>
          </div>
        </Link>
        
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__option2 header__basketCount" >0</span>
          </div>
        </Link>
        
      </div>
    </nav>
  )
}
