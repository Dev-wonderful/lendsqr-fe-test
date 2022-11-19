import React from 'react';
import companyLogo from '../assets/header-logo.svg'
import { Link } from 'react-router-dom'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return(
        <nav className="navbar">
            <Link to="/"><img className="logo" src={companyLogo} alt="" /></Link>
            <div className="search">
                <input type="text" placeholder="Search for anything" />
                <button>icon</button>
            </div>
            <div className="nav-extra-details">
                <Link to="">Docs</Link>
                <span>bell icon</span>  {/*notification icon*/}
                <img src="" alt="profile" />
                <span>
                    Adedeji
                    <select name="user-options">    {/*or a drop-down Icon*/}
                        <option value=""></option>
                        <option value="log-out">Log Out</option>
                    </select>
                </span>     {/*username from Login details*/}
                
            </div>
        </nav>
    )
}

export default Navbar