import React, { useState } from 'react'
import "../components/signup.css";
const Filter = () => {
    debugger
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon",
        "Shreya"
    ];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
        debugger
        if (event.target.value === "") {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter((item) =>
            item.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) !== -1)
        setFilterList(filteredValues)
    }
    return (
        <>
            <div>Filter</div>
            <div>
                <div>
                    Search: <input className="inputBoxL" name='query' type='text' onChange={handleSearch} />
                </div>
                {filterList &&
                    filterList.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
            </div>
        </>
    )
}

export default Filter