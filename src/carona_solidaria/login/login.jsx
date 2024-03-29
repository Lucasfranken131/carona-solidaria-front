import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const login = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const values = {
            email: email,
            password: password
        }

        await axios.post(`http://localhost:3001/login`, values)
        .then(res => {
            const response = res.data;
            console.log(response);
        })
    }

    return(
        <body>
            <div id="company-logo-nav" onClick={() => navigate('/')}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/193/929/non_2x/vintage-car-png.png" id="logo" alt="logo"></img>
            </div>
            <div className="container">
                <h1>Login</h1>
                <input type="text" id="email" placeholder="Email"/>
                <input type="text" id="password"placeholder="Senha"/>
                <input type="submit" onClick={() => login()}value="Login"/>
                <div onClick={() => navigate("/cadastro")}>Não possui uma conta?<strong> clique aqui.</strong></div>
            </div>
        </body>
    );
}

export default Login;