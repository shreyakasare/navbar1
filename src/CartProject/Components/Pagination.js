import React, { useEffect, useState } from "react";
import "./style.component.css";

function Pagination() {
    const [data, setData] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const [todos, getTodosList] = useState([]);

    useEffect(() => {
        getToDos();
    }, [])

    const getToDos = async () => {
        const response =
            await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log('response :>> ', response);
        getTodosList(response)
    }

    return (
        <>
            <h1> Pagination Component</h1> <br />
            <ul>
                {data.length > 0 &&
                    data.map((todo, index) => {
                        return <li key={index}>{todo.title}</li>;
                    })}
            </ul>

        </>
    );
}

export default Pagination;