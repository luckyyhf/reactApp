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
import Paper from 'material-ui/Paper';
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

class RemarkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Edit_value:'给餐厅留言,可输入口味,时间等要求'
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

    focusDiv(){
        this.setState({
            Edit_value:''
        })
    }

    blurDiv(){
     var htmlContent = document.getElementsByClassName('Papaer_ReMark_content')[0].innerHTML;
        if(htmlContent ==''){
            this.setState({
                Edit_value:'给餐厅留言,可输入口味,时间等要求'
            })
        }
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        style={{textAlign:'center'}}
                        title={<span style={styles.title}>填写备注</span>}
                        iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        iconElementRight={<FlatButton label="确定" />}
                        onLeftIconButtonTouchTap={handleTouchTap}
                        />
                     <div className='Remark_edit_content'>
                         <Paper  zDepth={1} children={
                         <div contentEditable="true"  onFocus={this.focusDiv.bind(this)} onBlur={this.blurDiv.bind(this)} className='Papaer_ReMark_content'>
                           {this.state.Edit_value}
                         </div>
                         }/>

                         <div style={{marginTop:'20px'}}>
                             {
                                 this.props.BuyerSuggests.map(function(suggest){
                                     return (
                                         <FlatButton label={suggest} labelStyle={{color:'gray'}}/>
                                     )
                                 })
                             }

                             </div>
                         </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

RemarkPage.defaultProps={
    BuyerSuggests:[
        '请提供餐具',
        '不吃辣',
        '辣一点',
        '米饭多一点',
        '没零钱'
    ]
}

export default RemarkPage;



