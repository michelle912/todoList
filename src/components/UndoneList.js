import { Input } from "antd";
import { useSelector } from "react-redux";

function UndoneList() {
    const contentList = useSelector(state => state.contentList);

    return (
        <div>
            {contentList.filter((content) => content.done === false).map((item, index) => {
                return <div>
                    <Input key={"Undone"+item.id + index} style={{ width: "40%", borderRadius: "5px", margin: "5px" }} type="text" readOnly="readonly" value={item.text} />
                    </div>
            })}
        </div>
    );
}

export default UndoneList;