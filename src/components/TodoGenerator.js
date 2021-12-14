import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CONTENT_LIST } from "../constants/constants";
import { v4 as uuidv4 } from 'uuid';

function TodoGenerator () {

    const [inputContent, setInputContent] = useState("");
    const buttonStyle = {backgroundColor:" #008CBA",borderRadius: "8px", color: "white"};

    const dispatch = useDispatch();

    function handleInputContent(event) {
        setInputContent(event.target.value);
    }

    function addContent() {
        if (inputContent === "") {
            return;
        } 
        let newContent = {id: uuidv4(), text: inputContent, done: false};
        dispatch({type: UPDATE_CONTENT_LIST, payload: newContent});
        setInputContent("");
    }


    return (
        <div>
            <input type="text" id="content" value={inputContent} onChange={e => handleInputContent(e)}></input>
            <button type="button" value="add" onClick={addContent} style={buttonStyle}>add</button>
        </div>
    );
}

export default TodoGenerator;