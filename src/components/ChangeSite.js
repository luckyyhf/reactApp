/**
 * Created by 13945 on 2016/8/11.
 */
/**
 * Created by 13945 on 2016/8/5.
 */
/**
 * Created by 13945 on 2016/8/4.
 */
/**
 * Created by 13945 on 2016/7/25.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
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
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Clear from 'material-ui/svg-icons/content/clear.js';
import Delete from 'material-ui/svg-icons/action/delete.js';
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

class AddNewSite extends Component {

    goback(){
        history.back();
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar style={{textAlign:'center'}}
                            title={<span>修改地址</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        />
                    <div className='AddNewSite_medium_content'>
                        <div>
                            <TextField
                                floatingLabelStyle={{fontSize:'19px',color:'black',fontFamily:'微软雅黑'}}
                                hintText="张某某"
                                floatingLabelText="联系人"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                /><br/>

                            <TextField
                                floatingLabelStyle={{fontSize:'19px',color:'black',fontFamily:'微软雅黑'}}
                                hintText="13425456739"
                                floatingLabelText="手机号"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                /><br/>

                            <TextField
                                floatingLabelStyle={{fontSize:'19px',color:'black',fontFamily:'微软雅黑'}}
                                hintText={
                            <div>
                             <FlatButton
                                  label="点击进行定位"
                                  labelPosition="before"
                                  labelStyle={{color:'gray'}}
                                  icon={<Arrow_right style={{fill:'gray',color:'gray'}}/>}
                                />

                            </div>
                            }
                                hintStyle={{right:'-12px'}}
                                floatingLabelText="详细地址"
                                floatingLabelFixed={true}
                                fullWidth={true}
                                /><br/>



                        </div>
                    </div>
                    <div className='MySite_foot_addSite'>
                        <FlatButton label="保存" style={{width:'100%'}} labelStyle={{color:'white'}}/>

                    </div>

                </div>

            </MuiThemeProvider>
        );
    }
}

export default AddNewSite;



