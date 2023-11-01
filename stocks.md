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

<!-- Ate code -->

  <style>
    #recipe td, #recipe th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    #recipe tr:nth-child(even){
      background-color: #f2f2f2;
    }
    /* #recipe tr:hover {
      background-color: #DDC89B;
      color: white;
    } */
    #recipe th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #D3BFA9;
      color: white;
    }
  </style>
</head>
<body>

  <div>
    <section class="team1">
      <div class="search_bar">
        <input id="search" type="text" placeholder="Search Recipe.." />
        <button onclick="searchStock()" id="enter" type="button">🔍</button>
      </div>
    </section>
  </div>

  <br>

  <div>
    <section class="team1">
      <main id="content" class="main-content" role="main">
        <table id="recipe">
          <thead>
            <tr>
              <th style="width:10%">Symbol</th>
              <th style="width:30%">Name</th>
              <th style="width:10%">Exchange</th>
            </tr>
          </thead>
          <tbody id="result">
            <!-- generated rows -->
          </tbody>
        </table>
      </main>
    </section>
  </div>

  <br>
  <br>
  <br>

  <script>
    // prepare HTML result container for new output
    const resultContainer = document.getElementById("result");

    // prepare fetch options
    const url = "https://stocktify.stu.nighthawkcodingsociety.com/api/stocksearch?symbol=TSLA";
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

    function searchStock() {
      // Get the search input value
      const searchInput = document.getElementById("search").value;

      // Prepare fetch options with the search query
      const url = "https://stocktify.stu.nighthawkcodingsociety.com/api/stocksearch?symbol=" + encodeURIComponent(searchInput);
      const headers = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      // Clear the existing table rows
      const resultContainer = document.getElementById("result");
      resultContainer.innerHTML = "";

      // Display loading message while fetching data
      const loadingMessage = document.getElementById("loading");
      loadingMessage.style.display = "block";
      loadingMessage.textContent = "Loading...";

      // Fetch the API with search query
      fetch(url, headers)
        .then(response => {
          // Check for response errors
          if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            loadingMessage.style.display = "none";
            return;
          }
          // Fetch the data from API
          response.json().then(data => {
            console.log(data);
            // Hide the loading message
            loadingMessage.style.display = "none";
            // Iterate through the data and add rows to the table
            for (let row of data) {
              addRowToTable(row);
            }
          }).catch(err => {
            console.error(err);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = err;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            loadingMessage.style.display = "none";
          });
        }).catch(err => {
          console.error(err);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = err;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          loadingMessage.style.display = "none";
        });
    }

    function addRowToTable(rowData) {
      const tr = document.createElement("tr");
      for (let key in rowData) {
        const td = document.createElement("td");
        td.innerHTML = rowData[key];
        tr.appendChild(td);
      }
      const resultContainer = document.getElementById("result");
      resultContainer.appendChild(tr);
    }
  </script>

</html>