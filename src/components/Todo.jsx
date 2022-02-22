import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../Redux/action';

const Todo = () => {
    const [inputData, setInputData] = React.useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();
    return (
        <div>
            <figure>
                <figcaption>Add Todo</figcaption>
                <input
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    type="text"
                    placeholder="😏 add todo"
                />
                <button
                    onClick={() => dispatch(addTodo(inputData), setInputData(''))}
                    type="button"
                >
                    add todo
                </button>
            </figure>
            <div>
                {list.map((item) => {
                    return (
                        <div>
                            <div key={item.id}>{item.data}</div>
                            <button type="button" onClick={() => dispatch(deleteTodo(item.id))}>
                                x
                            </button>
                        </div>
                    );
                })}
            </div>
            <button onClick={() => dispatch(removeTodo())} type="button">
                remove all
            </button>
        </div>
    );
};

export default Todo;
