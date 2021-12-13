import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoGroup (props) {

    useEffect( () => {
    }
    , [props.contentList]);


    return (
        <div>
            {props.contentList.map((item, index) => {
                return <TodoItem key={item + index} content={item}></TodoItem>;
            })}
        </div>
    );
}

export default TodoGroup;