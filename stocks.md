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
        <div class="box box3">
            <div class="content">
                <h1>DOW JONES</h1>
                <p>Dow Jones is a renowned U.S. stock market index, featuring leading companies, and is often used as a benchmark for the broader economic landscape.</p>
            </div>
        </div>
    </div>

  <br>

<form id="stockDataForm">
    <label for="symbolInput">Enter Stock Symbol:</label>
    <input type="text" id="symbolInput" name="symbol" required>
    <button type="submit">Search</button>
</form>

<br>

<div id="result"></div>

<script>
  // USE FOR INPUTS
    // document.getElementById("stockDataForm").addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     const symbol = document.getElementById("symbolInput").value;
    //     searchStockData(symbol);
    // });

    // function searchStockData(symbol) {
    //     fetch(`http://stocktify.stu.nighthawkcodingsociety.com/api/stockdata?symbol=${symbol}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Handle the data or display it on the page
    //             document.getElementById("result").textContent = data;
    //         })
    //         .catch(error => {
    //             console.error("Error:", error);
    //         });
    // }
</script>

<script>
  // PRINT TEST
    // prepare HTML result container for new output
    const resultContainer = document.getElementById("result");

    // prepare fetch options
    const url = "http://stocktify.stu.nighthawkcodingsociety.com/api/stockdata";
    const headers = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    // fetch the API
    fetch(url, headers)
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
          const errorMsg = 'Database response error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // fetch the data from API
        response.json().then(data => {
          console.log(data);
          for (let row in data) {
            console.log(data[row]);
            add_row(data[row]);
          }
        }).catch(err => {
          console.error(err);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = err;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
        });
      }).catch(err => {
        console.error(err);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = err;
        tr.appendChild(td);
        resultContainer.appendChild(tr);
      });

    function add_row(rowData) {
      const tr = document.createElement("tr");
      for (let key in rowData) {
        const td = document.createElement("td");
        td.innerHTML = rowData[key];
        tr.appendChild(td);
      }
      resultContainer.appendChild(tr);
    }
</script>