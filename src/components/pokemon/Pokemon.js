import './styles/style.css';
import {pokemonData} from "../../pokemonData";

const Pokemon = (props) => {
    if (!props) {
        props = pokemonData;
    }

    return (
        <div className="pokemon">
            <img className={`pokemon__image ${props.isAnswered? "pokemon-show" : "pokemon-hide"}`} src={props.img}  alt="pokemon"/>
        </div>
    );
}
 
export default Pokemon;
