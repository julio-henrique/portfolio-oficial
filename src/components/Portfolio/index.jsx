import { useEffect } from 'react'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import './styles.css'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Dashboard',
        github: 'http://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
]

/**
 * 13: {id: 531202676, node_id: 'R_kgDOH6mCdA', name: 'portfolio-oficial', full_name: 'julio-henrique/portfolio-oficial', private: false, …}
 * 15: {id: 482846800, node_id: 'R_kgDOHMeoUA', name: 'quizzical', full_name: 'julio-henrique/quizzical', private: false, …}
 * 17: {id: 422768893, node_id: 'R_kgDOGTLw_Q', name: 'respondeai', full_name: 'julio-henrique/respondeai', private: false, …}
 * 18: {id: 479164819, node_id: 'R_kgDOHI95kw', name: 'tenzies', full_name: 'julio-henrique/tenzies', private: false, …}
 * 5: {id: 413453486, node_id: 'R_kgDOGKTMrg', name: 'desafio-02-trilha-reactjs', full_name: 'julio-henrique/desafio-02-trilha-reactjs', private: false, …}
 * 16: {id: 530234917, node_id: 'R_kgDOH5q-JQ', name: 'react-feed', full_name: 'julio-henrique/react-feed', private: false, …}
 */

export const Portfolio = () => {
    useEffect(() => {
        fetch('https://api.github.com/users/julio-henrique/repos')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (
        <section id='portfolio'>
            <h5>Meus melhores trabalhos</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Demonstração</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
