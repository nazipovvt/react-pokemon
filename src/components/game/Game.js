import './styles/style.css';

import Pokemon from "../pokemon/Pokemon";
import {useState, useContext, useEffect} from "react";
import createAnswers from "../pokemon/createAnswers";
import Choices from "../choices/Choices";
import {Context} from "../../Context";
import Score from "../score/Score";

const Game = () => {
    const [context, setContext] = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        createAnswers(context, setContext, context.score, context.questionNum);
    }, []);

    const getPokemon = () => {
        if (context.isAnswered && context.questionNum < context.questions) {
            createAnswers(context, setContext, context.score, context.questionNum);
        }
        else if (context.isAnswered && context.questionNum >= context.questions) {
            setIsOpen(true);
        }
    }

    return (
        <>
            <section id="gameSection" className="game">
                <div className="game__half left_half">
                    <div className="game__flash"></div>
                    <Pokemon name={context.correctAnswer.name} img={context.correctAnswer.img} isAnswered={context.isAnswered}/>
                </div>
                <div className="game__half right_half">
                    <div className="game__pokemon-name-section">
                        <h5 className="game__pokemon-name">
                            It's <span className="game_pokemon">{context.isAnswered ? `${context.correctAnswer.name}!` : "???"}</span>
                        </h5>
                    </div>
                    <div className="game__choices-section">
                        <Choices />
                        <button className="game__next-pokemon submit-button" onClick={getPokemon}>
                            {context.questionNum <= context.questions ? "Next pokemon!" : "Finish!"}
                        </button>
                    </div>
                </div>
            </section>
            {isOpen && <Score closeWindow={() => {setIsOpen(false)}} />}
        </>
    );
}
 
export default Game;
