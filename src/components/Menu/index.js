import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="menu"> 
            <a href="/">
                <img src={Logo} className="logo" alt="AnaFlix"/>
            </a>

            <Button href="/" className="buttonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;