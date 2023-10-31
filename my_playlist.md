---
layout: post
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
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .box {
      width: 100px;
      height: 100px;
      border: 2px solid #333;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      font-size: 40px;
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

  <div class="box">+</div>
  <div class="box">+</div>
  <div class="box">+</div>
  <!-- Add more boxes as needed -->