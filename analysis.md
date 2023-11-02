---
layout: post
search_exclude: false
---
<script>
    // Update Tab 1 with stock data
    function updateStockDataDisplay(data) {
        const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
        const dailyData = data["Time Series (Daily)"][lastRefreshed];
        const volume = dailyData["6. volume"];
        const price = dailyData["1. open"];
        document.getElementById('stockData').textContent = \`Date: \${lastRefreshed}, Volume: \${volume}, Price: \${price}\ `;
    }

    // Update chart based on slider values
    function updateChart() {
        const volume = document.getElementById('volumeSlider').value;
        const percentage = document.getElementById('percentageSlider').value;
        document.getElementById('volumeValue').textContent = volume;
        document.getElementById('percentageValue').textContent = percentage;
        // Add code to update your chart based on these values
    }

    // Convert JSON data to table and display in Tab 3
    function jsonToTable(data) {
        const table = document.getElementById('jsonTable');
        
        // Clear existing table content
        table.innerHTML = '';

        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');
        
        // Check if the expected data structure exists
        if (data["Time Series (Daily)"]) {
            Object.keys(data["Time Series (Daily)"][Object.keys(data["Time Series (Daily)"])[0]]).forEach(key => {
                const th = document.createElement('th');
                th.textContent = key;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            Object.keys(data["Time Series (Daily)"]).forEach(date => {
                const tr = document.createElement('tr');
                Object.values(data["Time Series (Daily)"][date]).forEach(value => {
                    const td = document.createElement('td');
                    td.textContent = value;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
        } else {
            console.error("Data structure does not match expected format.");
        }
    }


    // Modify the existing getStockData function to call the above functions
</script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
    .normal{
        background-color: #121212 !important;
        color: white !important:
    }
    .lightmode {
        background-color: #F6FFF5 !important;
        color: black !important;
    }
    .tabs-section {
        font-family: Arial, sans-serif;
    }

    .tabs {
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }

    .tab {
        background-color: #f1f1f1;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
    }

    .tab:hover {
        background-color: #ddd;
    }

    .tab-content {
        display: none;
        padding: 15px;
        border-top: none;
    }

</style>
<style>
        /* Add styles for the new elements as needed */
        #jsonTable {
            width: 100%;
            border-collapse: collapse;
        }

        #jsonTable th, #jsonTable td {
            border: 1px solid #ddd;
            padding: 8px;
        }
</style>

<body id="body" class="normal" onclick= "swapp()">
<script>
    swapp()
    function swapp(){
        ld =  localStorage.getItem("storageName");
        if(ld%2==0){
            document.getElementById('body').className = "normal";
            console.log("helo");
        }
        else{
            document.getElementById('body').className = "lightmode";
            console.log("heldo");
        }
    }
</script>
<script>
    function showTab(tabId) { 
        var i, tabcontent, tabbuttons;

        // Get all elements with class="tab-content" and hide them
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tab" and remove the class "active"
        tabbuttons = document.getElementsByClassName("tab");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabId).style.display = "block";
        event.currentTarget.className += " active";
    }
</script>
<script>
    class App {
        constructor() {}

        static main() {
            const app = new App();
            app.trainAndPredict(28, -12);
        }

        makeAPrediction(num1, num2) {
            const app = new App();
            return app.trainAndPredict(num1, num2);
        }

        strongerPrediction(input1, input2) {
            const network = new App();
            const list = [];
            for (let i = 0; i <= 10; i++) {
                list.push(network.makeAPrediction(input1, input2));
            }
            const top3 = list.sort((a, b) => b - a).slice(0, 3);
            const averageOfTop3 = top3.reduce((acc, val) => acc + val, 0) / top3.length;
            return averageOfTop3;
        }

        trainAndPredict(num1, num2) {
            const data = [
                [5000000, 150], // volume, price
                [4500000, 120],
                [5000, 20],
                [6000, 15]
            ];
            const answers = [0.9, 0.8, 0.3, 0.2];

            const network500 = new Network(500);
            network500.train(data, answers);

            const network1000 = new Network(1000);
            network1000.train(data, answers);

            const prediction = network500.predict(num1, num2);
            return prediction;
        }
    }

    class Network {
        constructor(epochs, learnFactor = null) {
            this.epochs = epochs;
            this.learnFactor = learnFactor;
            this.neurons = Array(6).fill().map(() => new Neuron());
        }

        predict(input1, input2) {
            return this.neurons[5].compute(
                this.neurons[4].compute(
                    this.neurons[2].compute(input1, input2),
                    this.neurons[1].compute(input1, input2)
                ),
                this.neurons[3].compute(
                    this.neurons[1].compute(input1, input2),
                    this.neurons[0].compute(input1, input2)
                )
            );
        }

        train(data, answers) {
            let bestEpochLoss = null;
            for (let epoch = 0; epoch < this.epochs; epoch++) {
                const epochNeuron = this.neurons[epoch % 6];
                epochNeuron.mutate(this.learnFactor);

                const predictions = data.map(d => this.predict(d[0], d[1]));
                const thisEpochLoss = Util.meanSquareLoss(answers, predictions);

                if (bestEpochLoss === null) {
                    bestEpochLoss = thisEpochLoss;
                    epochNeuron.remember();
                } else {
                    if (thisEpochLoss < bestEpochLoss) {
                        bestEpochLoss = thisEpochLoss;
                        epochNeuron.remember();
                    } else {
                        epochNeuron.forget();
                    }
                }
            }
        }
    }

    class Neuron {
        constructor() {
            this.random = Math.random;
            this.oldBias = this.random() * 2 - 1;
            this.bias = this.random() * 2 - 1;
            this.oldWeight1 = this.random() * 2 - 1;
            this.weight1 = this.random() * 2 - 1;
            this.oldWeight2 = this.random() * 2 - 1;
            this.weight2 = this.random() * 2 - 1;
        }

        mutate(learnFactor) {
            const changeFactor = learnFactor ? learnFactor * (this.random() * 2 - 1) : this.random() * 2 - 1;
            const propertyToChange = Math.floor(this.random() * 3);
            if (propertyToChange === 0) {
                this.bias += changeFactor;
            } else if (propertyToChange === 1) {
                this.weight1 += changeFactor;
            } else {
                this.weight2 += changeFactor;
            }
        }

        forget() {
            this.bias = this.oldBias;
            this.weight1 = this.oldWeight1;
            this.weight2 = this.oldWeight2;
        }

        remember() {
            this.oldBias = this.bias;
            this.oldWeight1 = this.weight1;
            this.oldWeight2 = this.weight2;
        }

        compute(input1, input2) {
            const preActivation = (this.weight1 * input1) + (this.weight2 * input2) + this.bias;
            const output = Util.sigmoid(preActivation);
            return output;
        }
    }

    class Util {
        static sigmoid(inVal) {
            return 1 / (1 + Math.exp(-inVal));
        }

        static meanSquareLoss(correctAnswers, predictedAnswers) {
            const sumSquare = correctAnswers.reduce((acc, val, idx) => {
                const error = val - predictedAnswers[idx];
                return acc + (error * error);
            }, 0);
            return sumSquare / correctAnswers.length;
        }
    }

    function executePrediction() {
        const num1 = parseInt(document.getElementById('num1').value, 10);
        const num2 = parseInt(document.getElementById('num2').value, 10);

        const app = new App();
        const result = app.trainAndPredict(num1, num2);

        document.getElementById('output').textContent = `Prediction Result: ${result}`;
    }
    function executePrediction() {
        const num1 = parseInt(document.getElementById('num1').value, 10);
        const num2 = parseInt(document.getElementById('num2').value, 10);

        const app = new App();
        const predictions = [];
        for (let i = 0; i < 10; i++) {
            predictions.push(app.trainAndPredict(num1, num2));
        }
        const top3 = predictions.sort((a, b) => b - a).slice(0, 3);
        const averageOfTop3 = top3.reduce((acc, val) => acc + val, 0) / top3.length;

        document.getElementById('output').textContent = `Prediction Result: ${averageOfTop3.toFixed(2)}`;

        // Update the progress bar
        const progressBar = document.getElementById('progressBar');
        progressBar.style.width = `${averageOfTop3 * 100}%`;
    }
</script>

</body>

<script>
    async function getStockData() {
            const userInput = localStorage.getItem("stockName");
            const stockHistory = document.getElementById('scrollbox');
            console.log(userInput);
            // Clear previous data
            // stockHistory.innerHTML = "";

            // Display stock name in bold at the top
            <!-- stockHistory.innerHTML += `<div id="results"><b>${userInput}</b>`; -->

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

                // Parse and display the "Last Refreshed" data and stock details
                const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
                const dailyData = data["Time Series (Daily)"][lastRefreshed];
                document.getElementById('num1').value = dailyData["6. volume"];
                document.getElementById('num2').value = dailyData["1. open"];
                document.getElementById("predict").click();
                


            } catch (error) {
                if (error.name === 'AbortError') {
                    stockHistory.innerHTML += `<div>Error: Request timed out</div>`;
                } else {
                    stockHistory.innerHTML += `<div>Error: Please enter in a valid stock</div>`;
                    stockHistory.innerHTML += "<hr>"; // Add a horizontal line after the data
                    stockHistory.innerHTML += `<div></div>`;
                    stockHistory.innerHTML += `<div></div>`;

                }
            } finally {
                clearTimeout(timeoutId);
            }
        }
    window.onload = getStockData();
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('searchbut').addEventListener('click', getStockData); 
    });
