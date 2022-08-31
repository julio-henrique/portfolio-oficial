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
            <div class="tooltip">
                <a
                    href="#"
                    onClick={() => setActiveNav('#')}
                    className={activeNav === '#' ? 'active' : ''}
                >
                    <span class="tooltiptext">Ínicio</span>
                    <AiOutlineHome />
                </a>
            </div>
            <div class="tooltip">
                <a
                    href="#about"
                    onClick={() => setActiveNav('#about')}
                    className={activeNav === '#about' ? 'active' : ''}
                >
                    <span class="tooltiptext">Sobre</span>
                    <AiOutlineUser />
                </a>
            </div>
            <div class="tooltip">
                <a
                    href="#experience"
                    onClick={() => setActiveNav('#experience')}
                    className={activeNav === '#experience' ? 'active' : ''}
                >
                    <BiBook />
                    <span class="tooltiptext">Experiência</span>
                </a>
            </div>
            <div class="tooltip">
                <a
                    href="#portfolio"
                    onClick={() => setActiveNav('#services')}
                    className={activeNav === '#services' ? 'active' : ''}
                >
                    <RiServiceLine />
                    <span class="tooltiptext">Portfolio</span>
                </a>
            </div>
            <div class="tooltip">
                <a
                    href="#contact"
                    onClick={() => setActiveNav('#contact')}
                    className={activeNav === '#contact' ? 'active' : ''}
                >
                    <span class="tooltiptext">Contate-me</span>
                    <BiMessageSquareDetail />
                </a>
            </div>
        </nav>
    )
}