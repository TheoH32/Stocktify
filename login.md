---
title: Account Login
layout: post
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
<body id="body" class="normal">
<form action="javascript:login_user()">
    <p id="email" class="normal"><label>
        Email:
        <input class="normal" type="text" name="uid" id="uid" required>
    </label></p>
    <p id="passwordd" class="normal"><label>
        Password:
        <input class="normal" type="password" name="password" id="password" required>
    </label></p>
    <p id="logind" class="normal">
        <button>Login</button>
    </p>
</form>

<body id="body" class="normal" onclick= "swapp()">
<script>
    swapp()
    function swapp(){
        ld =  localStorage.getItem("storageName");
        if(ld%2==0){
            document.getElementById('body').className = "normal";
            document.getElementById('email').className = "normal";
            document.getElementById('passwordd').className = "normal";
            document.getElementById('logind').className = "normal";
            document.getElementById('uid').className = "normal";
            document.getElementById('password').className = "normal";
            console.log("helo");
        }
        else{
            document.getElementById('body').className = "lightmode";
            document.getElementById('email').className = "lightmode";
            document.getElementById('passwordd').className = "lightmode";
            document.getElementById('logind').className = "lightmode";
            document.getElementById('uid').className = "lightmode";
            document.getElementById('password').className = "lightmode";
            console.log("heldo");
        }
    }
    // URL for deployment
    var url = "https://stocktify.stu.nighthawkcodingsociety.com"
    // Comment out next line for local testing
    // url = "http://localhost:8085"
    // Authenticate endpoint
    const login_url = url + '/authenticate';
    function login_user(){
        // Set body to include login data
        const body = {
            email: document.getElementById("uid").value,
            password: document.getElementById("password").value,
        };
        console.log(JSON.stringify(body));
        // Set Headers to support cross origin
        const requestOptions = {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
            },
        };
        // Fetch JWT
        fetch(login_url, requestOptions)
        .then(response => {
            // trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to Database location
            localStorage.setItem("localEmail", email);
            localStorage.setItem("localPassword", password);
            console.log(localStorage.getItem("Local Email:" + "localEmail"));
            console.log(localStorage.getItem("Local Password:" + "localPassword"));
            window.location.href = "/Stocktify/stocks";
            console.log(localStorage.getItem("Local Email:" + "localEmail"));
            console.log(localStorage.getItem("Local Password:" + "localPassword"));
        })
    }


</script>
