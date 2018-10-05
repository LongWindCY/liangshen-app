import React from 'react';
import { Layout, Card, Form, Input, Row, Col, Button } from 'antd';
import URL from  '../../../../img/u32.jpg';
const FormItem = Form.Item;
const {Content}=Layout;
class StyleDetails extends React.Component {
  render () {
    return (
      <div >
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
                        sed rhoncus pronin sapien nunc accuan eget.</span><p/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="primary">点击定制</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>点击咨询</Button>
                    </Card>
                </Col>
            </Row>
        </Content>
        <Content style={{ margin: '0px', paddingLeft: "300px", minHeight: 60,textAlign: 'center',display:'flex' }}>
            <span style={{width:180,margin:'15px 50px'}}><hr /></span>
            <h1>定制流程</h1>
            <span style={{width:180,margin:'15px 50px'}}><hr /></span><br/>
        </Content>
        <Content style={{textAlign: 'center'}}>
            <span >先这样，再这样，然后这样，最后这样，就行了</span>
        </Content>
        <Content style={{ margin: '0px', padding: "50px 100px", minHeight: 250, }}>
            <Row gutter={16}>
                <Col className="gutter-row" span={9}>
                    <Card style={{ 
                        width: 200 ,
                        height:200,
                        marginTop:30,
                        background: '#F0F2F5', 
                        border:0, 
                        borderRight:'1px solid',
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                        }}>
                        <h1>面料选择</h1>
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card style={{ width: 360 ,height:300,background: '#F0F2F5', border:0}}>
                        <span>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Aenean euismod bibendum laoreet. 
                            Proin gravida dolor sit amet lacus 
                            accumsan et viverra justo commodo. 
                            Proin sodales pulvinar sic tempor. 
                            Sociis natoque penatibus et 
                            magnis dis parturient montes, 
                            nascetur ridiculus mus. 
                            Nam fermentum, nulla luctus 
                            pharetra vulputate, felis 
                            tellus mollis orci, sed rhoncus 
                            pronin sapien nunc accuan eget.</span>
                    </Card>
                </Col>
            </Row>
        </Content>
        <Content style={{ margin: '0px', padding: "50px 100px", minHeight: 250, }}>
            <Row gutter={16}>
                <Col className="gutter-row" span={9}>
                    <Card style={{ 
                        width: 200 ,
                        height:200,
                        marginTop:30,
                        background: '#F0F2F5', 
                        border:0, 
                        borderRight:'1px solid',
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                        }}>
                        <h1>量身尺寸</h1>
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card style={{ width: 360 ,height:300,background: '#F0F2F5', border:0}}>
                        <span>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Aenean euismod bibendum laoreet. 
                            Proin gravida dolor sit amet lacus 
                            accumsan et viverra justo commodo. 
                            Proin sodales pulvinar sic tempor. 
                            Sociis natoque penatibus et 
                            magnis dis parturient montes, 
                            nascetur ridiculus mus. 
                            Nam fermentum, nulla luctus 
                            pharetra vulputate, felis 
                            tellus mollis orci, sed rhoncus 
                            pronin sapien nunc accuan eget.</span>
                    </Card>
                </Col>
            </Row>
        </Content>
        <Content style={{ margin: '0px', padding: "50px 100px", minHeight: 250, }}>
            <Row gutter={16}>
                <Col className="gutter-row" span={9}>
                    <Card style={{ 
                        width: 200 ,
                        height:200,
                        marginTop:30,
                        background: '#F0F2F5', 
                        border:0, 
                        borderRight:'1px solid',
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                        }}>
                        <h1>细节挑选</h1>
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card style={{ width: 360 ,height:300,background: '#F0F2F5', border:0}}>
                        <span>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Aenean euismod bibendum laoreet. 
                            Proin gravida dolor sit amet lacus 
                            accumsan et viverra justo commodo. 
                            Proin sodales pulvinar sic tempor. 
                            Sociis natoque penatibus et 
                            magnis dis parturient montes, 
                            nascetur ridiculus mus. 
                            Nam fermentum, nulla luctus 
                            pharetra vulputate, felis 
                            tellus mollis orci, sed rhoncus 
                            pronin sapien nunc accuan eget.</span>
                    </Card>
                </Col>
            </Row>
        </Content>
        <Content style={{ margin: '0px', padding: "50px 100px", minHeight: 250, }}>
            <Row gutter={16}>
                <Col className="gutter-row" span={9}>
                    <Card style={{ 
                        width: 200 ,
                        height:200,
                        marginTop:30,
                        background: '#F0F2F5', 
                        border:0, 
                        borderRight:'1px solid',
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                        }}>
                        <h1>专业建议</h1>
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card style={{ width: 360 ,height:300,background: '#F0F2F5', border:0}}>
                        <span>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Aenean euismod bibendum laoreet. 
                            Proin gravida dolor sit amet lacus 
                            accumsan et viverra justo commodo. 
                            Proin sodales pulvinar sic tempor. 
                            Sociis natoque penatibus et 
                            magnis dis parturient montes, 
                            nascetur ridiculus mus. 
                            Nam fermentum, nulla luctus 
                            pharetra vulputate, felis 
                            tellus mollis orci, sed rhoncus 
                            pronin sapien nunc accuan eget.</span>
                    </Card>
                </Col>
            </Row>
        </Content>
      </div>
    )
  }
}

export default StyleDetails;