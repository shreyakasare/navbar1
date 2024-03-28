import React, { useState } from 'react';
import { CenterGrid } from "../proj-ui/GridLayout";
import { Button, Grid, TextField } from '@material-ui/core';
import "./HikeCalculator.css"

const HikeCalculator = () => {

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
            <h6>
                {/* h4 */}
                {"Hike Calculator"}
            </h6>


            <div className='textStyle'>
                <div>
                    <label
                        type='text'>
                        {/* Current Salary */}
                    </label>
                    <input type='text'
                        className='newSalTxt'></input>
                    {/* <TextField
                        id="standard-basic"
                        value={currSal}
                        onChange={(e) => {
                            debugger
                            setcurrSal(parseInt(e.target.value))
                            console.log('currSal :>> ', currSal);
                        }}
                        variant="standard"
                        focused
                    /> */}
                </div>

                <div>
                    <label
                        className='lblNew'
                        type='text'>
                        {/* New Salary */}
                    </label>
                    <input type='text'
                        className='newSalTxt'></input>
                    {/* <TextField
                        id="standard-basic"
                        // label={"New Salary"}
                        value={newSal}
                        onChange={(e) => {
                            debugger
                            setnewSal(parseInt(e.target.value))
                            console.log('newSal :>> ', newSal);
                        }}
                        variant="standard"
                    >
                    </TextField> */}
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

        </div >
        // <CenterGrid>
        //     {"Hike Calculator"}
        //     <Grid container spacing={2}>
        //         <Grid item xs={6} md={4}>
        //             <TextField
        //                 id="standard-basic"
        //                 label={"Current Salary"}
        //                 variant="standard"
        //                 value={currSal}
        //                 onChange={(e) => {
        //                     debugger
        //                     setcurrSal(parseInt(e.target.value))
        //                     console.log('currSal :>> ', currSal);
        //                 }}
        //             />
        //         </Grid>
        //         <Grid item xs={9} md={7}>
        //             <TextField
        //                 label={"New Salary"}
        //                 value={newSal}
        //                 onChange={(e) => {
        //                     debugger
        //                     setnewSal(parseInt(e.target.value))
        //                     console.log('newSal :>> ', newSal);
        //                 }}>
        //             </TextField>
        //         </Grid>
        //     </Grid>

        //     <Grid container spacing={2}>
        //         <Grid item xs={6} md={4}>
        //             <Button
        //                 onClick={() => calculate()}
        //                 variant="contained">Calculate</Button>
        //             <p>Hike percentage is :{`${hikPrect}%` || null}</p>
        //         </Grid>
        //     </Grid>

        // </CenterGrid>

    );
};

export default HikeCalculator;