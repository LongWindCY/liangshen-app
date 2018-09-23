import {Carousel, Layout, Card, Row, Col} from "antd";
import React from "react";

const {Content}=Layout;
const {Meta}=Card;
class Home extends React.Component{
    render() {
        return(
            <Content style={{}}>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <Content style={{ margin: '0px', padding: "25px 300px", background: '#fff', minHeight: 280 }}>
                    <div className="gutter-example">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <Card
                                    hoverable='true'
                                    style={{ width: 240,
                                        margin: 'auto'}}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                        title="婚礼西服定制"
                                        description="www.instagram.com"
                                    />
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card
                                    hoverable='true'
                                    style={{ width: 240,
                                        margin: 'auto'}}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                        title="商务西服定制"
                                        description="www.instagram.com"
                                    />
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card
                                    hoverable='true'
                                    style={{ width: 240,
                                        margin: 'auto'}}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                        title="休闲西服定制"
                                        description="www.instagram.com"
                                    />
                                </Card>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Card
                                    hoverable='true'
                                    style={{ width: 240,
                                        margin: 'auto'}}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                        title="韩版西服定制"
                                        description="www.instagram.com"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Content>
        )
    }
}
export default Home;