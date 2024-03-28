import React from "react";
import img from "../Assets/down-arrow.png";
const Arr = () => {
    const pets = ["cat", "dog", "bird", "dog"];

    const dog = pets.find((pet) => pet === "dog");
    console.log("dogip", dog);

    const numbers = [1, 8, 2, 10, 2];
    const two = numbers.filter((num) => num === 2);
    console.log("two", two);

    const doubleDigits = numbers.filter((num) => num > 9);
    console.log("doubleDigits", doubleDigits);

    const hundreds = numbers.filter((num) => num > 100);
    console.log("hundreds", hundreds);

    const fruit = ["apple", "banana", "pear", "orange", "banana"];
    const hasBanana = fruit.includes("banana");
    const hasBanana1 = fruit.includes("kiwi");
    console.log("hasBanana", hasBanana);
    console.log("hasBanana1", hasBanana1);

    const bananaIndex = fruit.indexOf("banana");

    const lemonIndex = fruit.indexOf("lemon");

    console.log("bananaIndex", bananaIndex);
    console.log("lemonIndex", lemonIndex);
    return (
        <div>
            <div>Arr</div>
            <section>

                <div className="wrapper">
                    <div className='collapsible'>
                        <input type="checkbox" id="collapsible-head" />
                        <label for="collapsible-head">Find
                            <img className='image' src={img} alt="downarrow"></img>
                        </label>
                        <div className="collapsible-text">
                            <h5>Find</h5>
                            <p> const pets = ['cat', 'dog', 'bird', 'dog'];</p>
                            <p>const dog = pets.find(pet => pet === "dog")</p>
                            {dog} <br />
                        </div>
                    </div>
                    <div className='collapsible'>
                        <input type="checkbox" id="collapsible-head" />
                        <label for="collapsible-head">Filter
                            <img className='image' src={img} alt="downarrow"></img>
                        </label>
                        <div className="collapsible-text">
                            <h5>Filter</h5>
                            <p>const numbers = [1, 8, 2, 10, 2];</p>
                            <p> const two = numbers.filter((num) => num === 2)</p>
                            {two} <br />
                            <p>  const doubleDigits = numbers.filter((num) => num > 9)</p>
                            {doubleDigits} <br />

                            <p>const hundreds = numbers.filter((num) => num > 100)</p>
                            {hundreds} <br />
                            {dog} <br />
                        </div>
                    </div>
                </div>



                <p> const fruit = ['apple', 'banana', 'pear', 'orange', 'banana'];</p>
                <p> const hasBanana = fruit.includes('banana');</p>
                <p> const hasBanana1 = fruit.includes('kiwi');</p>
                {hasBanana} <br />

                <p>const bananaIndex = fruit.indexOf('banana');</p>
                {bananaIndex} <br />

                <p>const lemonIndex = fruit.indexOf('lemon');</p>
                {lemonIndex} <br />
            </section>
        </div >
    );
};

export default Arr;
