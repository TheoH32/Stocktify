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
  </style>

<div class="search-container">
  <input id="search" type="text" class="search-box" placeholder="Search...">
  <button onclick="searchFunction()" class="search-button">Search</button>
</div>

<h1 id="stockOne"></h1>
<h1 id="stockTwo"></h1>
<h1 id="stockThree"></h1>

<script>
    // Check if the elements with IDs "stockOne," "stockTwo," and "stockThree" exist
    const stockOne = document.getElementById("stockOne");
    const stockTwo = document.getElementById("stockTwo");
    const stockThree = document.getElementById("stockThree");

    // Retrieve data from localStorage and set it to the elements if they exist
    if (stockOne) {
      stockOne.innerHTML = localStorage.getItem("stockOne");
    }

    if (stockTwo) {
      stockTwo.innerHTML = localStorage.getItem("stockTwo");
    }

    if (stockThree) {
      stockThree.innerHTML = localStorage.getItem("stockThree");
    }
</script>