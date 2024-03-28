import React, { useEffect, useState } from "react";
import "./signup.css";
import "./signup.scss";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/todos')
        }
    }, [])

    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result))
        navigate('/usedash') //After successful login will redirect to the dash page
    }


    return (
        <div className="signupSection">
            <div className="info">
                <h2>Portfolio</h2>
                <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                <p>The Future Is Here</p>
            </div>
            <form action="#" method="POST" class="signupForm" name="signupform">

                <h2>Sign Up</h2>
                <ul class="noBullet">
                    <li>
                        <label for="username"></label>
                        <input
                            className="inputFields"
                            type="text"
                            id="username"
                            placeholder="Enter Name"
                            name="username"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </li>
                    <li>
                        <label for="password"></label>
                        <input
                            className="inputFields"
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </li>
                    <li>
                        <label for="email"></label>
                        <input
                            className="inputFields"
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            name="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </li>
                    <li id="center-btn">
                        <input
                            onClick={collectData}
                            type="submit"
                            id="join-btn"
                            alt="Join"
                            className="btnLogin"
                            // type="button"
                            name="Sign Up"
                            value="Login"
                        />
                    </li>
                </ul>
            </form>
        </div>

    );

    // return (
    //     // <div className="register">
    //     <div className="login">
    //         <div>Register</div>
    //         <input
    //             className="inputBoxL"
    //             type="text"
    //             placeholder="Enter Name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />
    //         <br />
    //         <input
    //             className="inputBoxL"
    //             type="text"
    //             placeholder="Enter Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <br />

    //         <input
    //             className="inputBoxL"
    //             type="text"
    //             placeholder="Enter Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <br />

    //         <button
    //             onClick={collectData}
    //             className="btnLogin" type="button">
    //             Sign Up
    //         </button>
    //     </div>
    // );
};

export default SignUp;
