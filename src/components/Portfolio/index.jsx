import IMG1 from '../../assets/react-feed.png'
import IMG2 from '../../assets/quizzical.png'
import IMG3 from '../../assets/tenzies.png'
import IMG4 from '../../assets/meme-generator.png'
import IMG6 from '../../assets/campo-de-batalha.png'

import './styles.css'

const data = [
    {
        id: 3,
        image: IMG3,
        title: 'Tenzies',
        github: 'http://github.com/julio-henrique/tenzies',
        demo: 'https://julio-henrique-tenzies.netlify.app/'
    },
    {
        id: 1,
        image: IMG2,
        title: 'Quizzical',
        github: 'http://github.com/julio-henrique/quizzical',
        demo: 'https://julio-henrique-quizzical.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Meme generator',
        github: 'http://github.com/julio-henrique/meme-generator',
        demo: 'https://julio-henrique-meme-generator.netlify.app/'
    },
    {
        id: 5,
        image: IMG1,
        title: 'React feed',
        github: 'http://github.com/julio-henrique/react-feed',
        demo: 'https://julio-henrique-react-feed.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Batalha Naval JS',
        github: 'https://github.com/julio-henrique/batalha-naval-js',
        demo: 'https://julio-henrique.github.io/batalha-naval-js/'
    },
]

export const Portfolio = () => {
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
                                <a href={demo} className='btn btn-primary' target='_blank'>Demonstra????o</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
