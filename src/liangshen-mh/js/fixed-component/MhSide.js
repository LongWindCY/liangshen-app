import React from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';

const {Sider} = Layout;
class MhSide extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
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
                        <Menu.Item key="3" onClick={this.showModal}>
                            <Icon type="home" />
                            <span>收货地址</span>
                            <Modal
                                title="默认收货地址"
                                centered
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <p>收货人：程长风</p>
                                <p>联系电话：13668097777</p>
                                <p>收货地址：重庆理工大学花溪校区</p>
                            </Modal>
                        </Menu.Item>
                    </Menu>
                </div>
            </Sider>
        );
    }
}

export default MhSide;