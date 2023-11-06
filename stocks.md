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
            <!-- <a href="/Stocktify/s&p500"> -->
                <div class="content">
                    <h1>S&P 500</h1>
                    <p>The S&P 500 is a prominent U.S. stock market index consisting of 500 leading publicly traded companies, often used as a key indicator of the overall health and performance of the U.S. economy.</p>
                </div>
            </a>
        </div>
        <div class="box box2">
            <!-- <a href="/Stocktify/nasdaq"> -->
                <div class="content">
                    <h1>NASDAQ</h1>
                    <p>NASDAQ is a tech-focused U.S. stock exchange, home to giants like Apple and Amazon, known for its electronic trading innovations.</p>
                </div>
            </a>
        </div>
        <div class="box box3">
            <!-- <a href="/Stocktify/dowjones"> -->
                <div class="content">
                    <h1>DOW JONES</h1>
                    <p>Dow Jones is a renowned U.S. stock market index, featuring leading companies, and is often used as a benchmark for the broader economic landscape.</p>
                </div>
            </a>
        </div>
    </div>

  <br>

<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<style>
h3 {
  text-align: center;
}
</style>
<!-- 
<h3>Top 50 stocks</h3>

<body>
    <table id="md_demo" class="table">
         <thead>
          <tr>
            <th>Stock</th>
            <th>Description</th>
            <th>Index</th>
          </tr>
        </thead>
        <tr>
          <th>Stock</th>
          <th>Description</th>
          <th>Index</th>
      </tr>
      <tr>
          <td>Apple Inc. (AAPL)</td>
          <td>Apple Inc. is a multinational technology company known for its consumer electronics, software, and services. It's famous for products like the iPhone, iPad, and Mac computers.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Amazon.com Inc. (AMZN)</td>
          <td>Amazon is a multinational tech company known for e-commerce, cloud computing, and digital streaming. It's the world's largest online marketplace.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Microsoft Corporation (MSFT)</td>
          <td>Microsoft is a leading technology company known for its software products, including Windows, Office Suite, and cloud services.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Alphabet Inc. (GOOGL)</td>
          <td>Alphabet Inc. is the parent company of Google and is involved in various internet-related services, including online advertising, search engines, and cloud computing.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Meta Platforms, Inc. (formerly Facebook, now Meta) (FB)</td>
          <td>Meta Platforms, formerly Facebook, is a social media conglomerate that owns several widely-used social networking platforms such as Facebook, Instagram, WhatsApp, and Oculus.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Tesla, Inc. (TSLA)</td>
          <td>Tesla is an electric vehicle and clean energy company, known for its innovative electric cars, energy storage solutions, and solar products.</td>
          <td>NASDAQ, S&P 500</td>
      </tr>
      <tr>
          <td>Berkshire Hathaway Inc. (BRK.A / BRK.B)</td>
          <td>Berkshire Hathaway is a multinational conglomerate holding company known for its diverse investments in various sectors, managed by Warren Buffett.</td>
          <td>S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Johnson & Johnson (JNJ)</td>
          <td>Johnson & Johnson is a healthcare conglomerate known for its pharmaceuticals, medical devices, and consumer health products.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>JPMorgan Chase & Co. (JPM)</td>
          <td>JPMorgan Chase is a multinational investment bank and financial services company offering a range of financial services including banking and asset management.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Visa Inc. (V)</td>
          <td>Visa is a multinational financial services corporation known for facilitating electronic funds transfers through its credit and debit cards.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Walmart Inc. (WMT)</td>
          <td>Walmart is a multinational retail corporation, operating a chain of hypermarkets, discount department stores, and grocery stores.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Procter & Gamble Company (PG)</td>
          <td>Procter & Gamble is a multinational consumer goods corporation, producing a wide range of personal care and cleaning products.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>NVIDIA Corporation (NVDA)</td>
          <td>NVIDIA is a technology company known for its graphics processing units (GPUs) used in gaming and professional markets.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>The Walt Disney Company (DIS)</td>
          <td>The Walt Disney Company is a multinational entertainment conglomerate known for its film studio, theme parks, and media networks.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Mastercard Incorporated (MA)</td>
          <td>Mastercard is a multinational financial services corporation facilitating transactions through its credit, debit, and prepaid cards.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Adobe Inc. (ADBE)</td>
          <td>Adobe is a multinational software company known for its multimedia and creativity software products, including Photoshop and Illustrator.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Pfizer Inc. (PFE)</td>
          <td>Pfizer is a multinational pharmaceutical corporation known for its prescription drugs and vaccines.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Netflix, Inc. (NFLX)</td>
          <td>Netflix is a streaming service company offering a wide range of TV series, movies, and original content to its subscribers.</td>
          <td>NASDAQ, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Bank of America Corporation (BAC)</td>
          <td>Bank of America is a multinational investment bank and financial services company offering a range of banking and financial solutions.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>Coca-Cola Company (KO)</td>
          <td>The Coca-Cola Company is a multinational beverage corporation known for its soft drink, Coca-Cola, and other non-alcoholic beverages.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
          <td>McDonald's Corporation (MCD)</td>
          <td>McDonald's is a multinational fast-food restaurant chain known for its hamburgers, french fries, and various fast-food items.</td>
          <td>NYSE, S&P 500, Dow Jones</td>
      </tr>
      <tr>
        <td>AT&T Inc. (T)</td>
        <td>AT&T is a multinational conglomerate holding company known for its telecommunications and mass media services.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Home Depot, Inc. (HD)</td>
        <td>The Home Depot is a multinational home improvement retailer, providing construction products, tools, and services.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Salesforce.com, Inc. (CRM)</td>
        <td>Salesforce is a cloud-based software company specializing in customer relationship management (CRM) services and enterprise applications.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>IBM (International Business Machines Corporation) (IBM)</td>
        <td>IBM is a multinational technology and consulting corporation offering hardware, software, and hosting services.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Abbott Laboratories (ABT)</td>
        <td>Abbott is a multinational medical devices and health care company producing pharmaceuticals, diagnostics, and medical devices.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Cisco Systems, Inc. (CSCO)</td>
        <td>Cisco is a multinational technology conglomerate known for networking hardware, software, and telecommunications equipment.</td>
        <td>NASDAQ, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>General Electric Company (GE)</td>
        <td>General Electric is a multinational conglomerate operating in aviation, healthcare, power, renewable energy, and other industries.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Intel Corporation (INTC)</td>
        <td>Intel is a multinational technology company known for its semiconductor chips used in computers and other devices.</td>
        <td>NASDAQ, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Chevron Corporation (CVX)</td>
        <td>Chevron is a multinational energy corporation engaged in every aspect of the oil, natural gas, and geothermal energy industries.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Exxon Mobil Corporation (XOM)</td>
        <td>Exxon Mobil is a multinational oil and gas corporation involved in exploration, production, and refining of petroleum products.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Honeywell International Inc. (HON)</td>
        <td>Honeywell is a multinational conglomerate operating in various industries, including aerospace, building technologies, and performance materials.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>3M Company (MMM)</td>
        <td>3M is a multinational conglomerate producing a wide range of products in various sectors, including industrial, safety, and consumer goods.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Johnson Controls International plc (JCI)</td>
        <td>Johnson Controls is a multinational conglomerate providing building technologies and solutions in HVAC, security, and fire safety systems.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>PepsiCo, Inc. (PEP)</td>
        <td>PepsiCo is a multinational food and beverage corporation known for brands like Pepsi, Frito-Lay, Gatorade, Tropicana, and Quaker Oats.</td>
        <td>NASDAQ, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>The Goldman Sachs Group, Inc. (GS)</td>
        <td>Goldman Sachs is a multinational investment bank offering a wide range of financial services, including investment banking, asset management, and securities.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>UnitedHealth Group Incorporated (UNH)</td>
        <td>UnitedHealth Group is a diversified health care company providing health insurance services and health care products.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Bristol-Myers Squibb Company (BMY)</td>
        <td>Bristol-Myers Squibb is a pharmaceutical company focused on the development of medicines for various therapeutic areas, including oncology and cardiovascular diseases.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Thermo Fisher Scientific Inc. (TMO)</td>
        <td>Thermo Fisher Scientific is a multinational biotechnology company providing scientific instrumentation, reagents, and consumables.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Union Pacific Corporation (UNP)</td>
        <td>Union Pacific is a transportation company providing rail service covering various regions in the United States.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>United Parcel Service, Inc. (UPS)</td>
        <td>UPS is a multinational package delivery and supply chain management company.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Caterpillar Inc. (CAT)</td>
        <td>Caterpillar is a multinational corporation manufacturing construction and mining equipment, diesel and natural gas engines, and industrial gas turbines.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Boeing Company (BA)</td>
        <td>Boeing is a multinational aerospace corporation known for the design, manufacturing, and sale of airplanes, rotorcraft, rockets, satellites, and telecommunications equipment.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Lockheed Martin Corporation (LMT)</td>
        <td>Lockheed Martin is a multinational aerospace, defense, arms, security, and advanced technologies company.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>General Motors Company (GM)</td>
        <td>General Motors is a multinational automotive corporation manufacturing vehicles and providing automotive financial services.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Ford Motor Company (F)</td>
        <td>Ford is a multinational automaker producing automobiles and commercial vehicles under the Ford brand.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Starbucks Corporation (SBUX)</td>
        <td>Starbucks is a multinational chain of coffeehouses and roastery reserves, famous for its coffee and other beverages.</td>
        <td>NASDAQ, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Oracle Corporation (ORCL)</td>
        <td>Oracle is a multinational computer technology corporation specializing in database software and technology, cloud engineered systems, and enterprise software products.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
    <tr>
        <td>Eli Lilly and Company (LLY)</td>
        <td>Eli Lilly is a pharmaceutical company that develops and sells pharmaceuticals in various therapeutic areas including diabetes, oncology, and neuroscience.</td>
        <td>NYSE, S&P 500, Dow Jones</td>
    </tr>
</table>
</body>

<script>
    $("#md_demo").DataTable();
</script> -->


<style>
    #stock td, #stock th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    #stock tr:nth-child(even){
      background-color: #f2f2f2;
    }
    #stock tr:hover {
      background-color: #DDC89B;
      color: white;
    }
    #stock th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #808080;
      color: white;
    }
  </style>
<body>

  <div>
    <section class="team1">
      <div class="search_bar">
        <input id="search" type="text" placeholder="Search Stock.." />
        <button onclick="searchStock()" id="enter" type="button">🔍</button>
      </div>
    </section>
  </div>

  <br>

  <div>
    <section class="team1">
      <main id="content" class="main-content" role="main">
        <table id="stock">
          <thead>
            <tr>
              <th style="width:10%">Symbol</th>
              <th style="width:30%">Name</th>
              <th style="width:10%">Exchange</th>
            </tr>
          </thead>
          <tbody id="result">
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