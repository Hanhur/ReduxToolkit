import { useDispatch } from "react-redux";
import { removeTodo, toggelTodoCompleted } from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggelTodoCompleted({id}))} />
            <span>{text}</span>
            <span className="delete" onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    );
}

export default TodoItem;
