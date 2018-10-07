import React from 'react';

import {Layout} from "antd";
import MhSide from "../../fixed-component/MhSide";
import MhHeader from "../../fixed-component/MhHeader";
import MhFooter from "../../fixed-component/MhFooter";
import StyleSelect from "./StyleSelect";
const {Sider, Content}= Layout;

class IndexSelect extends React.Component{
    render(){
        return(
            <Layout>
                <Sider collapsed= 'true'>
                    <MhSide/>
                </Sider>
                <Layout>
                    <MhHeader/>
                    <Content>
                        <StyleSelect/>
                    </Content>
                    <MhFooter/>
                </Layout>
            </Layout>
        )
    }

}

export default IndexSelect;