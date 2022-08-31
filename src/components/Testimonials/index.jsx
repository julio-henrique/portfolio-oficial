import AVTR1 from '../../assets/avatar6.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar5.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import './styles.css'

// Import Swiper required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
    {
        avatar: AVTR1,
        name: 'Vovó',
        review: 'O Júlio é um menino muito bonzinho que sempre me ajuda com esses negocio de computador, menino grande e muito bonito'
    },
    {
        avatar: AVTR2,
        name: 'Melhor amigo',
        review: 'Po o Júlio é fera, sabe como atualizar drivers, fazer melhorias no PC e até como criar sites incríveis. O mlk vai longe hahaha'
    },
    {
        avatar: AVTR3,
        name: 'Grande professor',
        review: 'Este garoto promete, apesar de fazer as coisas do seu próprio jeito ele mostra dedicação nos estudos e sempre está com novas ideias incríveis, mas tem que fazer a lição de casa garoto.'
    },
    {
        avatar: AVTR4,
        name: 'Melhor Tia',
        review: 'Ah o julinho é muito bom viu? Eu sempre que peço ajuda, ele resolve as coisas bem fácil. Ele também sabe falar inglês, olha que chique haha. Mas ele precisa me visitar mais :D'
    },
]

export const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Pessoas que me conhecem </h5>
            <h2>Recomendações</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={index}>
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}