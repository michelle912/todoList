import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../apis/todos";
import { DELETE_CONTENT, TOGGLE_STATUS, UPDATE_CONTENT } from "../constants/constants";
import "../styles/TodoItem.css";
import { MinusOutlined } from '@ant-design/icons';
import Modal from "antd/lib/modal/Modal";
import TextArea from "antd/lib/input/TextArea";
import { EditOutlined } from '@ant-design/icons';

function TodoItem (props) {
    const dispatch = useDispatch();
    const [componentClass, setComponentClass] = useState("Todo-NotDone");
    const [inputContent, setInputContent] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
        updateTodoContent();
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    function handleInputContent(event) {
        setInputContent(event.target.value);
    }


    function toggleStatus() {
        let content = Object.assign({}, props.content);
        content.done = !content.done;
        updateTodo(content).then(() => {
            dispatch({type: UPDATE_CONTENT, payload: content});
            if (content.done) {
                setComponentClass("Todo-Done");
            }
            else {
                setComponentClass("Todo-NotDone");
            }
        });               
    }

    function updateTodoContent() {
        console.log(inputContent);
        let content = Object.assign({}, props.content);
        content.text = inputContent;
        updateTodo(content).then(() => {
            dispatch({type: UPDATE_CONTENT, payload: content})
        })
    }

    function deleteTodoItem() {
        deleteTodo(props.content.id).then(() => {
            dispatch({type: DELETE_CONTENT, payload: props.content.id});
        });        
    }


    return (
        <div>
            <Input size="small" style={{ width: "20%" }} type="text" readOnly="readonly" value={props.content.text} className={componentClass} onClick={toggleStatus}></Input>
            <Button shape="circle" onClick={showModal}><EditOutlined /></Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}><TextArea value={inputContent} onChange={e => handleInputContent(e)}></TextArea></Modal>
            <Button shape="circle"  onClick={deleteTodoItem}>{<MinusOutlined />}</Button>
        </div>
    );
}

export default TodoItem;