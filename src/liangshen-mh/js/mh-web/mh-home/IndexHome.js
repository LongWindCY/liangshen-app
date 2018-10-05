import React from 'react';
import MhSide from "../../fixed-component/MhSide";
import MhHeader from "../../fixed-component/MhHeader";
import MhFooter from "../../fixed-component/MhFooter";
import Home from "./Home";

import '../../../css/App.css'

import {Layout} from "antd";
const {Sider,Content} =Layout;

class IndexHome extends React.Component{
    render(){
        return(
            <Layout>
                <Sider  collapsed= 'true'>
                    <MhSide/>
                </Sider>
                <Layout>
                    <MhHeader/>
                    <Content>
                        <Home/>
                    </Content>
                    <MhFooter/>
                </Layout>
            </Layout>
        );
    }
}

export default IndexHome;