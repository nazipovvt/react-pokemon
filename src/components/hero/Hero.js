import "./styles/style.css";

import logo from "./images/logo.png";

import {Context} from "../../Context";
import {useContext} from "react";
import EasyMode from "../game/EasyMode";
import { heroButtons } from "../../heroButtons";
import createAnswers from "../pokemon/createAnswers";

const Hero = () => {
    const [context, setContext] = useContext(Context);

    function startNewGame() {
        setContext(() => ({
            ...context,
            isAnswered: false,
            score: 0,
            questionNum: 1,
            questions: 5,
        }));
        createAnswers(context, setContext);
    }
    
    return (
        <section className="hero">
            <div className="hero__intro">
                <img className="hero__logo" src={logo} alt="logo" />
                <p className="hero__subtitle">
                    Try to recognize all the <span className="hero__subtitle-postscript">PoKéMoNs</span>!
                </p>
                <div className="hero__input-section">
                    <h5 className="hero__input-title">How many <span className="hero__pokemon">PoKéMoNs</span> would you like to guess?</h5>
                    <input className="hero__input"
                        value={context.questions}
                        onChange={e => {setContext({...context, questions:Number(e.target.value)})}}
                        placeholder={context.questions}
                    />
                </div>
                <EasyMode />
                <div className="heroButtons">
                    {heroButtons.map((button, i) => {
                        return <a href={button.link} className="hero__button submit-button" key={i}>{button.title}</a>
                    })}
                    <a href="#gameSection" className="hero__button submit-button" onClick={startNewGame}>Try it out!</a>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;
