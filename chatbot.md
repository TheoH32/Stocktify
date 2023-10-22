---
layout: default
title: Chatbot
---

<div id="chat-container">
    <div id="chat-history"></div>
    <input type="text" id="user-input" placeholder="Type your message...">
    <button id="send-button">Send</button>
</div>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('send-button').addEventListener('click', sendMessage);

        async function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            const chatHistory = document.getElementById('chat-history');

            // Display user's message
            chatHistory.innerHTML += `<div>User: ${userInput}</div>`;

            const controller = new AbortController();
            const signal = controller.signal;

            // Set a timeout to abort the fetch request
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

            try {
                const response = await fetch('https://stocktifybot.vercel.app/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ aigf: userInput }),
                    signal: signal,
                    mode: 'cors' // Add this line to enable CORS
                });

                //const data = await response.json();

                // Display Chatbot's response
                //chatHistory.innerHTML += `<div>Bot: ${data.result}</div>`;
                const responseText = await response.text();
                console.log(responseText);

            } catch (error) {
                if (error.name === 'AbortError') {
                    chatHistory.innerHTML += `<div>Error: Request timed out</div>`;
                } else {
                    chatHistory.innerHTML += `<div>Error: ${error.message}</div>`;
                }
            } finally {
                clearTimeout(timeoutId);
            }
        }
    });
</script>
