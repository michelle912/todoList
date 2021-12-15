import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { getTodos } from './apis/todos';
import './App.css';
import { INIT_CONTENT_LIST } from './constants/constants';
import Done from './routes/Done';
import Home from './routes/Home';
import Undone from './routes/Undone';

function App() {
    const dispatch = useDispatch();
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };

      useEffect(() => {
            getTodos().then((response) => {
                dispatch({type:INIT_CONTENT_LIST, payload: response.data});
            })
      });


    return (
        <><div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/todo">Todo</Link> |{" "}
                <Link to="/done">Done</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                <Home></Home>
                </Route>
                <Route exact path="/done">
                <Done />
                </Route>
                <Route exact path="/todo">
                <Undone />
                </Route>
            </Switch>
        </div></>
    );
}

export default App;
