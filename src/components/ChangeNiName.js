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

class ChangeNiName extends Component {

    goback(){
        history.back();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>

                <div style={styles.container}>

                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={{textAlign:'center'}}>修改昵称</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        iconElementRight={<FlatButton label="确定" />}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />
                    <div style={{position:'relative'}}>
                        <TextField
                            className='ChangeText'
                            fullWidth={true}
                            id="text-field-default"
                            defaultValue={this.props.Name}
                            />
                        <div className='ChangeHigh'>
                            <Highlight_off style={{fill:'gray'}}/>
                        </div>
                        <br />
                        <span style={{paddingLeft:'15px',color:'gray'}}>4-20个字符，可由中英文，数字，'_','-'组成</span>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
ChangeNiName.defaultProps={
    Name:'草帽小子'
}

export default ChangeNiName;



