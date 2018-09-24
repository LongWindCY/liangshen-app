import React from "react";
import {Layout} from 'antd';
import logo from '../../../img/logo.png'

const {Footer}=Layout;
class MhFooter extends React.Component{
    render() {
        return(
            <Footer style={{ textAlign: 'center', background: 'black'}}>
                <img alt="dfasf" src={logo} style={{width: '120px', height: '31px', padding: '0px'}}/>
            </Footer>
        );
    }

}
export default MhFooter;