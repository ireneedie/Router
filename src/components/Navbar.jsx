import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to='/'><h2>Home</h2></Link>
                    <Link to='/Menu'><h2>Menu</h2></Link>
                    <Link to='/Contact'><h2>Contact</h2></Link>
                    
                </li>
            </ul>

        </div>
    )
}

export default Navbar