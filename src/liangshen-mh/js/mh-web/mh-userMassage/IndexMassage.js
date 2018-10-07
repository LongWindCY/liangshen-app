import React from 'react';
import MhSide from "../../fixed-component/MhSide";
import MhHeader from "../../fixed-component/MhHeader";
import Massage from "./Massage";
import MhFooter from "../../fixed-component/MhFooter";
import {Layout} from 'antd';

const {Content, Sider}=Layout;

class IndexMassage extends React.Component{
    render(){
        return(
            <Layout>
                <Sider collapsed= 'true'>
                    <MhSide/>
                </Sider>
                <Layout>
                    <MhHeader/>
                    <Content style={{height: '700px'}}>
                        <Massage/>
                    </Content>
                    <MhFooter/>
                </Layout>
            </Layout>
        )
    }
}

export default IndexMassage;