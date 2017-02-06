/**
 * Created by 13945 on 2016/8/15.
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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import infoNotify from './infoNotify.css'
import Alarm from 'material-ui/svg-icons/action/alarm-on.js';
const styles = {
    container: {
        height: '100%',
        position: 'relative'
    },
    title: {
        cursor: 'pointer',
    },

};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

function handleTouchTap() {
    alert("aaaa");
}

class InfoNotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }


    goback() {
        history.back();
    }
    handleChange (value) {
        this.setState({
            value: value,
        });
    };


    render() {
        var that=this;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <div className='infoNotify_header'>
                        <div onClick={this.goback}>
                            <Arrow_left style={{width:'40px',height:'40px'}} color='gray'/>
                        </div>
                        <div>
                          消息中心
                        </div>
                    </div>
                    <Tabs className='tabs_main'

                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        >
                        <Tab label="已读信息" value="a"  style={{color:'black'}}>
                            <div>
                                <ul style={{listStyleType:'none'}}>
                                    <li>
                                        <div className='readedINfo'>
                                            <div className='readINfoLogo'>
                                                <Avatar icon={<Alarm style={{width:'50px',height:'50px'}}/> } style={{width:'50px',height:'50px'}} />
                                            </div>
                                            <div className='readedInfoTitle'>
                                                 优惠活动
                                            </div>
                                            <div className='readedInfoContent'>
                                                您有一份[免单+10元优惠券]的专属福利，限...
                                            </div>
                                      <span className='readedInfoDate'>
                                          8月4日
                                          </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='readedINfo'>
                                            <div className='readINfoLogo'>
                                                <Avatar icon={<Alarm style={{width:'50px',height:'50px'}}/> } style={{width:'50px',height:'50px'}} />
                                            </div>
                                            <div className='readedInfoTitle'>
                                                优惠活动
                                            </div>
                                            <div className='readedInfoContent'>
                                                您有一份[免单+10元优惠券]的专属福利，限...
                                            </div>
                                      <span className='readedInfoDate'>
                                          8月4日
                                          </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='readedINfo'>
                                            <div className='readINfoLogo'>
                                                <Avatar icon={<Alarm style={{width:'50px',height:'50px'}}/> } style={{width:'50px',height:'50px'}} />
                                            </div>
                                            <div className='readedInfoTitle'>
                                                优惠活动
                                            </div>
                                            <div className='readedInfoContent'>
                                                您有一份[免单+10元优惠券]的专属福利，限...
                                            </div>
                                      <span className='readedInfoDate'>
                                          8月4日
                                          </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='readedINfo'>
                                            <div className='readINfoLogo'>
                                                <Avatar icon={<Alarm style={{width:'50px',height:'50px'}}/> } style={{width:'50px',height:'50px'}} />
                                            </div>
                                            <div className='readedInfoTitle'>
                                                优惠活动
                                            </div>
                                            <div className='readedInfoContent'>
                                                您有一份[免单+10元优惠券]的专属福利，限...
                                            </div>
                                      <span className='readedInfoDate'>
                                          8月4日
                                          </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab label="未读信息" value="b" style={{color:'black'}}>
                            <div>
                                <ul style={{listStyleType:'none'}}>
                                    <li>
                                        <div className='readedINfo'>
                                            <div className='readINfoLogo'>
                                                <Avatar icon={<Alarm style={{width:'50px',height:'50px'}}/> } style={{width:'50px',height:'50px'}} />
                                            </div>
                                            <div className='readedInfoTitle'>
                                                优惠活动
                                            </div>
                                            <div className='readedInfoContent'>
                                                您有一份[免单+10元优惠券]的专属福利，限...
                                            </div>
                                      <span className='readedInfoDate'>
                                          8月4日
                                          </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='readedINfo'>
                                            <div className='readINfoLogo'>
                                                <Avatar icon={<Alarm style={{width:'50px',height:'50px'}}/> } style={{width:'50px',height:'50px'}} />
                                            </div>
                                            <div className='readedInfoTitle'>
                                                优惠活动
                                            </div>
                                            <div className='readedInfoContent'>
                                                您有一份[免单+10元优惠券]的专属福利，限...
                                            </div>
                                      <span className='readedInfoDate'>
                                          8月4日
                                          </span>
                                        </div>
                                    </li>


                                </ul>

                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}



export default InfoNotify;



