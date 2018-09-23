import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
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
                    style={{ position: 'fixed', height: '100%' }}
                >
                    
                    <div className="leftbar">
                        <Menu theme="dark"
                            mode="inline"
                        // defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>个人信息</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="shopping-cart" />
                                <span>购物车</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="home" />
                                <span>收货地址</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Layout>
                            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                                <div className="logo"
                                    style={{
                                        width: '120px',
                                        height: '31px',
                                        background: 'rgba(255,255,255,.2)',
                                        margin: '16px 24px 16px 500px',
                                        float: 'left'
                                    }} />
                                <div className="hearderbar">
                                    <Menu
                                        theme="dark"
                                        mode="horizontal"
                                        // defaultSelectedKeys={['2']}
                                        style={{ lineHeight: '64px' }}
                                    >
                                        <SubMenu title={<span className="" key="1">定制服务</span>}>
                                            <Menu.Item key="11">婚礼西服</Menu.Item>
                                            <Menu.Item key="12">休闲西服</Menu.Item>
                                            <Menu.Item key="13">商务西服</Menu.Item>
                                        </SubMenu>
                                        <SubMenu title={<span className="" key="2">成品衣物</span>}>
                                            <Menu.Item key="21">婚礼西服</Menu.Item>
                                            <Menu.Item key="22">休闲西服</Menu.Item>
                                            <Menu.Item key="23">商务西服</Menu.Item>
                                        </SubMenu>
                                        <SubMenu title={<span className="" key="3">服装配饰</span>}>
                                            <Menu.Item key="31">皮鞋</Menu.Item>
                                            <Menu.Item key="32">领带</Menu.Item>
                                            <Menu.Item key="33">伞具</Menu.Item>
                                        </SubMenu>
                                        <SubMenu title={<span className="" key="4">专家团队</span>}>
                                            <Menu.Item key="41">婚礼西服</Menu.Item>
                                            <Menu.Item key="42">休闲西服</Menu.Item>
                                            <Menu.Item key="43">商务西服</Menu.Item>
                                        </SubMenu>
                                        <SubMenu title={<span className="" key="5">联系我们</span>}>
                                            <Menu.Item key="51">程昱</Menu.Item>
                                            <Menu.Item key="52">周林秋</Menu.Item>
                                            <Menu.Item key="53">王春成</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </div>
                            </Header>

                        </Layout>
                    </Header>
                    <Content>
                        {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <div style={{
                            background: '#fff',
                            padding: 24,
                            minHeight: 1000,
                            backgroundImage: "url(" + require("./img/city.png") + ")"
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
