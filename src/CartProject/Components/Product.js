import { useScrollTrigger } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { CenterGrid } from "../../proj-ui/GridLayout";
import { Alert, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { add } from "../store/cartSlice";
import { getProducts } from '../store/productSlice';
import StatusCode from "../utils/StatusCode";

const Product = () => {
    const dispatch = useDispatch();
    // const [products, getProducts] = useState([]);
    const { data: products, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, []);

    if (status === StatusCode.LOADING) {
        return <p>Loading</p>
    }

    if (status === StatusCode.ERROR) {
        return <Alert key="danger" variant="danger">Something went wrong!!!</Alert>
    }

    const addToCart = (product) => {
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '15px' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.image}
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
                        onClick={() => addToCart(product)}
                    >Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div >
    ))

    return (
        // <CenterGrid>
        <>
            <h1>Product</h1>
            {/* {JSON.stringify(products)} */}

            <div className="row">
                {cards}
            </div>
        </>
        // </CenterGrid>
    )
}

export default Product;