import { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from 'react-icons/fa';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import headerImg from "../../assets/header-img.svg";
import './styles.css'

export const HeaderTest = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Javascript", "React", "Front-End", "Full-Stack"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner container header__container" id="home">
            <div >
                <div className="aligh-items-center">
                    <div >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bem-vindo ao meu Portfolio</span>
                                    <h1>{`Oi! Eu sou o Júlio Desenvolvedor`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["React", "Front-End", "Full-Stack"]'><span className="wrap">{text}</span></span></h1>
                                    <p>
                                        Amante da area de tecnologia como um todo, fluente em inglês, com muita energia para aprender programação.
                                    </p>
                                    <p>
                                        Indico que olhe o meu portfolio e você vai se interessar em falar comigo, na parte de contato você encontra tudo o que precisa.
                                    </p>
                                    <p>Aproveite este incrível site (auto elogio = true)</p>
                                    <button><a href="#contact">Vamos conversar <FaArrowAltCircleRight size={25} /></a></button>
                                </div>}
                        </TrackVisibility>
                    </div>
                    <div xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        </section>
    )
}
