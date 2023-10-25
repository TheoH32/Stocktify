---
layout: post
title: Stocktest
---

<div id="stock-container">
    <div id="stock-history"></div>
    <input type="text" id="user-input" placeholder="Type your stock symbol (e.g., TSLA)">
    <button id="send-button">Get Stock Data</button>
</div>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('send-button').addEventListener('click', getStockData);
        
        function removeSpecialCharsAtStart(str) {
           return str.replace(/^[^a-zA-Z]+/, '');
        }

        async function getStockData() {
            const userInput = document.getElementById('user-input').value.trim().toUpperCase();
            const stockHistory = document.getElementById('stock-history');

            // Display user's input
            stockHistory.innerHTML += `<div>User: ${userInput}</div>`;

            const controller = new AbortController();
            const signal = controller.signal;

            // Set a timeout to abort the fetch request
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

            try {
                const response = await fetch(`https://stocktify.stu.nighthawkcodingsociety.com/api/stockdata?symbol=${userInput}`, {
                    method: 'GET',
                    signal: signal,
                    mode: 'cors' // Add this line to enable CORS
                });

                const data = await response.json();

                if (data && data.name) {
                    // Display stock data
                    stockHistory.innerHTML += `<div>Bot: ${data.name} (${data.symbol}) is currently priced at $${data.price}.</div>`;
                } else {
                    stockHistory.innerHTML += `<div>Bot: Sorry, I couldn't find data for the symbol "${userInput}".</div>`;
                }

            } catch (error) {
                if (error.name === 'AbortError') {
                    stockHistory.innerHTML += `<div>Error: Request timed out</div>`;
                } else {
                    stockHistory.innerHTML += `<div>Error: ${error.message}</div>`;
                }
            } finally {
                clearTimeout(timeoutId);
            }
        }
    });
</script>
