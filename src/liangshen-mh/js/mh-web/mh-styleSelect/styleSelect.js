import React from "react";
import {Card, Col, Row, Steps, Popover, Layout,Button, message} from "antd";

const {Content}=Layout;
const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: '样式选择',
}, {
    title: 'Second',
    content: '布料选择',
}, {
    title: 'Third',
    content: '颜色选择',
}, {
    title: 'Fourth',
    content: '尺寸输入',
}, {
    title: 'Fifth',
    content: '保存数据，请在购物车中确认订单',
}];

class StyleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <Content style={{ margin: '0px', padding: "50px 250px", minHeight: 450, }}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={12}>
                            <Card style={{ width: 390 ,height:370,background: '#F0F2F5', border:0}}>
                                <img src={URL}/>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card style={{ width: 360 ,height:370,background: '#F0F2F5', border:0}}>
                                <h1>藏青色平纹礼盒</h1>
                                <hr style={{marginBottom:20}}/>
                                <span>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo. Proin
                        sodales pulvinar sic tempor. Sociis natoque
                        penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum, nulla
                        luctus pharetra vulputate, felis tellus mollis orci,
                        sed rhoncus pronin sapien nunc accuan eget.</span><p/>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <Content style={{ margin: '0px', padding: "50px 100px", minHeight: 250, }}>
                    <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <Content style={{height:'300px'}}>
                        <div className="steps-content">{steps[current].content}</div>
                        <Card style={{ width: 300 }}>
                            <p className="steps-content">{steps[current].content}</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Content>
                    <div className="steps-action">
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                        }
                        {
                            current > 0
                            && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            )
                        }
                    </div>
                </Content>
            </div>
        );
    }
}

export default StyleSelect;
