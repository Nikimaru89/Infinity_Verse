import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

import { getImg, useResize } from "../../utils/Helper";
import styles from './Header.module.scss';

const Header = () => {

    const { isMobile } = useResize()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className={styles.div}>
                <NavLink to="/"><img src={getImg('logo.png')} alt="logo" /></NavLink>
                <div>
                    <NavLink to="/" activeClassName="active">EVOLVE</NavLink>
                    <NavLink to="/" activeClassName="active">HATCH</NavLink>
                    <NavLink to="/" activeClassName="active">MY DRAKES</NavLink>
                    <NavLink to="/" activeClassName="active">HOME</NavLink>
                    <NavLink to="/"><img src={getImg('twitter.png')} alt="twitter" /></NavLink>
                    <NavLink to="/"><img src={getImg('discord.png')} alt="discord" /></NavLink>
                </div>
            </div>
            {isOpen && <div className={styles.menu}>
                <div>
                    <div>Disconnect</div>
                </div>
            </div>}
        </header>
    )
}

export default Header