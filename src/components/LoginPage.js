/**
 * Created by 13945 on 2016/8/9.
 */
/**
 * Created by 13945 on 2016/7/25.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
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
import Call from 'material-ui/svg-icons/communication/call';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { browserHistory } from 'react-router';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
import Home from 'material-ui/svg-icons/action/home';
import Find from 'material-ui/svg-icons/action/find-in-page';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from 'material-ui/TextField';
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

class OwnInfoForm extends Component {
    goback(){
        history.back();
    }

    goLoginPage(){
        browserHistory.push('FastLogining')
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={styles.title}>登录页面</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />
                    <div className='Login_Info_content'>
                        <TextField
                            fullWidth={true}
                            hintText="请输入账号"
                            hintStyle={{fontSize:'10px'}}
                            floatingLabelFocusStyle={{fontSize:'20px'}}
                            floatingLabelText="账号"
                            floatingLabelStyle={{fontSize:'20px'}}
                            type="text"
                            /><br/>
                        <TextField
                            fullWidth={true}
                            hintStyle={{fontSize:'10px'}}
                            floatingLabelFocusStyle={{fontSize:'20px'}}
                            floatingLabelStyle={{fontSize:'20px'}}
                            hintText="请输入密码"
                            floatingLabelText="密码"
                            type="password"
                            />
                        <RaisedButton label="登录" primary={true} style={{width:'100%',marginTop:'30px'}} labelStyle={{letterSpacing:'9px',fontSize:'16px'}}/>
                        <div className='Login_btnGroup'>
                            <FlatButton label="手机快速注册" primary={true} labelStyle={{color:'gray'}} onClick={this.goLoginPage}/>
                            <FlatButton label="找回密码" primary={true} labelStyle={{color:'gray'}}/>
                            </div>
                        </div>



                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps({ user }) {
	return {
		//username: user.userDetail.username,
		//password: user.userDetail.password,
	};
}

export default connect(mapStateToProps)(OwnInfoForm);



