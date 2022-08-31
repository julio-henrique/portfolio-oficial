import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import './styles.css'

export const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>JÚLIO HENRIQUE</a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/julio-henriquecs/"><FaLinkedin /></a>
                <a href="https://github.com/julio-henrique"><FaGithub /></a>
                <a href="https://twitter.com/JulioHenriqueCS"><FaTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Júlio Software. All rights reserved.</small>
            </div>
        </footer>
    )
}