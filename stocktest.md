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

        async function getStockData() {
            const userInput = document.getElementById('user-input').value.trim().toUpperCase();
            const stockHistory = document.getElementById('stock-history');

            // Display user's input
            stockHistory.innerHTML += `<div>Symbol: ${userInput}</div>`;

            try {
                const response = await fetch(`https://stocktify.stu.nighthawkcodingsociety.com/api/stockdata?symbol=${userInput}`, {
                    method: 'GET',
                    mode: 'cors' // Add this line to enable CORS
                });

                const jsonData = await response.json();

                // Extract meta data
                const metaData = jsonData["Meta Data"];
                const lastRefreshed = metaData["3. Last Refreshed"];
                const dailyData = jsonData["Time Series (Daily)"][lastRefreshed];

                stockHistory.innerHTML += `<div>Last Refreshed: ${lastRefreshed}</div>`;
                stockHistory.innerHTML += `<div>Open: ${dailyData["1. open"]}</div>`;
                stockHistory.innerHTML += `<div>High: ${dailyData["2. high"]}</div>`;
                stockHistory.innerHTML += `<div>Low: ${dailyData["3. low"]}</div>`;
                stockHistory.innerHTML += `<div>Close: ${dailyData["4. close"]}</div>`;
                stockHistory.innerHTML += `<div>Volume: ${dailyData["6. volume"]}</div>`;

            } catch (error) {
                stockHistory.innerHTML += `<div>Error: ${error.message}</div>`;
            }
        }
    });
</script>
