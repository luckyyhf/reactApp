/**
 * Created by 13945 on 2016/8/4.
 */
/**
 * Created by 13945 on 2016/7/28.
 */
/**
 * Created by 13945 on 2016/7/22.
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
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { browserHistory } from 'react-router';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Home from 'material-ui/svg-icons/action/home';
import Find from 'material-ui/svg-icons/action/find-in-page';
import Paper from 'material-ui/Paper';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

const styles = {
    container: {

        height:"100%",
        position:'relative'
    },
    title: {
        cursor: 'pointer',
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
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


class Mycoupon extends Component {

    getCLassMyCoupon_Content_INfo(){
        return 'MyCoupon_Content_INfo'
    }

    goback(){
        history.back();
    }

    getClassMyCoupon_tab_content(){
        return 'MyCoupon_tab_content'
    }

    getClassMyCoupon_tab_icon(){
        return 'MyCoupon_tab_icon'
    }

    getClassMyCoupon_tab_icon_two(){
        return 'MyCoupon_tab_icon_two'
    }

    getClassMyCoupon_tab_icon_three(){
        return 'MyCoupon_tab_icon_three'
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            useCSS:"Yes",
            autoplay:'Yes',
            autoplaySpeed:'3000'
        };

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar style={{textAlign:'center'}}
                            title={<span style={styles.title}>优惠券</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        />
                    <div className={this.getCLassMyCoupon_Content_INfo()}>
                        <Tabs>
                            <Tab label="未使用" style={{color:'black',fontFamily:'微软雅黑'}}>

                            </Tab>
                            <Tab label="已过期"  style={{color:'black',fontFamily:'微软雅黑'}}>

                            </Tab>
                            <Tab label="已使用"  style={{color:'black',fontFamily:'微软雅黑'}}>
                            </Tab>
                        </Tabs>



                    </div>





                </div>
            </MuiThemeProvider>
        );
    }
}

export default Mycoupon;



