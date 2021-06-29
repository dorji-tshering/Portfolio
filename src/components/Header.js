/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/Header.css';
import { FcMenu } from 'react-icons/fc';
import { RiHomeHeartFill } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { FaFacebookF }  from 'react-icons/fa';
import { GrTwitter, GrGithub, GrLinkedinOption } from 'react-icons/gr';
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
                <section>
                    <a href="https://www.facebook.com/profile.php?id=100015009334635" 
                        className="social-link"><FaFacebookF className="social-icon facebook" size={14}/></a>
                    <a href="https://twitter.com/DorjiY_Dear" 
                        className="social-link"><GrTwitter className="social-icon twitter" size={14}/></a>
                    <a href="https://www.linkedin.com/in/dorji-tshering-833919206/" 
                        className="social-link"><GrLinkedinOption className="social-icon linkedin" size={14}/></a>
                    <a href="https://github.com/dorji-tshering" 
                        className="social-link"><GrGithub className="social-icon github" size={14}/></a>
                </section>
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
