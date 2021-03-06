import React from 'react';



import '../../../css/App.css';
import 'antd/dist/antd.css';
import {Layout} from "antd";
import StyleDetails from "./StyleDetails";
import MhSide from "../../fixed-component/MhSide";
import MhHeader from "../../fixed-component/MhHeader";
import MhFooter from "../../fixed-component/MhFooter";

const {Sider, Content}=Layout;

class IndexDetail extends React.Component {
    render() {
        return (
            <Layout>
                <Sider collapsed= 'true'>
                    <MhSide/>
                </Sider>
                <Layout>
                    <MhHeader/>
                    <Content>
                        <StyleDetails/>
                    </Content>
                    <MhFooter/>
                </Layout>
            </Layout>
        );
    }
}

export default IndexDetail;
