import {facts} from "../../facts";

function createFacts(setFacts) {
    const limit = 3;
    const offset = 0;
    const url = `https://localhost:7132/api/Fact/?limit=${limit}&offset=${offset}`;

    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            if (result.length === 0) return;

            const resultFacts = [];

            for (let i = 0; i < result.length; i++)
            {
                const fact = {
                    title: result[i].title,
                    text: result[i].text
                }

                resultFacts.push(fact)
            }
            
            setFacts(() => ({
                factsCount: resultFacts.length,
                facts: resultFacts
            }));
        },
        (error) => {
            setFacts(() => (facts));
        }
    )
}
 
export default createFacts;
