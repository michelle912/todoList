import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoGroup from "./TodoGroup";

function DoneList() {

    const contentList = useSelector(state => state.contentList);

    return (
        <div>
            {contentList.filter((content) => content.done === true).map((item, index) => {
                return <div><input key={item.id + index} type="text" readOnly="readonly" value={item.text}></input></div>
            })}
        </div>
    );
}

export default DoneList;