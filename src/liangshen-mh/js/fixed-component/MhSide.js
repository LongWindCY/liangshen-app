import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const {Sider} = Layout;
class MhSide extends React.Component {
    render() {
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed= 'true'
                style={{ position: 'fixed', height: '100%', width: '50px' }}
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

export default MhSide;