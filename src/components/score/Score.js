import './styles/style.css';

import {useContext} from "react";
import {Context} from "../../Context";
import {scores} from "./scores";
import createAnswers from "../pokemon/createAnswers";

const Score = (props) => {
    const [context, SetContext] = useContext(Context);

    function getScore(score, questions) {
        const rating = (score / questions) * 100;

        for (let i = 0; i < scores.length; i++) {
            if (rating >= scores[i].score) {
                return scores[i].text;
            }
        }
    }

    function restart(context, SetContext) {
        createAnswers(context, SetContext);
        props.closeWindow();
    }

    return (
        <>
            <div className="popup-window-wrapper" onClick={() => {restart(context, SetContext)}}></div>
            <div className="popup-window">
                <h4 className="popup-window__score-text">{getScore(context.score, context.questions)}</h4>
                <p className="popup-window__stats">You scored {context.score} out of {context.questions}</p>
                <button className="popup-window__restart submit-button" onClick={() => {restart(context, SetContext)}}>
                    Restart!
                </button>
            </div>
        </>
    );
}
 
export default Score;
