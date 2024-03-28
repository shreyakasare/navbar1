import React from 'react'
import { useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [todos, getTodosList] = useState([]);
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        getToDos();
    }, [])

    const getToDos = async () => {
        const response =
            await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log('response :>> ', response);
        getTodosList(response.data)
    }

    const fetchComments = async (currentPage) => {
        debugger
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=12`);
        const data = await res.json();
        const total = res.headers.get('x-total-count')
        console.log('total :>> ', total);
        setPageCount(Math.ceil(total / 12));
        return data;
        // getTodosList(data)
    }

    const handleClick = async (data) => {
        console.log('data.selected :>> ', data.selected);
        // to get page no selected
        let currentPage = data.selected + 1;
        const commentsFromServer = await fetchComments(currentPage);
        getTodosList(commentsFromServer)
    }

    const cards = todos.map(product => (
        <div className="col-md-3" style={{ marginBottom: '15px' }}>
            <Card key={product.id} className="h-100">
                <Card.Body>
                    <Card.Text>ID: {product.id}</Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Body>
            </Card>
        </div >
    ))

    return (
        <>
            {/* <h1> Pagination Component</h1> <br /> */}
            <ul>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={200}
                    // pageCount={pageCount}
                    marginPagesDisplayed={4}
                    pageRangeDisplayed={4}
                    onPageChange={handleClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    activeClassName='active'
                />
                <div className="row">
                    {cards}
                </div>
            </ul>

        </>
    );
}
export default Dashboard;