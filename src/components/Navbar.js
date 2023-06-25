import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import '../style/Navbar.css'
export default function Navbar(props) {
  return (
    <>

      <div className='navbar'>

        <ul className='navbarItems'>
          <li className='title'>
            Pen&Pencil.com
          </li>
          <div className="listItems">
            <li>
            <Link to="/">Shop</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/Contact">Contact</Link>
            </li>
          </div>
          <div className="cartIcon">
          <Link to="/Cart"><Badge badgeContent={props.size}><ShoppingCartIcon/></Badge></Link>
            
          </div>
        </ul>

      </div>
    </>
  )
}
