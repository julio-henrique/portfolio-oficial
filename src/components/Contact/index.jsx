import { MdOutlineEmail } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import './styles.css'

export const Contact = () => {
    return (
        <section id='contact'>
            <h5>Entre em contato</h5>
            <h2>Como me encontrar</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>juliohjesus@gmail.com</h5>
                        <a href="mailto:dummyjulio@gmail.com" target='_blank'>Envie uma mensagem</a>
                    </article>
                    <article className="contact__option">
                        <RiLinkedinFill className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Julio-Henriquecs</h5>
                        <a href="https://www.linkedin.com/in/julio-henriquecs/" target='_blank'>Envie uma mensagem</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whats app</h4>
                        <h5>11 933785734</h5>
                        <a href="whatsapp" target='_blank'>Enviar uma mensagem</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}

                <form action="">
                    <input type="text" name='name' placeholder='Nome completo' required />
                    <input type="email" name='name' placeholder='Email' required />
                    <textarea rows='7' name='message' placeholder='Mensagem' required></textarea>
                    <button className='btn btn-primary'>Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}