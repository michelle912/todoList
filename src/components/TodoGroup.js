import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoGroup () {

    const contentList = useSelector(state => state.contentList);


    return (
        <div>
            {contentList.map((item, index) => {
                return <TodoItem key={item.id + index} content={item}></TodoItem>;
            })}
        </div>
    );
}

export default TodoGroup;