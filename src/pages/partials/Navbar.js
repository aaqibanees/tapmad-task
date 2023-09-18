import React, {useState} from 'react'
import styles from '../../css/Navbar.module.css';
import {Link} from "react-router-dom";
import logo from '../../tapmad-logo.png';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false)
    };

    return (
        <header className="App-header">
            <nav className={`${styles.navbar}`}>
                <Link to="/" className={`${styles.logo}`}>
                    <img src={logo} width='200' height='50' alt='Tapmad task' />
                </Link>

                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <Link to='/' className={`${styles.navLink}`}>Home</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/create' className={`${styles.navLink}`}>Create User</Link>
                    </li>
                </ul>

                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>
        </header>
    );
}


export default Navbar;