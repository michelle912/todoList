// import { useEffect, useState } from "react";

function TodoItem (props) {
    // const [content, setContent] = useState("");

    // useEffect(
    //     () => {
    //         setContent(props.content);
    //     }, [props.content]
    // );


    return (
        <div>
            <input type="text" readOnly="readonly" value={props.content}></input>
        </div>
    );
}

export default TodoItem;