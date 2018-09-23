import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const {Sider} = Layout;

class MhSider extends React.Component {
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
        );
    }
}

export default MhSider;