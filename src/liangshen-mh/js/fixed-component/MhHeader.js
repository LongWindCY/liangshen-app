import {Layout, Menu} from "antd";
import React from "react";
import logo from '../../../img/logo.png'

const SubMenu = Menu.SubMenu;
const {Header} = Layout;
class MhHeader extends React.Component{
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        
                        <div className="hearderbar">
                        <div className="logo"
                             style={{
                                 margin: '16px 0 16px 500px',
                                 float: 'left'
                             }}><img alt="dfasf" src={logo} style={{width: '120px', height: '31px',float: 'left'}}/></div>
                            <Menu
                                theme="dark"
                                mode="horizontal"
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
        );
    }

}

export default MhHeader;