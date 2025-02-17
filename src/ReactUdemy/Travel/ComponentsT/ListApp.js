import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "../indexTravel.css";
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

function ListApp() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems(items => [...items, item]);
    }

    function handleDeleteItem(id) {
        console.log('id', id)
        setItems(items => items.filter((item) => item.id !== id))
    }

    function handleToggleItem(id) {
        debugger
        setItems((items) =>
            items.map((item) =>
                item.id === id ?
                    { ...item, packed: !item.packed } : item))
    }

    function handleClearList() {
        const confirmed = window.confirm("Are you sure you want to delete all items?")
        if (confirmed) setItems([])
    }

    return (
        <div className="lstapp">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats />
        </div>
    );
}

export default ListApp;
