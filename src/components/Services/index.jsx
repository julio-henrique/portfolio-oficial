import { BiCheck } from 'react-icons/bi'

import './styles.css'

export const Services = () => {
    return (
        <section id="services">
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Front-End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Criação de sites a partir do zero</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Otimização de sites</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Micro-Front Ends</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Design responsivo</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Melhorias de UI/UX</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Integrações com API's de terceiros</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Boas práticas de código com Typescript</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Conhecimento de Front-End como um todo</p>
                        </li>
                    </ul>
                </article>
                {/* END OF FRONT-END */}

                <article className="service">
                    <div className="service__head">
                        <h3>Back-End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Criação de server</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Restful API</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Desenvolvimento de API's</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Conhecimento de ferramentas como Swagger e Postman</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Integrações com API's de terceiros</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Conhecimento da area de Back-End</p>
                        </li>
                    </ul>
                </article>
                {/* END OF BACK-END */}

                <article className="service">
                    <div className="service__head">
                        <h3>Outros</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Conhecimento sobre Hardware</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Experiência com montagem e manutenção de computadores</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Algoritmos e Estrutura de Dados</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>GIT e GITHUB</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Netlify</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Fake API's, como o json-server e o MirageJS</p>
                        </li>
                    </ul>
                </article>
                {/* END OF BACK-END */}
            </div>
        </section>
    )
}
