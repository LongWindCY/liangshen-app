import React from "react";
import {Card, Col, Row, Steps, Popover} from "antd";

const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
    <Popover content={<span>step {index} status: {status}</span>}>
        {dot}
    </Popover>
);

class StyleSelect extends React.Component {
    render() {
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
                    <Row gutter={16}>
                        <Col className="gutter-row" span={9}>
                            <Steps current={1} progressDot={customDot}>
                                <Step title="样式选择" description="" />
                                <Step title="布料选择" description="" />
                                <Step title="颜色选择" description="" />
                                <Step title="尺寸输入" description="" />
                                <Step title="保存数据请在购物车中保存订单" description="" />
                            </Steps>,
                            mountNode
                        </Col>
                    </Row>
                </Content>
            </div>
        );
    }
}