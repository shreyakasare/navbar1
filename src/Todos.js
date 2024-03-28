import React, { useReducer } from "react";

const initialState = [];

const TODOS_ACTIONS = {
    ADD_TASK: "ADD_TASK",
    DELETE_TASK: "DELETE_TASK",
    RESET_TASK: "RESET_TASK",
};
function reducer(state, action) {
    debugger;
    switch (action.type) {
        case TODOS_ACTIONS.ADD_TASK:
            return [
                ...state, //if clone is not added the previous state will not display
                {
                    id: state.length + 1,
                    name: action.payload,
                },
            ];
        case TODOS_ACTIONS.DELETE_TASK:
            return state.filter((d) => d.id !== action.payload);

        case TODOS_ACTIONS.RESET_TASK:
            return init(action.payload);

        default:
            return state;
    }
}

function init(initialState) {       //Reset
    debugger;
    return initialState;
}

const Todos = () => {
    debugger;
    const [todos, dispatch] = useReducer(reducer, initialState, init);

    return (
        <>
            <div>Todos {todos.length}</div>
            Add New Task:
            <input
                className="inputBoxL"
                type="text"
                onBlur={(e) =>
                    dispatch({ type: TODOS_ACTIONS.ADD_TASK, payload: e.target.value })
                }
            /><br />
            <button
                className="btnLogin"
                onClick={() =>
                    dispatch({ type: TODOS_ACTIONS.RESET_TASK, payload: initialState })
                }
            >
                Reset
            </button>
            <hr />
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.name}
                    <span>
                        <button
                            className="btnLogin"
                            onClick={() =>
                                dispatch({ type: TODOS_ACTIONS.DELETE_TASK, payload: todo.id })
                            }
                        >
                            Delete
                        </button>
                    </span>
                </li>
            ))}
        </>
    );
};

export default Todos;
