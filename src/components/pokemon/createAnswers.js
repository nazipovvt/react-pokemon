import {dummyPokemons} from "../../dummyPokemons";

function makeAnswers(correctPokemonName) {
    const answersCount = 4;
    const answers = new Array(answersCount);
    
    for (let i = 0; i < answersCount - 1; i++) {
        let pokemonID;
        let pokemonExists = true;

        while (pokemonExists) {
            pokemonExists = false;
            pokemonID = Math.floor(Math.random()*dummyPokemons.length);

            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === dummyPokemons[pokemonID].name || dummyPokemons[pokemonID].name === correctPokemonName) {
                    pokemonExists = true;
                }
            }
        }

        answers[i] = {
            name: dummyPokemons[pokemonID].name,
            isCorrect: false
        };
    }

    answers[answersCount - 1] = {
        name: correctPokemonName,
        isCorrect: true
    }

    const correctPokemonIndex = Math.floor(Math.random()*(answersCount - 1));
    const tempVar = answers[correctPokemonIndex];
    answers[correctPokemonIndex] = answers[answersCount - 1];
    answers[answersCount - 1] = tempVar;

    return answers;
}

function createAnswers(context, setContext, score=0, questionNum=1) {
    const maxPokemonID = 1010;
    const minPokemonID = 1;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonID = Math.floor(Math.random() * (maxPokemonID - minPokemonID + 1) + minPokemonID);

    fetch(url + pokemonID + "/")
    .then(res => res.json())
    .then(
        (result) => {
            const answers = makeAnswers(result.name);

            setContext(() => ({
                    ...context,
                    correctAnswer: {
                        name: result.name,
                        img: result.sprites.other["official-artwork"].front_default
                    },
                    answers: answers,
                    isAnswered: false,
                    score: score,
                    questionNum: questionNum + 1
                })
            )
        },
        (error) => {
            return {}
        }
    )
}
 
export default createAnswers;
