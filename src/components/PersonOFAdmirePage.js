/**
 * Created by 13945 on 2016/8/10.
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
import Call from 'material-ui/svg-icons/communication/call';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { browserHistory } from 'react-router';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
import Home from 'material-ui/svg-icons/action/home';
import Find from 'material-ui/svg-icons/action/find-in-page';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ContentSend from 'material-ui/svg-icons/content/send';
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

class PersonOFAdmirePage extends Component {
    goback(){
        history.back();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={styles.title}>购买人列表页</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}

                        onLeftIconButtonTouchTap={handleTouchTap}
                        />

                    <div>
                        <List>
                            {
                                this.props.AdmirPeople.map(function(info){
                                    return (
                                        <ListItem primaryText={info.name} leftIcon={ <Avatar src={info.AvAr} style={{margin:'8px',height:'31px',width:'31px'}} />} style={{borderBottom:'1px solid #e6e6e6',}}/>
                                    )
                                })
                            }
                        </List>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
PersonOFAdmirePage.defaultProps={
   AdmirPeople:[
       {
           name:'胖妞22',
           AvAr:'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
       },
       {
           name:'秋季的景色',
           AvAr:'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
       },
       {
           name:'周先生充话费',
           AvAr:'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
       },
       {
           name:'胖妞23',
           AvAr:'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
       },
       {
           name:'秋季的景色',
           AvAr:'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
       },
       {
           name:'周先生充话费',
           AvAr:'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
       }

   ]
}

export default PersonOFAdmirePage;



