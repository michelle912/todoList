import { Button, Input } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useSelector } from "react-redux";
import { RightCircleOutlined } from '@ant-design/icons';

function UndoneList() {
    const contentList = useSelector(state => state.contentList);

    return (
        <div>
            <div style={{display: "block", backgroundColor: "#8fcae3"}}>
                <Title level={3}><Text style={{color: "#fff", marginLeft: "8px"}}>To Be Completed</Text></Title>
            </div>
            {contentList.filter((content) => content.done === false).map((item, index) => {
                return <div>
                    <Button size="large" disabled="true" type="ghost" icon={<RightCircleOutlined />} style={{color:"#8fcae3"}}></Button>
                    <Input size="large" key={"Undone"+item.id + index} style={{ width: "40%", borderRadius: "5px", margin: "5px" }} type="text" readOnly="readonly" value={item.text} />
                    </div>
            })}
        </div>
    );
}

export default UndoneList;