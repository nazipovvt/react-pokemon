import "./styles/style.css";

import arrowLeftIcon from "./images/svg/arrowLeft.svg";
import arrowRightIcon from "./images/svg/arrowRight.svg";

import {useState, useEffect} from "react";
import {facts} from "../../facts";
import createFacts from "./createFacts";

const FactItem = () => {
    const [currentFacts, setFacts] = useState(facts);

    useEffect(() => {
        createFacts(setFacts);
    }, []);

    const [factIndex, setIndex] = useState(0);
    const [currentFactsSlider, setSlider] = useState([]);

    useEffect(() => {
        const factsSlider = new Array(currentFacts.factsCount);
        let factID;
        
        for (let i = 0; i < currentFacts.factsCount; i++) {
            let factExists = true;

            while (factExists) {
                factExists = false;
                factID = Math.floor(Math.random()*currentFacts.factsCount);
    
                for (let j = 0; j < factsSlider.length; j++) {
                    if (factsSlider[j] === currentFacts.facts[factID]) {
                        factExists = true;
                    }
                }
            }

            factsSlider[i] = currentFacts.facts[factID];
        }

        setSlider(factsSlider);
    }, [currentFacts]);

    const prevFact = () => {
        const isFirstItem = factIndex === 0;
        const newIndex = isFirstItem ? currentFacts.factsCount - 1 : factIndex - 1;

        setIndex(newIndex);
    }
    const nextFact = () => {
        const isLastItem = factIndex === currentFacts.factsCount - 1;
        const newIndex = isLastItem ? 0 : factIndex + 1;
        
        setIndex(newIndex);
    };
    
    return (
        <article className="facts__card">
            <button className="facts__arrow_button arrow_left" onClick={prevFact}>
                <img src={arrowLeftIcon} alt=""></img>
            </button>
            <div className="facts__card_section" style={{ transform: `translateX(-${factIndex * 100}%)` }}>
                {currentFactsSlider.map((fact, i) => (
                    <div className="facts__card_content" key={i}>
                        <h2 className="facts__card-title">"{fact.title}"</h2>
                        <p className="facts__card-text">{fact.text}</p>
                    </div>
                ))}
            </div>
            <button className="facts__arrow_button arrow_right" onClick={nextFact}>
                <img src={arrowRightIcon} alt=""></img>
            </button>
        </article>
    );
}
 
export default FactItem;
