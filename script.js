const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;

    msg.innerHTML = `
        <div class="bubble">${text}</div>
    `;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function typingAnimation() {
    const typing = document.createElement("div");

    typing.className = "message bot";
    typing.id = "typing";

    typing.innerHTML = `
    <div class="bubble">
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    `;

    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {

    message = message.toLowerCase().trim();

    const responses = {
        "hello": "Hi! 👋",
        "hi": "Hello! 😊",
        "hey": "Hey there! 👋",
        "how are you": "I'm fine, thanks! 😊",
        "what is your name": "My name is BasicBot 🤖",
        "your name": "I am BasicBot 🤖",
        "bye": "Goodbye! 👋 Have a nice day!",
        "good morning": "Good Morning! ☀️",
        "good afternoon": "Good Afternoon! 😊",
        "good evening": "Good Evening! 🌙",
        "thanks": "You're welcome! 😊",
        "thank you": "Glad to help! ❤️",
        "who made you": "I was created using HTML, CSS and JavaScript.",
        "html": "HTML is used to create web pages.",
        "css": "CSS is used to style web pages.",
        "javascript": "JavaScript makes websites interactive.",
        "python": "Python is a popular programming language.",
        "java": "Java is widely used for software development.",
        "react": "React is a JavaScript library for building UIs.",
        "weather": "I cannot check live weather, but you can search online.",
        "time": "I cannot see your local time right now.",
        "help": "I can chat and answer basic questions."
    };

    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key];
        }
    }

    const randomReplies = [
        "That's interesting! 😊",
        "Tell me more about that.",
        "I understand.",
        "Can you explain a little more?",
        "Sounds good! 👍",
        "I'm still learning new things. 🤖",
        "That's a great question!",
        "Interesting point!",
        "Okay, I got it. 😊",
        "Could you tell me more?",
        "Thanks for sharing that.",
        "Let's talk more about it.",
        "I'm listening. 👂",
        "Nice! 😊",
        "That sounds great!"
    ];

    return randomReplies[Math.floor(Math.random() * randomReplies.length)];
}

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    input.value = "";

    typingAnimation();

    setTimeout(() => {

        const typing = document.getElementById("typing");
        if (typing) typing.remove();

        addMessage(botReply(text), "bot");

    }, 1000);
}
