import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import here from '../../assets/header-img.svg'
import './styles.css'

export const About = () => {
    return (
        <section id='about'>
            <h5>Conheça um pouco</h5>
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={here} alt="Another photo" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experiência</h5>
                            <small>2+ Anos</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Bilingue</h5>
                            <small>pt-br</small><br />
                            <small>en-us</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projetos</h5>
                            <small>13+ Completos</small>
                        </article>
                    </div>

                    <p>
                        Comprometido com o meu crescimento sou focado em desenvolvimento Fron-End, tendo grande experiência com React e seu universo.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
                </div>
            </div>
        </section>
    )
}