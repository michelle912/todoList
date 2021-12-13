import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList(props) {
    const [contentList, setContentList] = useState([]);

    
    function updateContentList(newContent) {
        setContentList( (prevList) => ([...prevList, newContent]));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup contentList={contentList}></TodoGroup>
            <TodoGenerator updateContentList={updateContentList}></TodoGenerator>
        </div>
    );
}

export default TodoList;