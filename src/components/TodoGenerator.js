import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CONTENT_LIST } from "../constants/constants";
import { addTodo } from "../apis/todos";
import { Button, Input } from "antd";
import { PlusOutlined } from '@ant-design/icons';

function TodoGenerator () {

    const [inputContent, setInputContent] = useState("");

    const dispatch = useDispatch();

    function handleInputContent(event) {
        setInputContent(event.target.value);
    }

    function addContent() {
        if (inputContent === "") {
            return;
        } 
        addTodo({text: inputContent, done: false}).then((response) => {
            dispatch({type: UPDATE_CONTENT_LIST, payload: response.data});
        });        
        setInputContent("");
    }


    return (
        <div style={{width: "90%" , bottom: "0%", marginLeft: "0px" , position: "fixed" }}>
            <Input.Group compact>
                <Input size="large" style={{ width: "80%"}} type="text" id="content" value={inputContent} onChange={e => handleInputContent(e)} placeholder="Add new content..."></Input>
                <Button size="large" type="primary" value="add" icon={<PlusOutlined />} onClick={addContent} style={{backgroundColor: "#8fcae3"}}></Button>
            </Input.Group>
        </div>
    );
}

export default TodoGenerator;