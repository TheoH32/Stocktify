---
layout: post
search_exclude: true
---

<style>
    /* Optional: CSS for styling the search bar */
    .search-container {
      text-align: center;
      margin-top: 50px;
    }
    .search-box {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 250px;
      max-width: 100%;
      box-sizing: border-box;
    }
    .search-button {
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .search-button:hover {
      background-color: #45a049;
    }
    .groupOne {
      border: 1px solid #ccc;
      margin: 10px;
      text-align: center;
    }
    .groupTwo {
      border: 1px solid #ccc;
      margin: 10px;
      text-align: center;
    }
    .groupThree {
      border: 1px solid #ccc;
      margin: 10px;
      text-align: center;
    }
  </style>

<div class="groupOne">
  <h1 id="stockOne"></h1>
  <button onclick="removeStock('stockOne')">-</button>
</div>

<div class="groupTwo">
  <h1 id="stockTwo"></h1>
  <button onclick="removeStock('stockTwo')">-</button>
</div>

<div class="groupThree">
  <h1 id="stockThree"></h1>
  <button onclick="removeStock('stockThree')">-</button>
</div>

<script>
    // Check if the elements with IDs "stockOne," "stockTwo," and "stockThree" exist
    const stockOne = document.getElementById("stockOne");
    const stockTwo = document.getElementById("stockTwo");
    const stockThree = document.getElementById("stockThree");

    // Create an array to keep track of displayed stock symbols
    const displayedStocks = [];

    // Function to display stock data and update the displayedStocks array
    function displayStock(stockElement, stockKey) {
        const stockSymbol = localStorage.getItem(stockKey);
        if (stockSymbol && !displayedStocks.includes(stockSymbol)) {
            stockElement.innerHTML = stockSymbol;
            displayedStocks.push(stockSymbol);
        }
    }

    // Call the displayStock function for each element
    if (stockOne) {
        displayStock(stockOne, "stockOne");
    }

    if (stockTwo) {
        displayStock(stockTwo, "stockTwo");
    }

    if (stockThree) {
        displayStock(stockThree, "stockThree");
    }

    function removeStock(stockKey) {
    const stockElement = document.getElementById(stockKey);
    const stockSymbol = localStorage.getItem(stockKey);

    if (stockSymbol && displayedStocks.includes(stockSymbol)) {
      // Remove the stock symbol from the displayedStocks array
      const index = displayedStocks.indexOf(stockSymbol);
      if (index !== -1) {
        displayedStocks.splice(index, 1);
      }

      // Clear the stock element's content
      stockElement.innerHTML = '';

      // Remove the stock symbol from localStorage
      localStorage.removeItem(stockKey);
    }
  }
</script>
