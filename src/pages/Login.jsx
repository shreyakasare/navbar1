import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./loginimg.jpg"
import { popUp } from "../components/PopUp";

const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
}

const Login = () => {
    let navigate = useNavigate();
    const correctUsername = "kminchelle";
    const correctPassword = "0lelplR";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tokLog, settokLog] = useState("");

    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ username: "kminchelle", password: "0lelplR" }];

    const handleChange = (event) => {
        debugger;
        // setUsername(event.target.value);
        setUsername(event.target.value);
        console.log("value is:", event.target.value);
    };

    const handleChangePass = (event) => {
        debugger;
        setPassword(event.target.value);
        console.log("value is:", event.target.value);
    };

    const url = "https://dummyjson.com/auth/login";
    const [data, setData] = useState([]);
    const submitThis = async () => {
        debugger;
        if ((username !== correctUsername) && password !== correctPassword) {
            popUp({
                message: [`Invalid credentials`],
            })
            // alert("Invalid credentials");
            return;
        } else {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "kminchelle",
                    password: "0lelplR",
                }),
            });
            const data1 = await response.json();
            console.log(data1, "login result");
            let token = data1.token;
            settokLog(token);
            console.log(tokLog, "dataafterset");
            navigate("./product", { state: token });
        }
    };

    console.log("url :>> ", url);

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center" >
            {/* <section className="bg-gray-50" > */}
            <div className="container mx-auto"
            // style={
            //     {
            //         justifyContent: "center",
            //         width: "70%",
            //         display: "flex"
            //     }}
            >
                {/* sets the content horizontally */}
                <div className="flex">
                    <div className="sm:w-1/2 px-8 sm:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                        <p className="text-sm mt-4 text-[#002D74]">Already a user, Login</p>
                        {/* margin top 4 */}
                        <form
                            className="flex flex-col gap-4"
                            // className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            action=""
                            onSubmit={submitThis}>
                            <input className="p-2 mt-8 rounded-xl border"
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={handleChange}
                            />
                            <div className="relative">
                                <input className="p-2 rounded-xl border w-full"
                                    // className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    autoComplete="on"
                                    placeholder="******************"
                                    value={password}
                                    onChange={handleChangePass}
                                // onChange={(e) => setPassword("0lelplR")} //used to set password automatically
                                />
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                                    viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                </svg>
                            </div>
                            <button
                                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                                type="button"
                                onClick={submitThis} >
                                Login In
                            </button>
                        </form>
                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400">
                            </hr>
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400">
                            </hr>
                        </div>
                        <button
                            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                            <svg
                                className="mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25px"
                                fill="currentColor"
                                class="bi bi-google"
                                viewBox="0 0 16 16">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            Login with Google
                        </button>

                        <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Don't have an account</p>
                            <button className="py-2 px-5 bg-white border
                            rounded-xl  hover:scale-110 duration-300">Register</button>
                        </div>

                        <div className="w-full max-w-sm">
                            <div className="wrap-login"></div>
                            <p className="text-center text-gray-500 text-xs">
                                &copy;2023 Shreya Kasare.
                            </p>
                        </div>
                    </div>
                    <div className="sm:block hidden w-1/2">
                        <img className=" rounded-2xl"
                            // src={img}
                            alt="" />
                    </div>
                </div>


            </div>


        </section >
    );
};

export default Login;

