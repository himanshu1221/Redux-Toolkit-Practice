import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span className='Logo'>Redux Store</span>
      <div>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart">Cart</Link>
        <span className='cartCount'>
          Car Item : 0
        </span>
      </div>
    </div>
  )
}

export default Navbar