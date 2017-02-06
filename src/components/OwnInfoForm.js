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

class OwnInfoForm extends Component {


    getclassOwnInfoFormFoot(){
        return "OwnInfoFormFoot";
    }

    gotoding(){
        browserHistory.push('/');
    }

    gotochat(){
        browserHistory.push('DiscussForm');
    }

    gotoOwnInfo(){
        browserHistory.push('OwnInfoForm');
    }

    goback(){
        history.back();
    }
    getClassOwnInfoShopNum(){
        return 'OwnInfoShopNum';
    }

    gotoShopCart(){
        browserHistory.push('OrderIntroductionPage');
    }

    getClassOwnInfo_avar(){
        return 'OwnInfo_avar';
    }

    goMyOrderForm(){
        browserHistory.push('MyOrderForm');
    }

    goMyCoupon(){
        browserHistory.push('MyCoupon');
    }
    goMysite(){
        browserHistory.push('Mysite');
    }

    goMyAccountManage(){
        browserHistory.push('AccountManage');
    }

    goLogining(){
        browserHistory.push('LoginPage');
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={styles.title}>个人信息页</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />

                    <div className={this.getClassOwnInfo_avar()}>
                        <div>
                            <img src={this.props.OwnAvar}/>
                            </div>
                        <div>
                            {this.props.OwnName}
                            </div>
                        <div onClick={this.goLogining}>
                            登录/注册
                            </div>

                        </div>
                    <div>
                        <List>
                            <ListItem primaryText="收货地址" leftIcon={<ContentInbox />} style={{borderBottom:'1px solid #e6e6e6'}} rightIcon={<Arrow_right/>} onClick={this.goMysite}/>
                            <ListItem primaryText="我的订单" leftIcon={<ContentInbox />} style={{borderBottom:'1px solid #e6e6e6'}} rightIcon={<Arrow_right/>} onClick={this.goMyOrderForm}/>
                            <ListItem primaryText="优惠券" leftIcon={<ContentInbox />}  style={{borderBottom:'1px solid #e6e6e6'}} rightIcon={<Arrow_right/>} onClick={this.goMyCoupon}/>
                            <ListItem
                                style={{borderBottom:'1px solid #e6e6e6'}}
                                key={2}
                                primaryText="联系客服"
                                leftIcon={<ContentInbox />}
                                disabled={true}
                                nestedItems={[
                                              <ListItem key={1} primaryText="13456783485" leftIcon={<Call/>} />,
                                              <ListItem key={2} primaryText="134657434@qq.com" leftIcon={<ContentSend/>} />
                                            ]}
                                 />
                            <ListItem primaryText="账户管理" leftIcon={<ContentInbox />} style={{borderBottom:'1px solid #e6e6e6'}} rightIcon={<Arrow_right/>} onClick={this.goMyAccountManage}/>
                        </List>
                        </div>
                    <div className={this.getclassOwnInfoFormFoot()}>
                        <Tabs>
                            <Tab onActive={this.gotoding}
                                 icon={<Home/>}
                                 label="首页"
                                />
                            <Tab
                                onActive={this.gotochat}
                                style ={{fontSize:'16px'}}
                                icon={<Find/>}
                                label="发现"
                                />

                            <Tab
                                onActive={this.gotoOwnInfo}
                                style ={{fontSize:'16px'}}
                                 icon={<MapsPersonPin  />}
                                 label="我的"
                                />
                        </Tabs>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

OwnInfoForm.defaultProps = {
    OwnAvar:'http://o8ea97cbs.bkt.clouddn.com/touxiang.png',
    OwnName:'呵呵哒'
}

export default OwnInfoForm;



