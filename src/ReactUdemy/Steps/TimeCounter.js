import React, { useState } from "react";

const TimeCounter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset() {
        setCount(0);
        setStep(1)
    }
    const date = new Date("June 7 2022");
    date.setDate(date.getDate() + count);

    return (
        <div className="stepsctr">
            <div className="buttonsctr">
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />

                {/* <button
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                    onClick={() => setStep((c) => c - 1)}> - </button> */}
                <span>Step: {step}</span>
                {/* <button
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                    onClick={() => setStep((c) => c + 1)}
                >
                    {" "}
                    +{" "}
                </button> */}
            </div>

            <div className="buttonsctrtwo">
                <button
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                    onClick={() => setCount((c) => step)}
                >
                    {" "}
                    -{" "}
                </button>
                <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
                {/* <span>Count: {count}</span> */}
                <button
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                    onClick={() => setCount((c) => step)}
                >
                    {" "}
                    +{" "}
                </button>
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                            ? `${count} days from today is `
                            : `${Math.abs(count)} days ago was`}
                </span>
                <span>{date.toDateString()}</span>
            </p>

            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={() => handleReset()}></button>
                </div>
            ) : null}
        </div>
    );
};

export default TimeCounter;
