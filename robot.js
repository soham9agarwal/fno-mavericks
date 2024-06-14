document.addEventListener('DOMContentLoaded', () => {
    const robot = document.getElementById('robot');

    const facts = [
        "Did you know? The stock market has been around for over 400 years!",
        "Fun fact: The New York Stock Exchange is the largest stock exchange in the world.",
        "Joke: Why did the stock market crash? Because it couldn't find its balance!",
        "Did you know? The first stock ever issued was by the Dutch East India Company in 1602.",
        "Fun fact: Warren Buffett bought his first stock at the age of 11!"
    ];

    let factIndex = 0;

    function showNextFact() {
        alert(facts[factIndex]);
        factIndex = (factIndex + 1) % facts.length;
    }

    robot.addEventListener('click', showNextFact);
});
