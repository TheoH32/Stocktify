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
        if(ld==0){
            document.getElementById('body').className = "normal";
            console.log("helo");
        }
        else{
            document.getElementById('body').className = "lightmode";
            console.log("heldo");
        }
    }
</script>
playlist