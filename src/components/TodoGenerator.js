import { useState } from "react";

function TodoGenerator (props) {

    const [contentList, setContentList] = useState([]);

    function addContent() {
        var todoContent = document.getElementById('content').value;
        props.updateContentList(todoContent);
        document.getElementById('content').value = "";
    }


    return (
        <div>
            <input type="text" id="content"></input>
            <button type="button" value="add" onClick={addContent}>add</button>
        </div>
    );
}

export default TodoGenerator;