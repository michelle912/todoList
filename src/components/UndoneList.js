import { Input } from "antd";
import { useSelector } from "react-redux";

function UndoneList() {
    const contentList = useSelector(state => state.contentList);

    return (
        <div>
            {contentList.filter((content) => content.done === false).map((item, index) => {
                return <div><Input key={"Undone"+item.id + index} size="small" style={{ width: "20%" }} type="text" readOnly="readonly" value={item.text}></Input></div>
            })}
        </div>
    );
}

export default UndoneList;