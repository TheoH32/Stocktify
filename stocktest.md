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
            stockHistory.innerHTML += `<div>User: ${userInput}</div>`;

            const controller = new AbortController();
            const signal = controller.signal;

            // Set a timeout to abort the fetch request
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

            try {
                const response = await fetch(`https://stocktify.stu.nighthawkcodingsociety.com/api/stockdata?symbol=${userInput}`, {
                    method: 'GET',
                    signal: signal,
                    mode: 'cors'
                });

                const jsonData = await response.json();

                // Parse and display the stock data
                parseStockData(jsonData);

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

        function parseStockData(jsonData) {
            const stockHistory = document.getElementById('stock-history');

            // Extract meta data
            const metaData = jsonData["Meta Data"];
            const symbol = metaData["2. Symbol"];
            const lastRefreshed = metaData["3. Last Refreshed"];

            stockHistory.innerHTML += `<div>Stock Symbol: ${symbol}</div>`;
            stockHistory.innerHTML += `<div>Last Refreshed: ${lastRefreshed}</div>`;

            // Extract time series data
            const timeSeries = jsonData["Time Series (Daily)"];
            for (const date in timeSeries) {
                const dailyData = timeSeries[date];
                const open = dailyData["1. open"];
                const high = dailyData["2. high"];
                const low = dailyData["3. low"];
                const close = dailyData["4. close"];
                const volume = dailyData["6. volume"];

                stockHistory.innerHTML += `<div>Date: ${date}</div>`;
                stockHistory.innerHTML += `<div>Open: ${open}</div>`;
                stockHistory.innerHTML += `<div>High: ${high}</div>`;
                stockHistory.innerHTML += `<div>Low: ${low}</div>`;
                stockHistory.innerHTML += `<div>Close: ${close}</div>`;
                stockHistory.innerHTML += `<div>Volume: ${volume}</div>`;
                stockHistory.innerHTML += `<hr>`; // Add a horizontal line for better separation
            }
        }
    });
</script>
