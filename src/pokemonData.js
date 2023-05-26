import {dummyPokemons} from "./dummyPokemons";

const pokemonData = {
    correctAnswer: {
        name: "compound-eyes",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    },
    answers: [
        {
            name: "compound-eyes",
            isCorrect: true
        },
        {
            name: dummyPokemons[0].name,
            isCorrect: false
        },
        {
            name: dummyPokemons[1].name,
            isCorrect: false
        },
        {
            name: dummyPokemons[2].name,
            isCorrect: false
        }
    ],
    isAnswered: false,
    score: 0,
    questionNum: 1,
    questions: 5,
    easyMode: false
};

export {pokemonData};
