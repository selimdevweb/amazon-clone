import React, {useState,useCallback,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';


export default function Header() {
  const [{basket}] = useStateValue()
  const [{user}] = useStateValue()

  const login = () =>{
    if (user) {
      auth.signOut()
    }
  }
 
  const [y, setYarl] = useState(false);
    const [defil, setdefil] = useState(true)
 
    const handleNavigation = useCallback(
      e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          console.log("scrolling up",);
          setdefil(true)
        } else if (y < window.scrollY) {
          console.log("scrolling down");
          setdefil(false);
        }
        setYarl(window.scrollY);
      }, [y]
    );
    
    useEffect(() => {
        setYarl(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
    
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);


  return (
    <div>
      <nav className={defil ? "header" : "none"}>
      
      <Link to="/">
      <img className="header__logo" src="https://logo-marque.com/wp-content/uploads/2020/04/Amazon-Symbole.png" alt="logo amazon"/>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchinput"/>
        <SearchIcon className="header__searchIcon" />
      </div>
      

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option1">Bonjour {user?.email} </span>
            <span className="header__option2">{user !=null ? 'se déconnecter' : 'Se connecter'}</span>
          </div>
        </Link>
        
        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__option1">Votre Panier</span>
            <div >
            <ShoppingBasketIcon/>
            <span className="header__option2 header__basketCount" >{basket?.length}</span>
            </div>
          </div>
        </Link>
        
      </div>
    </nav>
    </div>
    
  )
}
