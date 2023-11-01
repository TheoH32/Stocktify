---
layout: post
search_exclude: false
---


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

<div class="tabs-section">
    <div class="tabs">
        <button class="tab" onclick="showTab('tab1')">Breakdown</button>
        <button class="tab" onclick="showTab('tab2')">Share Chart Calculator</button>
        <button class="tab" onclick="showTab('tab3')">History</button>
    </div>
    <div class="tab-content" id="tab1">
        <div class="tab-content" id="tab1">
            <h2>Most Recent Stock Data</h2>
            <p id="recentStockData">Fetching data...</p>
        </div>
    </div>
    <div class="tab-content" id="tab2">
        <div class="tab-content" id="tab2">
            <h2>Share Chart Calculator</h2>
            <label for="volumeSlider">Volume:</label>
            <input type="range" id="volumeSlider" name="volumeSlider" min="0" max="100000000" step="1000" oninput="updateVolumeValue(this.value)">
            <span id="volumeValue">0</span>
            <br>
            <label for="percentageSlider">Percentage:</label>
            <input type="range" id="percentageSlider" name="percentageSlider" min="0" max="100" step="0.1" oninput="updatePercentageValue(this.value)">
            <span id="percentageValue">0</span>
            <br>
            <button onclick="calculateShareChart()">Calculate</button>
            <p id="shareChartResult">Result will be displayed here...</p>
        </div>
    </div>
    <div class="tab-content" id="tab3">
        <div class="tab-content" id="tab3">
            <h2>Stock History</h2>
            <table id="stockHistoryTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Data will be populated here using JavaScript -->
                </tbody>
            </table>
        </div>
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
<script>
    async function displayRecentStockData() {
        const userInput = localStorage.getItem("stockName");
        const tab1Content = document.getElementById('tab1');
        
        try {
            const response = await fetch(`https://stocktify.stu.nighthawkcodingsociety.com/api/stockdata?symbol=${userInput}`);
            const data = await response.json();
            const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
            const dailyData = data["Time Series (Daily)"][lastRefreshed];
            
            tab1Content.innerHTML = `
                <h2>${userInput} Stock Data on ${lastRefreshed}</h2>
                <p>Open: ${dailyData["1. open"]}</p>
                <p>High: ${dailyData["2. high"]}</p>
                <p>Low: ${dailyData["3. low"]}</p>
                <p>Close: ${dailyData["4. close"]}</p>
                <p>Volume: ${dailyData["6. volume"]}</p>
            `;
        } catch (error) {
            tab1Content.innerHTML = `<p>Error fetching data for ${userInput}</p>`;
        }
    }

    function displayJsonInTable(jsonData) {
        const tab3Content = document.getElementById('tab3');
        const timeSeries = jsonData["Time Series (Daily)"];
        
        let tableHtml = `<h2>Stock History</h2>
                         <table border="1">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Open</th>
                                    <th>High</th>
                                    <th>Low</th>
                                    <th>Close</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>`;

        for (const date in timeSeries) {
            tableHtml += `
                <tr>
                    <td>${date}</td>
                    <td>${timeSeries[date]["1. open"]}</td>
                    <td>${timeSeries[date]["2. high"]}</td>
                    <td>${timeSeries[date]["3. low"]}</td>
                    <td>${timeSeries[date]["4. close"]}</td>
                    <td>${timeSeries[date]["6. volume"]}</td>
                </tr>
            `;
        }

        tableHtml += `</tbody></table>`;
        tab3Content.innerHTML = tableHtml;
    }

    function updateVolumeValue(value) {
        document.getElementById('volumeValue').textContent = value;
    }

    function updatePercentageValue(value) {
        document.getElementById('percentageValue').textContent = value + '%';
    }

    function calculateShareChart() {
        // Logic to calculate share chart based on slider values
        // For now, just displaying the values
        const volume = document.getElementById('volumeSlider').value;
        const percentage = document.getElementById('percentageSlider').value;
        document.getElementById('shareChartResult').textContent = `Volume: ${volume}, Percentage: ${percentage}%`;
    }

    function executePrediction() {
        const num1 = parseInt(document.getElementById('num1').value, 10);
        const num2 = parseInt(document.getElementById('num2').value, 10);

        const app = new App();
        const result = app.trainAndPredict(num1, num2);

        document.getElementById('output').textContent = `Prediction Result: ${result}`;
    }

    // Assuming you have a function to fetch the stock data and populate the table
    // This function will be called when the page loads
    window.onload = function() {
        displayRecentStockData();
    }
</script>
</body>