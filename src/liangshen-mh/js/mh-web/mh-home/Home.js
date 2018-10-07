import {Carousel, Layout, Card, Row, Col, Button} from "antd";
import React from "react";
import BackgroundOne from '../../../../img/1.jpeg';
import BackgroundTwo from '../../../../img/2.jpeg';
import BackgroundThree from '../../../../img/3.jpeg';
import BackgroundFore from '../../../../img/4.jpeg';
import Jin from  '../../../../img/jingyiqiujing.jpeg';
const {Content}=Layout;
const {Meta}=Card;
class Home extends React.Component{
    render() {
        return(
            <Content>
                <Content style={{ margin: '0px', background: 'black', minHeight: 280 }}>
                    <Carousel vertical autoplay>
                        <div><div style={{backgroundImage: `url(${BackgroundOne})` }}>
                            您的量身定制服
                            开启您的互联网时代
                        </div></div>
                        <div><div style={{backgroundImage: `url(${BackgroundTwo})` }}>2</div></div>
                        <div><div style={{backgroundImage: `url(${BackgroundThree})` }}>3</div></div>
                        <div><div style={{backgroundImage: `url(${BackgroundFore})` }}>4</div></div>
                    </Carousel>
                </Content>
                <Content style={{ margin: '0px', padding: "50px 300px", background: 'black', minHeight: 280 }}>
                    <div className="gutter-example">
                        <Row>
                            <Col span={12}><Card
                                hoverable='true'
                                style={{ width: 340,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="结婚西服定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                            <Col span={12}><Card
                                hoverable='true'
                                style={{ width: 340,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="商务西服定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                        </Row>
                    </div>
                </Content>
                <Content style={{ margin: '0px', padding: "50px 300px", background: 'black', minHeight: 280 }}>
                    <div className="gutter-example">
                        <Row>
                            <Col span={8}><Card
                                hoverable='true'
                                style={{ width: 240,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="休闲西服定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                            <Col span={8}><Card
                                hoverable='true'
                                style={{ width: 240,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="韩版西服定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                            <Col span={8}><Card
                                hoverable='true'
                                style={{ width: 240,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="团体西服定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                        </Row>
                    </div>
                </Content>
                <Content style={{ margin: '0px', padding: "50px 300px", background: 'black', minHeight: 280 }}>
                    <div className="gutter-example">
                        <Row>
                            <Col span={8}><Card
                                hoverable='true'
                                style={{ width: 240,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="寸衫定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                            <Col span={8}><Card
                                hoverable='true'
                                style={{ width: 240,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="大衣定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                            <Col span={8}><Card
                                hoverable='true'
                                style={{ width: 240,
                                    margin: 'auto'}}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="更多定制"
                                    description="www.instagram.com"
                                />
                            </Card></Col>
                        </Row>

                        <div className="button" style={{textAlign: 'center', marginTop: '50px'}}>
                            <Button type="primary" ghost>开启您的专业定制</Button>
                        </div>

                    </div>
                </Content>
                <Content style={{ margin: '0px', padding: "50px 300px", backgroundImage: `url(${Jin})`, minHeight: 700,textAlign: 'center' }}>
                    <p style={{paddingTop: '300px', fontSize: '36px', color: 'white'}}>精 益 求 精 于 每 个 微 小 的 细 节......</p>
                </Content>
                <Content style={{ margin: '0px', padding: "50px 300px", background: 'gray', minHeight: 280 }}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Card style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Content>
        )
    }
}
export default Home;