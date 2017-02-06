/**
 * Created by 13945 on 2016/8/11.
 */
/**
 * Created by 13945 on 2016/8/8.
 */
/**
 * Created by 13945 on 2016/7/25.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentDel from 'material-ui/svg-icons/content/remove';
import RaisedButton from 'material-ui/RaisedButton';
import ShopBasket from 'material-ui/svg-icons/action/add-shopping-cart';
import Chat from 'material-ui/svg-icons/communication/chat';
import Badge from 'material-ui/Badge';
var Slider = require('react-slick');
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import  BackIcon from 'material-ui/svg-icons/navigation/arrow-back.js'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { browserHistory } from 'react-router';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
import Home from 'material-ui/svg-icons/action/home';
import Find from 'material-ui/svg-icons/action/find-in-page';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Set_Name_Pas_Page from './Set_Name_Pas_Page.less';
import Panorama from 'material-ui/svg-icons/image/panorama-fish-eye';
import Check_circle from 'material-ui/svg-icons/action/check-circle.js';
const styles = {
    container: {
        height:'100%',
        position:'relative'
    },
    title: {
        cursor: 'pointer',
    },
    iconStyle:{
        width:'40px',
        height:'40px',
        position:'absolute',
        top:'3px',
        left:'3px'
    }

};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

function handleTouchTap(){
    alert("aaaa");
}

class AccountManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName:'',
            UserPas:''

        };
    }

    goback(){
        history.back();
    }

    ChangePhoneValue(){
        var currentValue = this.refs['phoneNumber'].getValue();
        this.setState({
            UserName:currentValue
        })
    }

    ChangeTestValue(){
        var currentValue = this.refs['testNumber'].getValue();
        this.setState({
            UserPas:currentValue
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={{textAlign:'center'}}>手机快速注册</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />
                    <div className={Set_Name_Pas_Page.UserName}>
                        <div className={Set_Name_Pas_Page.setName}>请设置用户名</div>
                        <TextField
                            defaultValue=''
                            ref='phoneNumber'
                            onChange={this.ChangePhoneValue.bind(this)}
                            fullWidth={true}
                            hintText="请设置为6-20位用户名"
                            /><br />

                        <div className={Set_Name_Pas_Page.Pas}>请设置登录密码</div>
                        <TextField
                            defaultValue=''
                            ref ='testNumber'
                            onChange={this.ChangeTestValue.bind(this)}
                            fullWidth={true}
                            hintText="请设置为6-20位密码"
                            /><br />
                        <div className={Set_Name_Pas_Page.Set_Rules}>用户名,密码由6-20位字符组成，包括字母、数字、'_'组成</div>

                        <div className={Set_Name_Pas_Page.bth_sure} >
                            <RaisedButton label="确定" disabled={!this.state.UserName || !this.state.UserPas}
                                          secondary={this.state.UserName && this.state.UserPas}/>
                        </div>
                        <div className={Set_Name_Pas_Page.Call}>
                            <span>遇到问题？您可以</span>
                            <span>联系客服</span>
                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default AccountManage;



