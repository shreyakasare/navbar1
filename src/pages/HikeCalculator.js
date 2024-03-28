import React, { useState } from 'react';
import { CenterGrid } from "../proj-ui/GridLayout";
import { Button, Grid, TextField } from '@material-ui/core';
import "./HikeCalculator.css"
import ReactSwitch from 'react-switch';

const HikeCalculator = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem('selectedTheme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem('selectedTheme', 'light')
    }

    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme === 'dark') {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        debugger
        if (e.target.checked) setDarkMode();
        else setLightMode();

    }

    const [currSal, setcurrSal] = useState("")
    const [newSal, setnewSal] = useState("")
    const [hikPrect, sethikPrect] = useState("")

    const calculate = () => {
        debugger
        sethikPrect(((newSal - currSal) / currSal) * 100)
    }

    const clearState = () => {
        debugger
        setcurrSal("");
        setnewSal("");
        sethikPrect("");
    }

    return (
        // <div className='centerTitle'>
        <div className='container'>
            <div className='dark-mode'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={toggleTheme}
                    defaultChecked={selectedTheme === 'dark'}
                />
                <label className='dark_mode_label' htmlFor='darkmode-toggle'>

                </label>
                <h6>
                    {/* h4 */}
                    {"Hike Calculator"}
                </h6>
                <div className='textStyle'>
                    <div>
                        <TextField
                            id="standard-basic"
                            value={currSal}
                            onChange={(e) => {
                                debugger
                                setcurrSal(parseInt(e.target.value))
                                console.log('currSal :>> ', currSal);
                            }}
                            label={"Current Salary"}
                            variant="standard"
                            focused
                        />
                    </div>

                    <div>
                        <TextField
                            id="standard-basic"
                            label={"New Salary"}
                            value={newSal}
                            onChange={(e) => {
                                debugger
                                setnewSal(parseInt(e.target.value))
                                console.log('newSal :>> ', newSal);
                            }}
                            focused
                            variant="standard"
                        >
                        </TextField>
                    </div>
                </div>

                <div>
                    <Button
                        onClick={() => calculate()}
                        variant="contained">Calculate</Button>

                    <Button
                        onClick={() => clearState()}
                        variant="contained">Clear</Button>

                    <p>Hike percentage is :{`${hikPrect} %`}</p>
                </div>
            </div>
        </div >
    );
};

export default HikeCalculator;