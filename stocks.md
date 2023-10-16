---
layout: home
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
    .box-conatiner {
        width: 100%;
        max-width: 1440px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
    }
    .box {
        width: 269px;
        padding: 15px;
        min-height: 430px;
        transition: background-color 0.3s;
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
        background: url("https://raw.githubusercontent.com/TheoH32/Stocktify/main/images/stock3.jpeg") no-repeat center center;
        background-size: cover;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .content {
        padding: 10px;
    }
    h1 {
        color: hsl(0, 0%, 95%);
        text-transform: uppercase;
        font-family: 'Lexend Deca', sans-serif;
        margin: 20px 0;
    }
    p {
        color: hsla(0, 0%, 100%, 0.75);
        font-family: 'Lexend Deca', sans-serif;
    }
    .btn {
        display: none;
    }
    .box:hover {
        background-color: transparent;
    }

    .image-container {
      position: relative;
      width: 300px; /* Adjust the width and height as needed */
      height: 200px;
      overflow: hidden;
      border-radius: 10px; /* Rounded corners */
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Maintain aspect ratio while covering container */
    }

    .text-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
      color: #fff;
    }

    .text {
      text-align: center;
      font-size: 24px;
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
    <div class="box-conatiner">
        <div class="box box1">
            <div class="content">
                <h1>S&P 500</h1>
                <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            </div>
        </div>
        <div class="box box2">
            <div class="content">
                <h1>NASDAQ</h1>
                <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            </div>
        </div>
        <div class="box box3">
            <div class="content">
                <h1>DOW JONES</h1>
                <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            </div>
        </div>
    </div>
    <!-- <div class="image-container">
    <img class="image" src="https://raw.githubusercontent.com/TheoH32/Stocktify/main/images/stock1.jpeg" alt="Your Image">
    <div class="text-overlay">
      <div class="text">
        Text Overlay
      </div>
    </div>
  </div> -->
  
</body>
