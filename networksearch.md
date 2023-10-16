---
layout: home
search_exclude: true
---
---
layout: home
search_exclude: true
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
    // URL for deployment
    var url = "https://stocktify.stu.nighthawkcodingsociety.com";
    // Comment out next line for local testing
    // url = "http://localhost:8085";
    // Endpoint for neural network predictions
    const network_url = url + '/api/network';

    function post_data_to_network(){
        // Set body to include data for prediction
        const body = {
            inputData1: document.getElementById("input1").value,
            inputData2: document.getElementById("input2").value,
        };
        console.log(JSON.stringify(body));
        // Set Headers to support cross origin
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
            },
        };
        // Fetch predictions
        fetch(network_url, requestOptions)
        .then(response => {
            // trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Error fetching predictions: ' + response.status;
                console.log(errorMsg);
                return;
            }
            return response.json();
        })
        .then(predictions => {
            console.log(predictions);
            // Handle the predictions as needed
        });
    }


</script>
<!-- Neural Network Input Fields -->
<div>
<h2>Neural Network Prediction</h2>
<p>Enter two numerical values to get a prediction from the neural network:</p>

<label for="input1">Input 1:</label>
<input type="number" id="input1" name="input1" placeholder="Enter first value">
<br>

<label for="input2">Input 2:</label>
<input type="number" id="input2" name="input2" placeholder="Enter second value">
<br>

<button onclick="post_data_to_network()">Get Prediction</button>
<br>

<label for="output">Prediction Output:</label>
<input type="text" id="output" name="output" readonly placeholder="Predictionwill appear here">
</div>

</body>