/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import Font from 'react-font';

const ClickOutHandler = require('react-onclickout');

const Header = () => {
    const [showLink, setShowLink] = useState(false);

    const onClickOut = () => {
        if(showLink){
            setShowLink(!showLink);
        }
    }

    const resetLinks = () => {
        setShowLink(false);
    }

    return (
        <ClickOutHandler onClickOut={() => onClickOut()}>
            <nav>
            <section className="navbar">
                <Font family="Delius Swash Caps">
                    <Link to="/" className="dorji-tshering" onClick={() => resetLinks()}>
                        <span>D</span>
                        <span>O</span>
                        <span>R</span>
                        <span>J</span>
                        <span>I</span>
                        -
                        <span>T</span>
                        <span>S</span>
                        <span>H</span>
                        <span>E</span>
                        <span>R</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </Link>
                </Font>
                { showLink ? <AiOutlineClose onClick={()=> setShowLink(!showLink)} className="menu-icon close-icon"/> :                
                <GiHamburgerMenu onClick={()=> setShowLink(!showLink)} className="menu-icon open-icon"/>         
            }
            </section>

            {showLink ? 
                <Font family="Yellowtail">
                <section className="links">
                    <NavLink to="/" exact onClick={() => resetLinks()} className="link home" 
                        activeClassName="active">home
                    </NavLink>
                    <NavLink to="/projects" onClick={() => resetLinks()} className="link projects" 
                        activeClassName="active">projects 
                    </NavLink>
                    <NavLink to="/skill" onClick={() => resetLinks()} className="link skills" 
                        activeClassName="active">skills 
                    </NavLink>
                    <NavLink to="/about" onClick={() => resetLinks()} className="link about" 
                        activeClassName="active">about
                    </NavLink>
                    <NavLink to="/contact" onClick={() => resetLinks()} className="link contact" 
                        activeClassName="active">contact 
                    </NavLink>
                    <NavLink to="/curriculum-vitae" onClick={() => resetLinks()} className="link resume"
                        activeClassName="active">resume                        
                    </NavLink>
                </section> 
                </Font> : ''}
            </nav>
        </ClickOutHandler>
    );
}

export default Header;
