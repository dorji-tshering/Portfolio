/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/Header.css';
import { FcMenu } from 'react-icons/fc';
import { RiHomeHeartFill } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { MdPersonPin, MdPermPhoneMsg } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink, Link } from 'react-router-dom';
import { SiPolymerproject } from 'react-icons/si';
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
                <Link to="/" className="dorji-tshering"><span className="dorji">D</span>|
                <span className="tshering">T</span></Link>
                
                { showLink ? <IoCloseSharp onClick={()=> setShowLink(!showLink)} className="main-menu close-icon"/> :                
                <FcMenu onClick={()=> setShowLink(!showLink)} className="main-menu" />         
            }
            </section>

            {showLink ? <section className="links">
            <NavLink to="/" exact onClick={() => resetLinks()} className="link home" 
            activeClassName="active">home <RiHomeHeartFill className="link-icon" size={10}/></NavLink>
            <NavLink to="/projects" onClick={() => resetLinks()} className="link projects" 
            activeClassName="active">projects <SiPolymerproject className="link-icon" size={10}/></NavLink>
            <NavLink to="/skill" onClick={() => resetLinks()} className="link skills" 
            activeClassName="active">skills <GiSkills className="link-icon" size={10}/></NavLink>
            <NavLink to="/about" onClick={() => resetLinks()} className="link about" 
            activeClassName="active">about <MdPersonPin className="link-icon" size={10}/></NavLink>
            <NavLink to="/contact" onClick={() => resetLinks()} className="link contact" 
            activeClassName="active">contact <MdPermPhoneMsg className="link-icon" size={10}/></NavLink>
            </section> : ''}
            </nav>
        </ClickOutHandler>
    );
}

export default Header;
