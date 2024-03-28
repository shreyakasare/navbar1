import React, { useEffect, useRef, useState } from "react";
import "./signup.css";
import "./addPrd.scss";
import { popUp } from "./PopUp";
import { Validator } from "./Validator";
import MERN from "../MERN";

const AddProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [errorMessages1, setErrorMessages1] = useState([]);
    const [hasError, setHasError] = useState(false);

    const [validator] = useState(() => new Validator());


    //Ref's
    const prd_Name = useRef(null);
    const prd_Price = useRef(null);
    const prd_Category = useRef(null);
    const prd_Company = useRef(null);

    useEffect(() => {
        validateFields();
    }, []);

    const validate = () => {
        debugger
        setErrorMessages1([]);
        const result = validator.validate();
        if (result.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    const showErrorSnack = (props, fieldName, message) => {
        debugger
    }

    const addErrorMessage = (fieldName, message, errorMessages) => {
        debugger
        if (errorMessages) {
            const index = errorMessages.findIndex(item => item.fieldName === fieldName);
            console.log("index", index)
            let newErrors = [],
                errorOccured = false;
            if (index === -1) {
                newErrors.push({ fieldName, message });
                if (newErrors.length === 1) {
                    errorOccured = true
                }
            }
            else {
                errorMessages[index] = { fieldName, message }
            }
            return [errorOccured, newErrors]
        }
    }

    const removeErrorMessage = (fieldName, errorMessages) => {
        debugger
        if (errorMessages) {
            const index = errorMessages.findIndex(item => item.fieldName === fieldName);
            let errorOccured;
            if (index !== -1) {
                errorMessages.splice(index, 1);
                if (errorMessages.length === 0) {
                    errorOccured = false
                }
            }
            return errorOccured
        }
    }

    const field_validate = (props, result, fieldName, errorMessages) => {
        debugger
        if (!result.isValid) {
            showErrorSnack(props, fieldName, result.errorCode);
            return addErrorMessage(fieldName, result.errorCode, errorMessages)
        }
        else {
            return removeErrorMessage(fieldName, errorMessages);
        }
    }

    const fieldToValidate = (e, fieldName) => {
        debugger
        let setSlider = field_validate(props, e, props.t(fieldName), errorMessages);
        if (setSlider && setSlider[0]) {
            setHasError(true);
        } else {
            setHasError(false);
        }
        if (setSlider && setSlider[1]) {
            setErrorMessages(setSlider[1]);
        }
    };

    const validateFields = () => {
        validator.add(prd_Name);
        validator.add(prd_Price);
        validator.add(prd_Category);
        validator.add(prd_Company);

    };

    const clearState = () => {
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
    }
    const addProduct = async () => {
        debugger
        let isValid = validate();
        if (isValid) {
            console.warn(name, price, category, company);

            if (!name || !price || !category || !company) {
                popUp({
                    message: [`Please Fill The Fields`],
                }).then((result) => {
                    setError(true);
                    if (result.isConfirmed) {
                        return;
                    }
                });
                return false
            }
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            console.log('userId :>> ', userId);

            let result = await fetch("http://localhost:5000/add-product", {
                method: "post",
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    "Content-type": "application/json"
                }
            });
            result = await result.json();
            console.log('result :>> ', result);
        }
        else { }
    }

    return (
        <>
            <MERN />
            <form
                id="login_form"
                name="login_form"
                autocomplete="off">

                <div>AddProduct</div>

                <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}

                    id="username"
                    className="username"
                    name="username"
                    size="20"
                    autocapitalize="off"
                    autocorrect="off"
                    autocomplete="on"
                    autofocus="on"
                    required


                    onChange={(e) => { setName(e.target.value) }}
                    ref={prd_Name}
                    onValidate={(e) => fieldToValidate(e, "prd_Name")}
                />{" "}
                <br />
                <input
                    className="inputBoxL"
                    type="text"
                    placeholder="Enter Product Price"
                    value={price}
                    ref={prd_Price}
                    onValidate={(e) => fieldToValidate(e, "prd_Price")}
                    onChange={(e) => { setPrice(e.target.value) }}

                />{" "}
                <br />
                <input
                    className="inputBoxL"
                    type="text"
                    placeholder="Enter Product Category"
                    value={category}
                    ref={prd_Category}
                    onValidate={(e) => fieldToValidate(e, "prd_Category")}
                    onChange={(e) => { setCategory(e.target.value) }}

                />{" "}
                <br />
                <input
                    className="inputBoxL"
                    type="text"
                    placeholder="Enter Product Company"
                    value={company}
                    ref={prd_Company}
                    onValidate={(e) => fieldToValidate(e, "prd_Company")}
                    onChange={(e) => { setCompany(e.target.value) }}

                />{" "}
                <br />
                <button onClick={addProduct} className="btnLogin">Add Product</button>
                <button
                    onClick={() => clearState()}
                    className="btnLogin"
                    variant="contained">Clear</button>

            </form>
        </>
    );

    // return (
    //     <>
    //         <MERN />
    //         <div className="product">
    //             <div>AddProduct</div>
    //             <input
    //                 className="inputBoxL"
    //                 type="text"
    //                 placeholder="Enter Product Name"
    //                 value={name}
    //                 onChange={(e) => { setName(e.target.value) }}
    //                 ref={prd_Name}
    //                 onValidate={(e) => fieldToValidate(e, "prd_Name")}
    //             />{" "}
    //             <br />
    //             <input
    //                 className="inputBoxL"
    //                 type="text"
    //                 placeholder="Enter Product Price"
    //                 value={price}
    //                 ref={prd_Price}
    //                 onValidate={(e) => fieldToValidate(e, "prd_Price")}
    //                 onChange={(e) => { setPrice(e.target.value) }}

    //             />{" "}
    //             <br />
    //             <input
    //                 className="inputBoxL"
    //                 type="text"
    //                 placeholder="Enter Product Category"
    //                 value={category}
    //                 ref={prd_Category}
    //                 onValidate={(e) => fieldToValidate(e, "prd_Category")}
    //                 onChange={(e) => { setCategory(e.target.value) }}

    //             />{" "}
    //             <br />
    //             <input
    //                 className="inputBoxL"
    //                 type="text"
    //                 placeholder="Enter Product Company"
    //                 value={company}
    //                 ref={prd_Company}
    //                 onValidate={(e) => fieldToValidate(e, "prd_Company")}
    //                 onChange={(e) => { setCompany(e.target.value) }}

    //             />{" "}
    //             <br />
    //             <button onClick={addProduct} className="btnLogin">Add Product</button>
    //             <button
    //                 onClick={() => clearState()}
    //                 className="btnLogin"
    //                 variant="contained">Clear</button>

    //         </div>
    //     </>
    // );
};

export default AddProduct;
