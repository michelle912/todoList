import { Button, Divider, Input } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useSelector } from "react-redux";
import { RightCircleOutlined } from '@ant-design/icons';

function DoneList() {

    const contentList = useSelector(state => state.contentList);

    return (
        <div>
            <div style={{display: "block", backgroundColor: "#8fcae3"}}>
                <Title level={3}><Text style={{color: "#fff", marginLeft: "8px"}}>Completed</Text></Title>
            </div>
            {contentList.filter((content) => content.done === true).map((item, index) => {
                return <div>
                    <Button disabled="true" type="ghost" icon={<RightCircleOutlined />} style={{color:"#8fcae3"}}></Button>
                    <Input key={"Done"+item.id + index} style={{ width: "40%", borderRadius: "5px", margin: "5px" }} type="text" readOnly="readonly" value={item.text}></Input>
                    </div>
            })}
        </div>
    );
}

export default DoneList;