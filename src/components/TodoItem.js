import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../apis/todos";
import { DELETE_CONTENT, TOGGLE_STATUS } from "../constants/constants";
import "../styles/TodoItem.css";
import { MinusOutlined } from '@ant-design/icons';

function TodoItem (props) {
    const dispatch = useDispatch();
    const [componentClass, setComponentClass] = useState("Todo-NotDone");

    function toggleStatus() {
        let content = Object.assign({}, props.content);
        content.done = !content.done;
        updateTodo(content).then(() => {
            dispatch({type: TOGGLE_STATUS, payload: content});
            if (content.done) {
                setComponentClass("Todo-Done");
            }
            else {
                setComponentClass("Todo-NotDone");
            }
        });               
    }

    function deleteTodoItem() {
        deleteTodo(props.content.id).then(() => {
            dispatch({type: DELETE_CONTENT, payload: props.content.id});
        });        
    }


    return (
        <div>
            <Input size="small" style={{ width: "20%" }} type="text" readOnly="readonly" value={props.content.text} className={componentClass} onClick={toggleStatus}></Input>
            <Button shape="circle"  onClick={deleteTodoItem}>{<MinusOutlined />}</Button>
        </div>
    );
}

export default TodoItem;