import { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_CONTENT, TOGGLE_STATUS } from "../constants/constants";
import "../styles/TodoItem.css";

function TodoItem (props) {
    const dispatch = useDispatch();
    const [componentClass, setComponentClass] = useState("Todo-NotDone");

    function toggleStatus() {
        let content = Object.assign({}, props.content);
        content.done = !content.done;
        dispatch({type: TOGGLE_STATUS, payload: content})
        if (content.done) {
            setComponentClass("Todo-Done");
        }
        else {
            setComponentClass("Todo-NotDone");
        }
        
    }

    function deleteTodo() {
        dispatch({type: DELETE_CONTENT, payload: props.content.id});
    }


    return (
        <div>
            <input type="text" readOnly="readonly" value={props.content.text} className={componentClass} onClick={toggleStatus}></input>
            <button value="x" onClick={deleteTodo}>X</button>
        </div>
    );
}

export default TodoItem;