</script>
<div class="tabs-section">
    <div class="tabs">
        <button class="tab" onclick="showTab('tab1')">Breakdown</button>
        <button class="tab" onclick="showTab('tab2')">Share Chart Calculator</button>
        <button class="tab" onclick="showTab('tab3')">History</button>
    </div>
    <!-- Tab 1: Display the most recent stock data -->
    <div class="tab-content" id="tab1">
        <script>
            async function getStockDataTab1() {
                    const userInput1 = localStorage.getItem("stockName");
                    const stockHistory1 = document.getElementById('tab1');
                    // Clear previous data
                    // stockHistory.innerHTML = "";
                    // Display stock name in bold at the top
                    <!-- stockHistory1 += `<div id="results"><b>${userInput}</b>`; -->
                    const controller = new AbortController();
                    const signal = controller.signal;
                    // Set a timeout to abort the fetch request
                    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds
                    try {
                        const response = await fetch(`https://stocktify.stu.nighthawkcodingsociety.com/api/stockdata?symbol=${userInput1}`, {
                            method: 'GET',
                            signal: signal,
                            mode: 'cors' // Add this line to enable CORS
                        });
                        const data = await response.json();
                        // Parse and display the "Last Refreshed" data and stock details
                        const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
                        const dailyData = data["Time Series (Daily)"][lastRefreshed];
                        document.getElementById('num1').value = dailyData["6. volume"];
                        document.getElementById('num2').value = dailyData["1. open"];
                        document.getElementById("predict").click();
                    } catch (error) {
                        if (error.name === 'AbortError') {
                            stockHistory1 += `<div>Error: Request timed out</div>`;
                        } else {
                            stockHistory1 += `<div>Error: Please enter in a valid stock</div>`;
                            stockHistory1 += "<hr>"; // Add a horizontal line after the data
                            stockHistory1 += `<div></div>`;
                            stockHistory1 += `<div></div>`;
                            stockHistory1 += `<div>HELLO</div>`
                        }
                    } finally {
                        clearTimeout(timeoutId);
                    }
                }
            window.onload = getStockDataTab1();
            document.addEventListener('DOMContentLoaded', (event) => {
                document.getElementById('searchbut').addEventListener('click', getStockDataTab1); 
            });
        </script>

    </div>
    <!-- Tab 2: Add a slider for volume and percentage -->
    <div class="tab-content" id="tab2">
        <h2>Share Chart Calculator</h2>
        <canvas id="pieChart"></canvas>
        <input type="range" id="volumeSlider" min="0" max="1000000000" step="1000000" onchange="updateChart()">
        
    </div>
    <!-- Tab 3: Display the JSON data in a table -->
    <div class="tab-content" id="tab3">
        <h2>History</h2>
        <table id="jsonTable"></table>
    </div>
</div>



<!-- Input fields for num1 and num2 -->
<label for="num1">Volume</label>
<input type="number" id="num1" name="num1">
<br>
<label for="num2">Price</label>
<input type="number" id="num2" name="num2">
<br>
<button onclick="executePrediction()" id="predict">Predict</button>

<!-- Output area to display the result -->
<h3>Result:</h3>
<p id="output"></p>

<div style="background-color: #e0e0e0; width: 100%; height: 30px; position: relative;">
    <div id="progressBar" style="background-color: #4CAF50; width: 0%; height: 100%;"></div>
</div>