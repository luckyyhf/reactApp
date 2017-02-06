/**
 * Created by 13945 on 2016/8/10.
 */
/**
 * Created by 13945 on 2016/8/10.
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
import TextField from 'material-ui/TextField';
import Highlight_off from 'material-ui/svg-icons/action/highlight-off.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
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

class SelecSex extends Component {

    goback(){
        history.back();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>

                <div style={styles.container}>

                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={{textAlign:'center'}}>修改性别</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />
                    <div>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton
                                style={{padding:'6px'}}
                                value="light"
                                label="男"
                                labelStyle={{fontFamily:'微软雅黑',fontSize:'14px'}}

                                />
                            <RadioButton
                                style={{padding:'6px'}}
                                value="not_light"
                                label="女"
                                labelStyle={{fontFamily:'微软雅黑',fontSize:'14px'}}

                                />
                            <RadioButton
                                style={{padding:'6px'}}
                                value="ludicrous"
                                label="保密"
                                labelStyle={{fontFamily:'微软雅黑',fontSize:'14px'}}
                                />


                            </RadioButtonGroup>

                        </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default SelecSex;



