import { useState } from "react";

function TodoGenerator (props) {

    const [inputContent, setInputContent] = useState("");
    const buttonStyle = {backgroundColor:" #008CBA",borderRadius: "8px", color: "white"};

    function addContent() {
        props.updateContentList(inputContent);
        setInputContent("");
    }


    return (
        <div>
            <input type="text" id="content" value={inputContent} onChange={e => setInputContent(e.target.value)}></input>
            <button type="button" value="add" onClick={addContent} style={buttonStyle}>add</button>
        </div>
    );
}

export default TodoGenerator;