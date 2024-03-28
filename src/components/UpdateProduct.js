import React, { useEffect, useRef } from "react";
import "./signup.css";
import MERN from "../MERN";
import "./updateProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../CartProject/store/productSlice";

const UpdateProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.log("params", params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.log("Result", result);
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    //Ref's
    const prd_Name = useRef(null);
    const prd_Price = useRef(null);
    const prd_Category = useRef(null);
    const prd_Company = useRef(null);

    const clearState = () => {
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
    }

    const updateProduct = async () => {
        debugger
        console.warn(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json()
        console.warn("Result Update", result);
        if (result) {
            navigate('/productList')
        }
    }

    return (
        <>
            <MERN />
            <div className="container">
                <div className="formdiv">
                    <div>Update Product</div>
                    <input
                        className="inputBoxP"
                        type="text"
                        placeholder="Enter Product Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        ref={prd_Name}
                    />{" "}
                    <br />
                    <input
                        className="inputBoxP"
                        type="text"
                        placeholder="Enter Product Price"
                        value={price}
                        ref={prd_Price}
                        onChange={(e) => { setPrice(e.target.value) }}

                    />{" "}
                    <br />
                    <input
                        className="inputBoxP"
                        type="text"
                        placeholder="Enter Product Category"
                        value={category}
                        ref={prd_Category}
                        onChange={(e) => { setCategory(e.target.value) }}

                    />{" "}
                    <br />
                    <input
                        className="inputBoxP"
                        type="text"
                        placeholder="Enter Product Company"
                        value={company}
                        ref={prd_Company}
                        onChange={(e) => { setCompany(e.target.value) }}

                    />{" "}
                    <br />
                    <button onClick={updateProduct} className="btnLogin">Update Product</button>
                    <button
                        onClick={() => clearState()}
                        className="btnLogin"
                        variant="contained">Clear</button>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;
