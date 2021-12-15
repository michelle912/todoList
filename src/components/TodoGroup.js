import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoGroup () {

    const contentList = useSelector(state => state.contentList);


    return (
        <div>
            <div style={{display: "block", backgroundColor: "#8fcae3"}}>
                <Title level={3}><Text style={{color: "#fff", marginLeft: "8px"}}>Todo</Text></Title>
            </div>
            {contentList.map((item, index) => {
                return <TodoItem key={item.id + index} content={item}></TodoItem>;
            })}
        </div>
    );
}

export default TodoGroup;