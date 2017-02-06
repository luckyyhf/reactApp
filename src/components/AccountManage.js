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
            controlledDate: null,
        };
    }

    getclassOwnInfoFormFoot(){
        return "OwnInfoFormFoot";
    }

    gotoding(){
        browserHistory.push('OrderForm');
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



    goMyOrderForm(){
        browserHistory.push('MyOrderForm');
    }

    goMyCoupon(){
        browserHistory.push('MyCoupon');
    }
    goMysite(){
        browserHistory.push('Mysite');
    }

    showAvart(){
        this.refs['AccountManage_SeconPage'].style.display='block';
        this.refs['AccountManage_Firs'].style.display='block';
    }

    hideAvar(){
        this.refs['AccountManage_SeconPage'].style.display='none';
        this.refs['AccountManage_Firs'].style.display='none';
    }
    goChangeNamePage(){
        browserHistory.push('ChangeName');
    }

    goChangeNiNamePage(){
        console.log("aaaa");
        browserHistory.push('ChangeNiName');
    }

    goSelecSexPage(){
        browserHistory.push('SelecSex');
    }

    handleChange(event, date){
        this.setState({
            controlledDate: date,
        });
    };


    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                        <div className='AccountManage_SeconPage' ref='AccountManage_SeconPage' onClick={this.hideAvar.bind(this)}>

                        </div>

                        <div className='AccountManage_Firs' ref='AccountManage_Firs'>
                            <div>修改头像</div>
                            <div><FlatButton label="拍照上传" /></div>
                            <div><FlatButton label="本地上传" /></div>
                        </div>
                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={{textAlign:'center'}}>账户管理</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        iconElementRight={<FlatButton label="Save" />}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />


                    <div>
                        <List>
                            <ListItem primaryText="头像"  onClick={this.showAvart.bind(this)} style={{borderBottom:'1px solid #e6e6e6',height:'100px',paddingTop:'30px',fontFamily:'微软雅黑'}} rightIcon={<div className='avartt'>
                            <div> <Avatar src={this.props.OwnAvar} size={60} style={{float:'left'}}/></div>

                      </div>}
                                    />

                           <div className='list_own' onClick={this.goChangeNamePage}>
                               <div>
                                   <span>
                                       用户名
                                       </span>
                                   </div>
                               <div>
                                   <FlatButton
                                       label={this.props.OwnName}
                                       labelPosition="before"
                                       icon={<Arrow_right />}
                                       />

                               </div>
                               </div>
                            <div className='list_own' onClick={this.goChangeNiNamePage}>
                                <div>
                                   <span>
                                       昵称
                                       </span>
                                </div>
                                <div>
                                    <FlatButton
                                        label={this.props.OwnNiName}
                                        labelPosition="before"
                                        icon={<Arrow_right />}
                                        />

                                </div>
                            </div>
                            <div className='list_own' onClick={this.goSelecSexPage}>
                                <div>
                                   <span>
                                       性别
                                       </span>
                                </div>
                                <div>
                                    <FlatButton
                                        label={this.props.OwnSex}
                                        labelPosition="before"
                                        icon={<Arrow_right />}
                                        />

                                </div>
                            </div>

                            <div className='list_own'>
                                <div>
                                   <span>
                                       出生日期
                                       </span>
                                </div>
                                <div>
                                    <DatePicker
                                        className='Bir_timeSel'
                                        hintText={this.props.OwnBir}
                                        value={this.state.controlledDate}
                                        onChange={this.handleChange.bind(this)}

                                        />

                                </div>
                            </div>





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

AccountManage.defaultProps={
    OwnAvar:'http://o8ea97cbs.bkt.clouddn.com/touxiang.png',
    OwnName:'草帽小子',
    OwnNiName:'草帽小子',
    OwnSex:'保密',
    OwnBir:'1992-01-23'
}

export default AccountManage;



