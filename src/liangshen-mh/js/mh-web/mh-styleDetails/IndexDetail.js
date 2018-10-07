import React from 'react';
import MhSide from './fixed-component/MhSide';
import MhHeader from './fixed-component/MhHeader';
import MhFooter from './fixed-component/MhFooter';
import StyleDetails from './mh-web/mh-styleDetails/StyleDetails';

import '../../../css/App.css';
import 'antd/dist/antd.css';
import {Layout} from "antd";

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
