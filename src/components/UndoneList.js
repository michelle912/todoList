import { useSelector } from "react-redux";

function UndoneList() {
    const contentList = useSelector(state => state.contentList);

    return (
        <div>
            {contentList.filter((content) => content.done === false).map((item, index) => {
                return <div><input key={item.id + index} type="text" readOnly="readonly" value={item.text}></input></div>
            })}
        </div>
    );
}

export default UndoneList;