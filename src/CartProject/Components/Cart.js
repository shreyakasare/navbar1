import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart)
    console.log('products :>> ', products);
    const dispatch = useDispatch();

    const removeToCart = (id) => {
        dispatch(remove(id));
    }

    const cards = products.map(product => {
        debugger
        return (

            <div className="col-md-12" style={{ marginBottom: '15px' }}>
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
                            variant="danger"
                            onClick={() => removeToCart(product.id)}
                        >Remove Item</Button>
                    </Card.Footer>
                </Card>
            </div >
        )
    })

    return (
        <>

            <h3>Cart</h3>
            <div className='row'>
                {cards}
            </div>
        </>
    )
}

export default Cart