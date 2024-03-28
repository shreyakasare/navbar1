import React from 'react'
import { useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Dashboard.css';
import ReactConfetti from 'react-confetti';


const Dashboard = () => {
    const [data, setData] = useState([]);
    const [todos, getTodosList] = useState([]);
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [windowDimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [Btn, setBtn] = useState(false)
    const [confettiBtn, setConfettiBtn] = useState("Start");
    const detectSize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }

    const confettiBtnClick = () => {
        setBtn(!Btn);
        setConfettiBtn("Stop")
    }

    useEffect(() => {
        debugger
        window.addEventListener('resize', detectSize);
        return () => {
            getToDos();
            window.removeEventListener('rezise', detectSize)
        }
    }, [windowDimension])

    const getToDos = async () => {
        try {
            debugger
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            // const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
            const data = await response.data;
            // const total = response.headers.get('x-total-count');
            const total = response.data.length;
            setPageCount(total / 12)
            getTodosList(data)
        }
        catch (error) {
            console.log('error :>> ', error);
        }
    }

    const fetchComments = async (currentPage) => {
        debugger
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=12`);
        const data = await res.json();
        return data;
    }

    const handleClick = async (data) => {
        console.log('data.selected :>> ', data.selected);
        // to get page no selected
        let currentPage = data.selected + 1;
        const commentsFromServer = await fetchComments(currentPage);
        getTodosList(commentsFromServer)
    }


    const cards = todos.slice(0, 12).map(product => (
        // todos.slice(0, 12) to display 12 records
        <div key={product.id} className="col-md-3" style={{ marginBottom: '15px' }}>
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
            {/* <button onClick={() => setBtn(!Btn)}>Click Me</button> */}
            {/* <button onClick={() => setBtn(previousState => !previousState)}>Click Me</button> */}
            <button onClick={() => confettiBtnClick()}>{confettiBtn}</button>
            {Btn &&
                <ReactConfetti
                    // width={100}
                    width={windowDimension.width}
                    height={windowDimension.height}
                    tweenDuration={1000}
                />
            }
            {/* <h1> Pagination Component</h1> <br /> */}
            <ul>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    // pageCount={17}
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