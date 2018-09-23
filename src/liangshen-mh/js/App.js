import React from 'react';
import MhSider from './fixed-component/MhSider';
import MhHeader from './fixed-component/MhHeader';
import '../css/App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout>
                <MhSider/>
                <Layout>
                    <MhHeader/>
                    <Content>
                        <div style={{
                            background: '#fff',
                            padding: 24,
                            minHeight: 1000,
                            backgroundImage: "url(" + require("../../img/city.png") + ")"
                        }}>Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
