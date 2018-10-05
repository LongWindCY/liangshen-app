import React from 'react';

import {Layout} from "antd";
import MhSide from "../../fixed-component/MhSide";
import MhHeader from "../../fixed-component/MhHeader";
import StyleDetails from "./StyleDetails";
import MhFooter from "../../fixed-component/MhFooter";
import '../../../css/App.css'
const {Sider, Comtent}=Layout;

class IndexDetail extends React.Component{
    render(){
        return(
            <Layout>
                <Sider collapsed= 'true'>
                    <MhSide/>
                </Sider>
                <Layout>
                    <MhHeader/>
                    <Comtent>
                        <StyleDetails/>
                    </Comtent>
                    <MhFooter/>
                </Layout>
            </Layout>
        );
    }
}

export default IndexDetail;