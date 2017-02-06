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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Clear from 'material-ui/svg-icons/content/clear.js';
import Delete from 'material-ui/svg-icons/action/delete.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Edit from 'material-ui/svg-icons/image/edit';
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

class Mysite extends Component {


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

    gotoAddNewSite(){
        browserHistory.push('AddNewSite');
    }

    getClassOwnInfo_avar(){
        return 'OwnInfo_avar';
    }

    goMyOrderForm(){
        browserHistory.push('MyOrderForm');
    }

    getClassMyOrder_top(){
        return 'MyOrder_top'
    }

    getCLassMyOrder_all_info(){
        return 'MyOrder_all_info';
    }

    getClassMyOrder_detail_info(){
        return 'MyOrder_detail_info'
    }

    getMyOrder_shop_price(){
        return 'MyOrder_shop_price'
    }

    goback(){
        history.back();
    }

    getClassMysite_content(){
        return 'Mysite_content';
    }


    render() {
        var that=this;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar style={{textAlign:'center'}}
                            title={<span style={styles.title}>管理收货地址</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        />
                    <div className='MySite_medium_content'>
                       <ul style={{backgroundColor:'#e6e6e6'}}>
                           {
                               this.props.info.map(function(info){
                                   return (
                                       <li>
                                           <Paper zDepth={1} style={{width:'100%',height:'124px',marginBottom:'10px'}} children={
                                <div className={that.getClassMysite_content()}>
                                <div><span>{info.name}</span><span>{info.phoneNumber}</span></div>
                                <div>{info.site}</div>
                                <div>
                                <div style={{float:'left',width:'33%',paddingTop:'10px'}}>
                                 <RadioButton
                                    value="light"
                                    label="默认地址"
                                    labelStyle={{color:'gray'}}
                                  />
                                  </div>
                                  <div  style={{float:'right',paddingTop:'5px'}}>
                                   <FlatButton
                                  label="编辑"
                                  labelStyle={{color:'gray'}}
                                  labelPosition="after"
                                  icon={<Edit/>}
                                />
                                  <FlatButton
                                      label="删除"
                                      labelPosition="after"
                                      labelStyle={{color:'gray'}}
                                      icon={<Delete />}
                                  />
                                  </div>
                                  </div>
                                </div>
                               }/>
                                       </li>
                                   )
                               })

                           }

                           </ul>
                        </div>
                        <div className='MySite_foot_addSite'>
                            <FlatButton label="添加新地址" style={{width:'100%'}} labelStyle={{color:'white'}} onClick={this.gotoAddNewSite}/>

                            </div>

                    </div>

            </MuiThemeProvider>
        );
    }
}

Mysite.defaultProps={
    info:[
        {
            name:'李某某',
            phoneNumber:'13456785678',
            site:'安徽省宣城市宣州区'
        },
        {
            name:'张某某',
            phoneNumber:'13456785678',
            site:'浙江省宁波市镇海区镇海大厦'
        },
        {
            name:'刘某某',
            phoneNumber:'13456785678',
            site:'浙江省宁波市镇海区镇海大厦'
        }
    ]
}

export default Mysite;



