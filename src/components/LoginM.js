import React, { useEffect, useState } from "react";
import "./signup.css";
import { popUp } from "./PopUp";
import { useNavigate } from "react-router-dom";

const LoginM = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    }, [])

    const handleLogin = async () => {
        debugger
        console.log('email,password :>> ', email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/');
        }
        else {
            popUp({
                message: [`Invalid Credentials`],
            }).then((result) => {
                if (result.isConfirmed) {
                    return;
                }
            });
        }
    }

    return (
        <div className="login">
            <h5>LoginM</h5>
            <input
                type="text"
                className="inputBoxL"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                className="inputBoxL"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
                className="btnLogin"
                type="button"
                onClick={handleLogin}>
                Login In
            </button>
        </div>
    );
};

export default LoginM;
