import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import ReactPaginate from 'react-paginate';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        debugger
        getPostData();
    }, []);

    const getPostData = async () => {
        try {
            debugger
            const response = await axios.get
                ('https://jsonplaceholder.typicode.com/posts');
            const data = await response.data;
            const total = response.data.length;
            setPageCount(total / 12)
            console.log('Post Data :>> ', data);
            getPosts(data)

        }
        catch (error) {
            console.log('error :>> ', error);
        }
    }

    const handleClick = async (data) => {
        debugger
        console.log('data.selected :>> ', data.selected);
        // let currentPage = data.selected + 1;
        // const commentsFromServer = await fetchComments(currentPage)
    }

    const postData = posts.slice(0, 12).map(product => (
        // todos.slice(0, 12) to display 12 records
        <div key={product.id} className="col-md-3" style={{ marginBottom: '15px' }}>
            <Card key={product.id} className="h-100">
                <Card.Body>
                    <Card.Text>ID: {product.id}</Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Text>ID: {product.body}</Card.Text>
                </Card.Body>
            </Card>
        </div >
    ))
    return (
        <>
            <div>Posts</div>

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
                    {postData}
                </div>
            </ul>
        </>
    )
}

export default Posts