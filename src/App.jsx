import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import InputFild from "./components/InputFild";

export const App = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({ text }));
        setText('');
    };

    return (
        <div className="App">
            <InputFild text={text} hendelInput={setText} hendelSubmit={addTask} />
            <TodoList />
        </div>
    );
};
