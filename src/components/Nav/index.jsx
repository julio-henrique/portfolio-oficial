import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

import './styles.css'

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <div className="tooltip">
                <a
                    href="#"
                    onClick={() => setActiveNav('#')}
                    className={activeNav === '#' ? 'active' : ''}
                >
                    <span className="tooltiptext">Ínicio</span>
                    <AiOutlineHome />
                </a>
            </div>
            <div className="tooltip">
                <a
                    href="#about"
                    onClick={() => setActiveNav('#about')}
                    className={activeNav === '#about' ? 'active' : ''}
                >
                    <span className="tooltiptext">Sobre</span>
                    <AiOutlineUser />
                </a>
            </div>
            <div className="tooltip">
                <a
                    href="#experience"
                    onClick={() => setActiveNav('#experience')}
                    className={activeNav === '#experience' ? 'active' : ''}
                >
                    <BiBook />
                    <span className="tooltiptext">Experiência</span>
                </a>
            </div>
            <div className="tooltip">
                <a
                    href="#portfolio"
                    onClick={() => setActiveNav('#services')}
                    className={activeNav === '#services' ? 'active' : ''}
                >
                    <RiServiceLine />
                    <span className="tooltiptext">Portfolio</span>
                </a>
            </div>
            <div className="tooltip">
                <a
                    href="#contact"
                    onClick={() => setActiveNav('#contact')}
                    className={activeNav === '#contact' ? 'active' : ''}
                >
                    <span className="tooltiptext">Contate-me</span>
                    <BiMessageSquareDetail />
                </a>
            </div>
        </nav>
    )
}