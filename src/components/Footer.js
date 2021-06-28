import React from 'react'
import '../styles/Footer.css';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright"><MdCopyright className="c-icon" /> 2021 by Dorji Tshering</p>
        </footer>
    )
}
export default Footer;
