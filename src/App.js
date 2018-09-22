import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

class App extends React.Component {
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"
                         style={{width: '120px',
                             height: '31px',
                             background: 'rgba(255,255,255,.2)',
                             margin: '16px 24px 16px 0',
                             float: 'left'}} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>個人信息</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>購物車</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>收貨地址</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Layout>
                            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                                <div className="logo"
                                    style={{width: '120px',
                                        height: '31px',
                                        background: 'rgba(255,255,255,.2)',
                                        margin: '16px 24px 16px 0',
                                        float: 'left'}}/>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">定制服務</Menu.Item>
                                    <Menu.Item key="2">成品衣物</Menu.Item>
                                    <Menu.Item key="3">服裝配飾</Menu.Item>
                                    <Menu.Item key="4">專家團隊</Menu.Item>
                                    <Menu.Item key="5">聯繫我們</Menu.Item>
                                </Menu>
                            </Header>

                        </Layout>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
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
