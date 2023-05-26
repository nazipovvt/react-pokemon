import "./styles/style.css";

import FactItem from "./FactItem";

const Facts = () => {    
    return (
        <section id="factsSection" className="facts">
            <h2 className="facts__title">Some facts about the PoKéMoN universe</h2>
            <FactItem />
        </section>
    );
}
 
export default Facts;
