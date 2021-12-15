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
import { HomeOutlined, PlusCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

function App() {
    const dispatch = useDispatch();
    const { Header, Content, Sider } = Layout;

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
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{background: "#8fcae3"}}>
		  <nav>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{background: "#8fcae3"}}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusCircleOutlined />}>
              <Link to="/todo">Todo</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckSquareOutlined />}>
              <Link to="/done">Done</Link>
            </Menu.Item>
          </Menu>
		  </nav>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ margin: '0 0 16px', padding: 0, minHeight: 100, backgroundImage: "url(/mountains.jpg)", backgroundPosition: "50% 60%", position: "relative"}}><Title style={{position: "absolute", bottom: "0"}}>Todo List</Title></Header>
          <Content style={{ margin: '0 16px', background: "#fff" }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}

export default App;
