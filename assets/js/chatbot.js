async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatHistory = document.getElementById('chat-history');

    // Display user's message
    chatHistory.innerHTML += `<div>User: ${userInput}</div>`;

    // Get response from your API
    const response = await fetch('https://stocktifybot.vercel.app/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ aigf: userInput })
    });

    const data = await response.json();

    // Display Chatbot's response
    chatHistory.innerHTML += `<div>Bot: ${data.result}</div>`;
}
