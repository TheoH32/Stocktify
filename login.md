---
title: Account Login
layout: post
---

<head>
    <title>Account Login</title>
    <style>
        .normal {
            background-color: #121212 !important;
            color: white !important;
        }
        .lightmode {
            background-color: #F6FFF5 !important;
            color: black !important;
        }
    </style>
</head>
<body id="body" class="normal">
    <!-- Login Screen -->
    <div id="loginScreen">
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
    </div>
    <!-- Account Details Screen (Initially Hidden) -->
    <div id="accountDetails" style="display: none;">
        <!-- Account details will go here -->
        <p>Welcome to your account. Your account details are displayed here.</p>
    </div>
</body>

<script>
        document.addEventListener("DOMContentLoaded", function () {
            // Check if the user is logged in (You need to define your own logic for this)
            if (localStorage.getItem("loggedIn") === "true") {
                showAccountDetails();
            } else {
                showLoginScreen();
            }
        });

        function showAccountDetails() {
            document.getElementById("loginScreen").style.display = "none";
            document.getElementById("accountDetails").style.display = "block";
            
            // Create and append the email and stock elements
            const emailDiv = document.createElement("div");
            emailDiv.innerHTML = "Email: " + localStorage.getItem("localEmail");
            document.getElementById("accountDetails").appendChild(emailDiv);
            
            const stockDiv = document.createElement("div");
            stockDiv.innerHTML = "Saved Stocks";
            document.getElementById("accountDetails").appendChild(stockDiv);
            
            // Create a button element
            const button = document.createElement('button');
            button.innerText = 'LOG OUT';
            button.addEventListener('click', () => {
                // Remove the loggedIn flag from localStorage
                localStorage.removeItem("localEmail");
                localStorage.removeItem("localPassword");
                localStorage.removeItem("loggedIn");
                // Show the login screen
                showLoginScreen();
            });

            // Append the logout button to the account details section
            document.getElementById("accountDetails").appendChild(button);
        }


        function showLoginScreen() {
            document.getElementById("loginScreen").style.display = "block";
            document.getElementById("accountDetails").style.display = "none";
        }

        function login_user() {

            // You can make a POST request here to your authentication endpoint
            var url = "https://stocktify.stu.nighthawkcodingsociety.com";

            // Comment out next line for local testing
            // url = "http://localhost:8085";
            const login_url = url + '/authenticate';
            const body = {
                email: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            };

            console.log(JSON.stringify(body));
            const requestOptions = {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
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
                    if (!response.ok) {
                        const errorMsg = 'Login error: ' + response.status;
                        console.log(errorMsg);
                        return;
                    }
                    // Success!!!
                    // Redirect to Database location
                    localStorage.setItem("localEmail", document.getElementById("uid").value);
                    localStorage.setItem("localPassword", document.getElementById("password").value);
                    console.log(localStorage.getItem("localEmail"));
                    console.log(localStorage.getItem("localPassword"));
                    localStorage.setItem("loggedIn", "true");
                    showAccountDetails();
                    window.location.href = "/Stocktify/login";
                });
        }
    </script>
