import {Carousel, Layout} from "antd";
import React from "react";

const {Content}=Layout;
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
                <div>
                    1265464
                </div>
            </Content>
        )
    }
}
export default Home;