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

class MyOrderForm extends Component {


	getclassOwnInfoFormFoot() {
		return "OwnInfoFormFoot";
	}

	gotoding() {
		browserHistory.push('OrderForm');
	}

	gotochat() {
		browserHistory.push('DiscussForm');
	}

	gotoOwnInfo() {
		browserHistory.push('OwnInfoForm');
	}

	goback() {
		history.back();
	}

	getClassOwnInfoShopNum() {
		return 'OwnInfoShopNum';
	}

	gotoShopCart() {
		browserHistory.push('OrderIntroductionPage');
	}

	getClassOwnInfo_avar() {
		return 'OwnInfo_avar';
	}

	goMyOrderForm() {
		browserHistory.push('MyOrderForm');
	}

	getClassMyOrder_top() {
		return 'MyOrder_top'
	}

	getCLassMyOrder_all_info() {
		return 'MyOrder_all_info';
	}

	getClassMyOrder_detail_info() {
		return 'MyOrder_detail_info'
	}

	getMyOrder_shop_price() {
		return 'MyOrder_shop_price'
	}

	goback() {
		history.back();
	}


	render() {
		var that=this;
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div style={styles.container}>
					<div className={this.getClassMyOrder_top()}>
						<div onClick={this.goback}>
							<Arrow_left style={{width:'40px',height:'40px'}} color='gray'/>
						</div>
						<div>
							<DropDownMenu value={1} onChange={this.handleChange} openImmediately={true}>
								<MenuItem value={1} primaryText="全部订单"/>
								<MenuItem value={2} primaryText="已完成订单"/>
								<MenuItem value={3} primaryText="已取消订单"/>
							</DropDownMenu>
						</div>

					</div>
					<div className={this.getCLassMyOrder_all_info()}>
						<ul>
							{
								this.props.OrderInfo.map(function(info){
									return (
										<li>
											<Paper zDepth={1} style={{width:'100%',height:'240px'}} children={
                                <div className={that.getClassMyOrder_detail_info()}>
                                <div>{info.orderState}</div>
                                 <div>
                                 {
                                 info.orderImage.map(function(srcimg){
										 return(
										  <img src={srcimg}/>
										 )

                                   }
                                 )
                                 }

                                 <span>{info.orderDetailInfo}</span>
                                 </div>
                                 <div className={that.getMyOrder_shop_price()}>
                                 <span>共</span>
                                 <span>{info.foodNum}</span>
                                 <span>件商品</span>
                                 <span>实付款:</span>
                                 <span>{'￥' + info.purchasePrice}</span>
                                 </div>
                                 <div>
                                   <RaisedButton label={info.NextDo}  labelStyle={{color:'red'}} style={{border:'1px solid red'}}/>
                                 </div>


                                </div>
                                }/>

										</li>

									)
								})
							}




						</ul>
					</div>


				</div>
			</MuiThemeProvider>
		);
	}
}

MyOrderForm.defaultProps = {
   OrderInfo:[
	   {
		   orderState:'已付款',
		   orderImage:[
			   'http://o8ea97cbs.bkt.clouddn.com/2.jpg',
			   ],
		   orderDetailInfo:'肉松汉堡包 味道可口 肉松丰富 价格实惠 送货上门',
		   foodNum:1,
		   purchasePrice:25.00,
		   NextDo:'再次购买'
	   },
	   {
		   orderState:'等待付款',
		   orderImage:[
			   'http://o8ea97cbs.bkt.clouddn.com/cai1.png',
			   'http://o8ea97cbs.bkt.clouddn.com/egg1.jpg'
			   ],
		   orderDetailInfo:'',
		   foodNum:2,
		   purchasePrice:45.00,
		   NextDo:'去付款'
	   },
	   {
		   orderState:'已取消',
		   orderImage:['http://o8ea97cbs.bkt.clouddn.com/egg5.jpg'],
		   orderDetailInfo:'美味蛋炒饭 现炒 味道美味 鸡蛋采用农家新鲜土家蛋 分量十足 价格实惠',
		   foodNum:1,
		   purchasePrice:25.00,
		   NextDo:'再次购买'
	   },
	   {
		   orderState:'等待付款',
		   orderImage:['http://o8ea97cbs.bkt.clouddn.com/2.jpg'],
		   orderDetailInfo:'肉松汉堡包 味道可口 肉松丰富 价格实惠 送货上门',
		   foodNum:1,
		   purchasePrice:50.00,
		   NextDo:'去付款'
	   }
   ]
}

export default MyOrderForm;



