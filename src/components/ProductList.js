import React, { useEffect, useRef, useState } from "react";
import MERN from "../MERN";
import "./signup.css";
import { popUp } from "./PopUp";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [myNum, setMyNum] = useState(0);

    const inputOne = useRef();
    const inputTwo = useRef();

    const getNumBox = () => {
        console.log('Hello :>> ');
        console.log('inputOne', inputOne.current)
    }

    const getTextBox = () => {
        console.log('World :>> ');
        console.log('inputTwo', inputTwo.current)
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    };


    console.warn("Product List", products);

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
            popUp({
                message: [`Deleted Successfully!`],
                icons: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    return;
                }
            });
        }
        console.warn(id);
    }
    return (
        <>
            <MERN />
            <div className="product-list">
                <div>ProductList</div>
                <table aria-label="custom pagination table">

                </table>
                <ul>
                    <li>S. No</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Operation</li>
                </ul>

                {products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={`/update/${item._id}`}>Update</Link>
                        </li>
                    </ul>
                )}

                <input value={myNum} type="number" name="" id=""
                    onChange={(e) => setMyNum(e.target.value)}
                    ref={inputOne} />

                <input value={myNum} type="text" name="" id=""
                    onChange={(e) => setMyNum(e.target.value)}
                    ref={inputTwo}
                />
                <h3>Value {myNum}</h3>

                <button onClick={() => getNumBox()} type="button">Rupees</button>
                <button onClick={() => getTextBox()} type="button">Dollars</button>
            </div>
        </>
    );
    // return (
    //     <>
    //         <MERN />
    //         <div className="product-list">
    //             <div>ProductList</div>

    //             <ul>
    //                 <li>S. No</li>
    //                 <li>Name</li>
    //                 <li>Price</li>
    //                 <li>Category</li>
    //                 <li>Operation</li>
    //             </ul>

    //             {products.map((item, index) =>
    //                 <ul key={item._id}>
    //                     <li>{index + 1}</li>
    //                     <li>{item.name}</li>
    //                     <li>{item.price}</li>
    //                     <li>{item.category}</li>
    //                     <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
    //                         <Link to={`/update/${item._id}`}>Update</Link>
    //                     </li>
    //                 </ul>
    //             )}

    //             <input value={myNum} type="number" name="" id=""
    //                 onChange={(e) => setMyNum(e.target.value)}
    //                 ref={inputOne} />

    //             <input value={myNum} type="text" name="" id=""
    //                 onChange={(e) => setMyNum(e.target.value)}
    //                 ref={inputTwo}
    //             />
    //             <h3>Value {myNum}</h3>

    //             <button onClick={() => getNumBox()} type="button">Rupees</button>
    //             <button onClick={() => getTextBox()} type="button">Dollars</button>
    //         </div>
    //     </>
    // );
};

export default ProductList;
