import './styles/style.css';
import {useContext} from "react";
import {Context} from "../../Context";

const Choices = () => {
    const [context, setContext] = useContext(Context);

    function handleCorrectAnswer(isCorrect) {
        if (!context.isAnswered) {
            let newScore = context.score;
    
            if (isCorrect) {
                newScore = newScore + 1;
            }
    
            setContext(() => ({...context, isAnswered: true, score: newScore}));
        }
    }

    return (
        <div className="choices">
            {context.answers.map((pokemon, i) => {
                return (
                <button key={i} className={`choices__choice-button submit-button ${context.isAnswered && pokemon.isCorrect ? "button-correct" : ""}`}
                        onClick={() => handleCorrectAnswer(pokemon.isCorrect)}>
                    {!context.isAnswered && context.easyMode && !pokemon.isCorrect ? "..." : pokemon.name}
                </button>);
            })}
        </div>
    );
}
 
export default Choices;
