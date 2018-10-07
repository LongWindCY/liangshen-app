import React from 'react';
import {Layout, Menu, Icon, Modal, Input, Checkbox, Button, Form} from 'antd';

const {Sider} = Layout;
const FormItem = Form.Item;
class MhSide extends React.Component {
    state = { visible: false,
              visibleuser: false}

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    showModalUser = () => {
        this.setState({
            visibleUser: true,
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

    handleOkUser = (e) => {
        console.log(e);
        this.setState({
            visibleUser: false,
        });
    }

    handleCancelUser = (e) => {
        console.log(e);
        this.setState({
            visibleUser: false,
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
                    >
                        <Menu.Item key="1" onClick={this.showModalUser}>
                            <Icon type="user" />
                            <span>个人信息</span>
                            <Modal
                                title="登录"
                                centered
                                visible={this.state.visibleUser}
                                onOk={this.handleOkUser}
                                onCancel={this.handleCancelUser}
                            >
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    </FormItem>
                                    <FormItem>
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    </FormItem>
                                    <FormItem>
                                        <Checkbox>Remember me</Checkbox>
                                        <a className="login-form-forgot" href="">Forgot password</a>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                        </Button>
                                        Or <a href="">register now!</a>
                                    </FormItem>
                                </Form>
                            </Modal>
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