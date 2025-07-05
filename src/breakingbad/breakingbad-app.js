
/**
 * 
 * @returns {Promise<Object>} quote info.
 */
const fetchCharacter = async() => {
    const num = Math.floor(Math.random() * 900) + 1;
    const res = await fetch(`https://anapioficeandfire.com/api/characters/${num}`);
    const data = await res.json();

    console.log(data);
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Ice And Fire';
    element.innerHTML = 'Loading...';

    //await fetchCharacter();

    const characterLabel = document.createElement('blockquote');
    const genderLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Character'

    const renderCharacter = ( data ) => {
        characterLabel.innerHTML = data.name;
        genderLabel.innerHTML = data.gender;
        element.replaceChildren( characterLabel, genderLabel, nextQuoteButton );
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...'        
        const quote = await fetchCharacter()
        renderCharacter( quote );
    });

    fetchCharacter()
        .then ( renderCharacter );

}