import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="menu"> 
            <Link to="/">
                <img src={Logo} className="logo" alt="AnaFlix"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="buttonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;