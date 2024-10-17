const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
]

document.getElementById('response').innerHTML = responses;

function myFunction() {
    responses.sort(() => Math.random() - 0.5);
    document.getElementById('response').innerHTML = responses[0];
    document.getElementById('response').style.fontSize = "18px";
    setTimeout(timeup, 4000);

    function timeup() { 
        document.getElementById('response').innerHTML = "8";
        document.getElementById('response').style.fontSize = "120px";
    }
}