import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function TodoItem (props) {
    const [content, setContent] = useState("");

    useEffect(
        () => {
            setContent(props.content);
        }, [props.content]
    );


    return (
        <div>
            <input type="text" readOnly="readonly" value={content}></input>
        </div>
    );
}

export default TodoItem;