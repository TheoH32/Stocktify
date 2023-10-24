---
layout: post
search_exclude: true
---


<style>
    .normal {
        background-color: #121212 !important;
        color: white !important;
    }
    .lightmode {
        background-color: #F6FFF5 !important;
        color: black !important;
    }
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        /*font-family: 'Big Shoulders Display', cursive;
        font-family: 'Lexend Deca', sans-serif;*/
    }
    body {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .box:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Change the background color on hover */
        transform: scale(1.05); /* Increase the scale slightly on hover */
        transition: 0.15s; /* Add transition effect */
    }
    .box-container {
        width: 100%;
        max-width: 1440px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
        cursor: pointer;
    }
    .box {
        padding: 15px;
        min-height: 430px;
        transition: background-color 0.3s;
        filter: grayscale(35%); /* Apply a full grayscale effect to the images */
        flex: 1; /* Allow the boxes to grow and shrink to fit the available space equally */
    }
    .box1 {
        background: url("https://raw.githubusercontent.com/TheoH32/Stocktify/main/images/stock1.jpeg") no-repeat center center;
        background-size: cover;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .box2 {
        background: url("https://raw.githubusercontent.com/TheoH32/Stocktify/main/images/stock4.jpg") no-repeat center center;
        background-size: cover;
    }
    .box3 {
        background: url("https://raw.githubusercontent.com/TheoH32/Stocktify/main/images/stock11.avif") no-repeat center center;
        background-size: cover;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .content {
        padding: 10px;
        cursor: pointer;
    }
    h1 {
        color: hsl(0, 0%, 95%);
        text-transform: uppercase;
        font-family: 'Lexend Deca', sans-serif;
        margin: 20px 0;
        font-size: 70px;
    }
    p {
        color: white;
        font-family: 'Lexend Deca', sans-serif;
    }
    .btn {
        display: none;
    }
    .box:hover {
        background-color: transparent;
    }
    .page-content {
        width: 100%;
    }
    .wrapper {
        max-width: 100%;
    }
</style>

<body id="body" class="normal" onclick="swapp()">
    <script>
        swapp();
        function swapp() {
            ld = localStorage.getItem("storageName");
            if (ld % 2 == 0) {
                document.getElementById('body').className = "normal";
            } else {
                document.getElementById('body').className = "lightmode";
            }
        }
    </script>
    <div class="box-container">
        <div class="box box1">
            <div class="content">
                <h1>S&P 500</h1>
                <p>The S&P 500 is a prominent U.S. stock market index consisting of 500 leading publicly traded companies, often used as a key indicator of the overall health and performance of the U.S. economy.</p>
            </div>
        </div>
        <div class="box box2">
            <div class="content">
                <h1>NASDAQ</h1>
                <p>NASDAQ is a tech-focused U.S. stock exchange, home to giants like Apple and Amazon, known for its electronic trading innovations.</p>
            </div>
        </div>
        <div href="/dowjones.md" class="box box3">
            <div class="content">
                <h1>DOW JONES</h1>
                <p>Dow Jones is a renowned U.S. stock market index, featuring leading companies, and is often used as a benchmark for the broader economic landscape.</p>
            </div>
        </div>
    </div>
    <div>
        <title>Stock Data</title>
        <body>
            <h1>Microsoft (MSFT) Stock Data</h1>
            <div id="stock-data"></div>
            <script>
        // Function to fetch and display stock data from the API
        async function fetchStockData() {
            try {
                const response = await fetch('https://stocktify.stu.nighthawkcodingsociety.com/api/stockdata');
                const data = await response.json();
                // Extract the daily time series
                const timeSeries = data['Time Series (Daily)'];
                // Create a table to display the data
                const table = document.createElement('table');
                table.innerHTML = `
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Adjusted Close</th>
                        <th>Volume</th>
                        <th>Dividend Amount</th>
                        <th>Split Coefficient</th>
                    </tr>
                `;
                for (const date in timeSeries) {
                    const rowData = timeSeries[date];
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${date}</td>
                        <td>${rowData['1. open']}</td>
                        <td>${rowData['2. high']}</td>
                        <td>${rowData['3. low']}</td>
                        <td>${rowData['4. close']}</td>
                        <td>${rowData['5. adjusted close']}</td>
                        <td>${rowData['6. volume']}</td>
                        <td>${rowData['7. dividend amount']}</td>
                        <td>${rowData['8. split coefficient']}</td>
                    `;

                    table.appendChild(row);
                }
                // Add the table to the stock-data div
                document.getElementById('stock-data').appendChild(table);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        }
        // Call the function to fetch and display the data
        fetchStockData();
    </script>
        </body>
    </div>

