import React from 'react'
import { useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';

const Dashboard = () => {

    const [products, getProducts] = useState([]);

    useEffect(() => {
        getAllProductList();
    }, [])

    const getAllProductList = async () => {
        const response =
            await axios.get('https://dummyjson.com/products/');
        console.log('response :>> ', response);
        getProducts(response.data.products)
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '15px' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.images[1]}
                        style={{ width: '90px', height: '100px' }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center" style={{ background: 'white' }}>
                    <Button
                        variant="primary"
                    // onClick={() => addToCart(product)}
                    >Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div >
    ))

    return (
        <>
            <div>Dashboard</div>
            <div className="row">
                {cards}
            </div>

        </>
    )
}

export default Dashboard