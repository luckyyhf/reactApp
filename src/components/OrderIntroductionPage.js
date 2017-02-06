/**
 * Created by 13945 on 2016/7/25.
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
import  Share from 'material-ui/svg-icons/social/share.js'
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Info from 'material-ui/svg-icons/action/info';
import { browserHistory } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Paper from 'material-ui/Paper';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
const styles = {
    container: {
        height:"100%",
        position:'relative'
    },
    title: {
        cursor: 'pointer',
    },
    checkbox: {
        position:'absolute',
        top:'35%',
        left:'1%'
    },

    style: {
        height: 137,
        width: '100%',
        position:'relative'
    },

    icons: {
        position:'relative',
        top:'10px'
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



class OrderIntroductionPage extends Component {

    getClassOrderIntroPage_detailInfo(){
       return "OrderIntroPage_detailInfo";

    }

    getClassOrderIntroPage_Count(){
        return "OrderIntroPage_Count";
    }


    getClassOrderInfo_List_info(){
        return 'OrderInfo_List_info';
    }

    getClassOrderInfo_List_img(){
        return 'OrderInfo_List_img'
    }

    getClassOrderInfo_price(){
        return 'OrderInfo_price '
    }

    getClassOrderInfo_List_Intro(){
        return 'OrderInfo_List_Intro';
    }

    getClassOrderIntroPage_account(){
        return 'OrderIntroPage_account'
    }

    getClassFoodNum(){
        return 'foodNum'
    }

    getClassOrderInfo_sec_info(){
        return 'OrderInfo_sec_info'
    }

    getClassAllMoney(){
        return  'AllMoney'
    }

    getClassBtn_Account(){
        return 'Btn_Account';
    }


    getClassOrderDelOrAdd(){
        return 'OrderDelOrAdd';
    }

    addOrDel(){
        return 'addOrDel'
    }

    goback(){
        history.back()
    }

    goTheSettlePage(){
        browserHistory.push('TheSettlementPage');
    }
    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar style={{textAlign:'center',paddingRight:'128px'}}
                            title={<span style={styles.title}>购物车</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        />
                    <div style={{borderBottom:'1px solid #e6e6e6'}}>
                        <List style={{padding:'4px 0px'}}>
                            <ListItem   primaryText="请仔细核对好信息再下单，谢谢！" leftIcon={<Info />} disabled='true' />
                        </List>
                    </div>
                    <div style={{height:'calc(100% - 179px)',borderTop:0,overflowY:'auto',overflowX:'hidden'}}>
                       <ul className={this.getClassOrderIntroPage_detailInfo()}>
                           <li>
                               <Paper style={styles.style} zDepth={1}
                                      children={
                                      <div style={{height:'100%',width:'100%'}}>
                                        <Checkbox
                                   style={styles.checkbox}
                                   />
                                   <div className={this.getClassOrderInfo_List_Intro()}>
                                   <div className={this.getClassOrderInfo_List_img()}>
                                        <img src='http://o8ea97cbs.bkt.clouddn.com/1.jpg'/>
                                   </div>
                                   <div className={this.getClassOrderInfo_sec_info()}>
                                   <p>顶级美味梅菜烤鸭 选自肉嫩小鸭 微火慢调 20片 2.0kg</p>
                                    <div className={this.getClassOrderInfo_price()}>￥119.00</div>
                                    <div className={this.getClassOrderDelOrAdd()}>
                                     <FloatingActionButton mini={true}>
                                     <ContentAdd className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                     <span className={this.getClassFoodNum()}>3</span>
                                     <FloatingActionButton mini={true}>
                                     <ContentDel className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                    </div>
                                   </div>

                                   </div>
                                   </div>
                                      }
                                   />
                           </li>


                           <li>
                               <Paper style={styles.style} zDepth={1}
                                      children={
                                      <div style={{height:'100%',width:'100%'}}>
                                        <Checkbox
                                   style={styles.checkbox}
                                   />
                                   <div className={this.getClassOrderInfo_List_Intro()}>
                                   <div className={this.getClassOrderInfo_List_img()}>
                                        <img src='http://o8ea97cbs.bkt.clouddn.com/1.jpg'/>
                                   </div>
                                   <div className={this.getClassOrderInfo_sec_info()}>
                                   <p>顶级美味梅菜烤鸭 选自肉嫩小鸭 微火慢调 20片 2.0kg</p>
                                    <div className={this.getClassOrderInfo_price()}>￥119.00</div>
                                    <div className={this.getClassOrderDelOrAdd()}>
                                     <FloatingActionButton mini={true}>
                                     <ContentAdd className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                     <span className={this.getClassFoodNum()}>3</span>
                                     <FloatingActionButton mini={true}>
                                     <ContentDel className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                    </div>
                                   </div>

                                   </div>
                                   </div>
                                      }
                                   />
                           </li>


                           <li>
                               <Paper style={styles.style} zDepth={1}
                                      children={
                                      <div style={{height:'100%',width:'100%'}}>
                                        <Checkbox
                                   style={styles.checkbox}
                                   />
                                   <div className={this.getClassOrderInfo_List_Intro()}>
                                   <div className={this.getClassOrderInfo_List_img()}>
                                        <img src='http://o8ea97cbs.bkt.clouddn.com/1.jpg'/>
                                   </div>
                                   <div className={this.getClassOrderInfo_sec_info()}>
                                   <p>顶级美味梅菜烤鸭 选自肉嫩小鸭 微火慢调 20片 2.0kg</p>
                                    <div className={this.getClassOrderInfo_price()}>￥119.00</div>
                                    <div className={this.getClassOrderDelOrAdd()}>
                                     <FloatingActionButton mini={true}>
                                     <ContentAdd className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                     <span className={this.getClassFoodNum()}>3</span>
                                     <FloatingActionButton mini={true}>
                                     <ContentDel className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                    </div>
                                   </div>

                                   </div>
                                   </div>
                                      }
                                   />
                           </li>


                           <li>
                               <Paper style={styles.style} zDepth={1}
                                      children={
                                      <div style={{height:'100%',width:'100%'}}>
                                        <Checkbox
                                   style={styles.checkbox}
                                   />
                                   <div className={this.getClassOrderInfo_List_Intro()}>
                                   <div className={this.getClassOrderInfo_List_img()}>
                                        <img src='http://o8ea97cbs.bkt.clouddn.com/1.jpg'/>
                                   </div>
                                   <div className={this.getClassOrderInfo_sec_info()}>
                                   <p>顶级美味梅菜烤鸭 选自肉嫩小鸭 微火慢调 20片 2.0kg</p>
                                    <div className={this.getClassOrderInfo_price()}>￥119.00</div>
                                    <div className={this.getClassOrderDelOrAdd()}>
                                     <FloatingActionButton mini={true}>
                                     <ContentAdd className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                     <span className={this.getClassFoodNum()}>3</span>
                                     <FloatingActionButton mini={true}>
                                      <ContentDel className={this.addOrDel()}/>
                                     </FloatingActionButton>
                                    </div>
                                   </div>

                                   </div>
                                   </div>
                                      }
                                   />
                           </li>
                       </ul>


                        </div>


                    <div className={this.getClassOrderIntroPage_account()}>

                            <Checkbox style={{position:'absolute',top:'11%',left:'1%',width:'30%'}}
                                label="全选"/>

                        <div className={this.getClassAllMoney()}>
                            <p>合计:￥278.00</p>
                            <p>总额:￥2778.00</p>
                        </div>
                        <div className={this.getClassBtn_Account()}>
                            <FlatButton label="去结算" primary={true} onClick={this.goTheSettlePage}/>
                        </div>

                        </div>


                </div>

            </MuiThemeProvider>
        );
    }
}

export default OrderIntroductionPage;



