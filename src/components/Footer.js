import React from 'react'
import '../styles/Footer.css';
import { MdCopyright } from 'react-icons/md';
import { FaFacebookF }  from 'react-icons/fa';
import { GrTwitter, GrGithub, GrLinkedinOption } from 'react-icons/gr';


const Footer = () => {
    return (
        <footer className="footer">
		<section className="social-links">
			<a href="https://www.facebook.com/profile.php?id=100015009334635" 
			className="social-link"><FaFacebookF className="social-icon facebook" size={14}/></a>
			<a href="https://twitter.com/DorjiY_Dear" 
			className="social-link"><GrTwitter className="social-icon twitter" size={14}/></a>
			<a href="https://www.linkedin.com/in/dorji-tshering-833919206/" 
			className="social-link"><GrLinkedinOption className="social-icon linkedin" size={14}/></a>
			<a href="https://github.com/dorji-tshering" 
			className="social-link"><GrGithub className="social-icon github" size={14}/></a>
		</section>
            	<p className="copyright"><MdCopyright className="c-icon" /> 2021 by Dorji Tshering</p>
        </footer>
    )
}
export default Footer;
