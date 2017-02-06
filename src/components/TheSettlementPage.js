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
import Room from 'material-ui/svg-icons/action/room';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Info from 'material-ui/svg-icons/action/info';
import Help_ontline from 'material-ui/svg-icons/action/help-outline';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Checkbox from 'material-ui/Checkbox';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Card_travel from 'material-ui/svg-icons/action/card-travel.js';
import Delete from 'material-ui/svg-icons/action/delete.js';
import Highlight_off from 'material-ui/svg-icons/action/highlight-off.js';
import { browserHistory } from 'react-router';
const styles = {
    container: {
        height:"100%",
        position:'relative'
    },
    title: {
        cursor: 'pointer',
        fontSize:'22px'
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



class TheSettlementPage extends Component {
    getClassTheSettleBuyerSiteInfo(){
        return 'TheSettleBuyerSiteInfo';
    }
    getclassOwnInfo(){
        return 'OwnInfo';
    }

    getClassOwnName(){
        return 'OwnName';
    }




    getClassTheSettleDetailInfo(){
        return 'theSettleDetailInfo'
    }

    getClassOwnPhoneNum(){
        return 'OwnPhoneNum';
    }
    getClassOwn_Detail_info(){
        return 'Own_Detail_info'
    }


    getCLassArrow_Left(){
        return 'Arrow_Left'
    }



    goback(){
        history.back();
    }

    getClassTheSettlePage_account(){
        return 'TheSettlePage_account'
    }

    getClassTheSettleFoot_Combin_Info(){
        return 'TheSettleFoot_Combin_Info'
    }

    getClassTheSettleAllMoney(){
         return  'TheSettleAllMoney'
    }

    getClassTheSettleFoot_combin_list(){
        return 'TheSettleFoot_combin_list'
    }

    getClassTheSettleBtn_Account(){
        return 'TheSettleBtn_Account'
    }

    goSelSitePage(){
        browserHistory.push('SelSitePage');
    }

    goReMarkPage(){
        browserHistory.push('RemarkPage');
    }

    show_discount_note(){
        this.refs['theSet_discount_note'].style.display='block';
        this.refs['theSet_discount_note_content'].style.display='block';
    }


    remove_theSe_dsicount(){
        this.refs['theSet_discount_note'].style.display='none';
        this.refs['theSet_discount_note_content'].style.display='none';
    }
    render() {
        var that=this;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <div className='theSet_discount_note' ref='theSet_discount_note'>
                    </div>
                    <div className='theSet_discount_note_content' ref='theSet_discount_note_content'>
                       <div className='theSet_discount_note_content_head'>
                           <span>优惠规则详解</span>
                           <div className='theSet_discount_note_content_head_remove' onClick={this.remove_theSe_dsicount.bind(this)}><Highlight_off style={{width:'29px',height:'29px'}}/></div>
                           </div>
                        <div className='theSet_discount_note_content_content'>
                           <ul>
                               {this.props.couponRulesInfo.map(function(couponRuleInfo){
                                  return (
                                      <li>
                                          <div>{couponRuleInfo.title}</div>
                                          <p>{couponRuleInfo.content}</p>
                                      </li>
                                  )
                               })}
                               </ul>

                            </div>
                    </div>
                    <AppBar style={{textAlign:'center',paddingRight:'128px'}}
                            title={<span style={styles.title}>结算页面</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                        />
                    <div className={this.getClassTheSettleBuyerSiteInfo()}>
                        <div className={this.getclassOwnInfo()}>
                            <div className={this.getClassOwnName()}>
                                张飞飞
                                </div>
                            <div className={this.getClassOwnPhoneNum()}>
                                139****3892
                                </div>
                            </div>
                        <div className={this.getClassTheSettleDetailInfo()}>
                           <div>
                               <Room color="gray"/>
                               </div>
                            <div className={this.getClassOwn_Detail_info()}>
                                浙江 宁波市 江北区 宁波大学南门公寓3号楼
                                </div>
                            </div>
                        <div className={this.getCLassArrow_Left()} onClick={this.goSelSitePage}>
                              <Arrow_right style={{height:'97px' ,width:'40px'}} color='gray'/>
                            </div>
                        </div>
                    <div style={{width:'100%',height:'calc(100% - 221px)',overflowY:'auto',overflowX:'hidden'}}>

                        <div style={{borderBottom:'1px solid #e6e6e6'}}>
                            <ul>
                                {
                                    this.props.Bags.map(function(current){
                                        return(
                                            <li>
                                                <div className={'TheSet_Drawer_title'}>
                                                    <div>
                                                        <FlatButton
                                                            label={current.bagName}
                                                            labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                            labelPosition="after"
                                                            icon={<Card_travel color='red'/>}
                                                            disabled={true}
                                                            />
                                                    </div>
                                                </div>
                                                {
                                                    current.foodsInfo.map(function(currentfood){
                                                        return (
                                                            <div className={'TheSel_Drawer_food_detail'}>
                                                                <div>
                                                                    <span>
                                                                       {currentfood.foodName}
                                                                        </span>

                                                                </div>
                                                                <div>
                                                                    <span>X</span>
                                                                    <span>{currentfood.foodNum}</span>
                                                                  <span>￥</span>  <span>{currentfood.foodPrice}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                        }
                                                        )
                                                }


                                            </li>
                                        )
                                    })



                                }




                            </ul>
                        </div>


                    <div style={{borderBottom:'1px solid #e6e6e6'}}>
                        <ListItem
                            key={2}
                            primaryText="支付方式"
                            leftIcon={<ContentSend />}
                            disabled={true}
                            nestedItems={[
              <ListItem key={1} primaryText="支付宝" leftIcon={<Checkbox />} />,
              <ListItem key={2} primaryText="微信支付" leftIcon={<Checkbox />} />,
              <ListItem key={3} primaryText="好友代付" leftIcon={<Checkbox />} />,
              <ListItem key={4} primaryText="平台代扣" leftIcon={<Checkbox />} />,
              <ListItem key={5} primaryText="银行卡支付" leftIcon={<Checkbox />} />
                ]}
                            />

                        </div>
                    <div style={{borderBottom:'1px solid #e6e6e6'}}>
                        <ListItem
                            key={2}
                            primaryText="优惠券"
                            leftIcon={<ContentSend />}
                            disabled={true}
                            nestedItems={
                           this.props.coupons.map(function(couponsInfo,index){
                             return(
                              <ListItem key={index} primaryText={couponsInfo} leftIcon={<Checkbox />} />
                             )
                           })
                }
                            />

                    </div>
                        <div style={{borderBottom:'1px solid #e6e6e6'}} onClick={this.goReMarkPage}>
                            <ListItem primaryText="订单备注" rightIcon={<Arrow_right />} />
                            </div>
                        <div style={{textAlign:'right',borderBottom:'1px solid #e6e6e6'}} onClick={this.show_discount_note.bind(this)}>
                            <FlatButton
                                label="优惠说明"
                                labelPosition="before"
                                icon={<Help_ontline/>}
                                />

                        </div>
                    <div className={this.getClassTheSettleFoot_Combin_Info()}>
                       <ul>
                          <li className={this.getClassTheSettleFoot_combin_list()}>
                              <div>商品金额</div>
                              <div><span>￥</span><span>{this.props.FoodAmount}</span></div>
                              </li>
                           <li className={this.getClassTheSettleFoot_combin_list()}>
                               <div>送餐费</div>
                               <div><span>+￥</span><span>{this.props.Thefreight}</span></div>
                           </li>

                           <li className={this.getClassTheSettleFoot_combin_list()}>
                               <div>优惠券</div>
                               <div><span>- ￥</span><span>{this.props.couponsAccount}</span></div>
                           </li>

                           </ul>


                        </div>
                        </div>





                    <div className={this.getClassTheSettlePage_account()}>

                        <div className={'Drawer_foot_content'}>
                            <div>
                                <span>合计￥</span>
                                <span>{this.props.TotalMoney}</span>
                            </div>
                            <div>
                                <FlatButton label="立即结算" labelStyle={{color:'white'}}  />
                            </div>
                        </div>
                    </div>


                </div>

            </MuiThemeProvider>
        );
    }
}

TheSettlementPage.defaultProps = {
    UserName:'张飞飞',
    UserSite:'浙江省 宁波市 江北区 宁波大学南门公寓 3号楼',
    Bags:[
        {bagName:'一号袋',
         foodsInfo:[
             {
                 foodName: '秘制鸡翅',
                 foodNum: 3,
                 foodPrice: 30,
             },
             {
                 foodName: '9寸奥尔良烤翅',
                 foodNum: 3,
                 foodPrice: 30,
             }

         ]
        },
        {bagName:'二号袋',
            foodsInfo:[
                {
                    foodName: '秘制鸡翅',
                    foodNum: 3,
                    foodPrice: 30,
                }
            ]
        },
        {bagName:'三号袋',
            foodsInfo:[
                {
                    foodName: '秘制鸡翅',
                    foodNum: 3,
                    foodPrice: 30,
                },
                {
                    foodName: '9寸奥尔良烤翅',
                    foodNum: 3,
                    foodPrice: 30,
                }

            ]
        }
    ],
    coupons:[
        '优惠券1',
        '优惠券2',
        '优惠券3'
    ],
    FoodAmount:166.00,
    Thefreight:2.00,
    couponsAccount:6.00,
    TotalMoney:162.00,
    couponRulesInfo:[
        {
            title:'Q1: 我是第一次下单，为何享受不了新用户的立减优惠？',
            content:'新用户是指第一次在我们app下单的用户，下单的账号，手机号码，设备，银行卡号，支付账号均是第一次在我们app上使用的才可以享受新用户优惠'
        },
        {
            title:'Q1: 我是第一次下单，为何享受不了新用户的立减优惠？',
            content:'新用户是指第一次在我们app下单的用户，下单的账号，手机号码，设备，银行卡号，支付账号均是第一次在我们app上使用的才可以享受新用户优惠'
        },
        {
            title:'Q1: 我是第一次下单，为何享受不了新用户的立减优惠？',
            content:'新用户是指第一次在我们app下单的用户，下单的账号，手机号码，设备，银行卡号，支付账号均是第一次在我们app上使用的才可以享受新用户优惠'
        },
        {
            title:'Q1: 我是第一次下单，为何享受不了新用户的立减优惠？',
            content:'新用户是指第一次在我们app下单的用户，下单的账号，手机号码，设备，银行卡号，支付账号均是第一次在我们app上使用的才可以享受新用户优惠'
        },
        {
            title:'Q1: 我是第一次下单，为何享受不了新用户的立减优惠？',
            content:'新用户是指第一次在我们app下单的用户，下单的账号，手机号码，设备，银行卡号，支付账号均是第一次在我们app上使用的才可以享受新用户优惠'
        }
    ]
}





export default TheSettlementPage;



