import React from 'react';
import MhSide from './fixed-component/MhSide';
import MhHeader from './fixed-component/MhHeader';
import MhFooter from './fixed-component/MhFooter';
import Home from './mh-web/mh-home/Home';
import '../css/App.css';
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Sider, Header, Content, Footer}=Layout;

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Sider collapsed= 'true'>
                    <MhSide/>
                </Sider>
                <Layout>
                    <Header>
                        <MhHeader/>
                    </Header>
                    <Content>
                        <Home/>
                    </Content>
                    <Footer>
                        <MhFooter/>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
