import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CONTENT_LIST } from "../constants/constants";
import { addTodo } from "../apis/todos";
import { Button, Input } from "antd";

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
        <div>
            <Input size="small" style={{ width: "20%" }} type="text" id="content" value={inputContent} onChange={e => handleInputContent(e)}></Input>
            <Button type="primary" value="add" onClick={addContent}>add</Button>
        </div>
    );
}

export default TodoGenerator;