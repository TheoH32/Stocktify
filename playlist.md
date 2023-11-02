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
    }
    .groupTwo {
      border: 1px solid #ccc;
    }
    .groupThree {
      border: 1px solid #ccc;
    }
  </style>

<div class="groupOne">
  <h1 id="stockOne"></h1>
</div>

<div class="groupTwo">
  <h1 id="stockTwo"></h1>
</div>

<div class="groupThree">
  <h1 id="stockThree"></h1>
</div>

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