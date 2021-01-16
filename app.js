const jokes = document.querySelector('.dadJoke');
const button = document.querySelector('.jokeBtn');

// Generate dad joke on page load
window.onload = function () {
    changeJoke();
};

// Change text inside of jokes to newJoke
const changeJoke = async () => {
    const newJoke = await getDadJoke();
    jokes.textContent = `"${newJoke}"`;
}

// Generate new dad joke
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "WE'RE OUT OF JOKES! SORRY :(";
    }
}

// Add eventListener on button
button.addEventListener('click', changeJoke); 