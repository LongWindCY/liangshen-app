import React from 'react';
import {Layout,Form, Icon, Input, Button, Checkbox, Card} from 'antd';

const {Content} =Layout;
const FormItem = Form.Item;

class Massage extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render(){
        return(
          <Content>
              <Card style={{ width: 300 }}>
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
              </Card>
          </Content>
        );
    }
}

export default Massage;