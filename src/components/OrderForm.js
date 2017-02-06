/**
 * Created by 13945 on 2016/7/22.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
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
import { browserHistory } from 'react-router';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
import Search from 'material-ui/svg-icons/action/search';
import Home from 'material-ui/svg-icons/action/home';
import Find from 'material-ui/svg-icons/action/find-in-page';
import Drawer from 'material-ui/Drawer';
import Card_travel from 'material-ui/svg-icons/action/card-travel.js';
import Delete from 'material-ui/svg-icons/action/delete.js';

import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
const styles = {
    container: {

        height:"100%",
        position:'relative'
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


class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            open: false,
            foodNum:0,
            Bags:props.CartFoodInfo,
            BagsIndex:[1,2],
            valueMultiple: ['3', '5'],
        };
    }


    handleChange(value){
        console.log(value);
        this.setState({
            value: value,
        });
        console.log(this.props.ChineseMedal)
    };

    handleToggle(){
        this.setState({open: !this.state.open});
    }

    gotoBuyPage(){
        browserHistory.push('TheSettlementPage');
    }



    getClassFoodInfo(){
        return "foodInfo";
    }



    getClassOrderFoodList(){
        return 'OrderFoodList';
    }

    getClassOrderFoodInfoIntro(){
        return 'OrderFoodInfoIntro';
    }

    getClassOrderFoodImg(){
        return 'OrderFoodImg'
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
    gotoDetailPage(){
        browserHistory.push('FoodSecondMenu');
    }

    gotoDetailBuyPage(){
        browserHistory.push('OrderIntroductionPage');
    }

    getClassOrderFootSel(){
        return 'OrderFootSel';
    }

    getClassOrderShopNum(){
        return 'OrderShopNum';
    }

    gotoShopCart(){
        browserHistory.push('TheSettlementPage');
    }

    getClassOrder_num_price(){
        return 'Order_num_price';
    }

    getClassOrderForm_Food_all_info(){
      return 'OrderForm_Food_all_info';
    }

    getClassOrder_Store(){
        return 'Order_Store'
    }


    Del_ChineseFood_Num(index){
        if(this.refs['Chinese'+ index].innerHTML>0){
            this.refs['Chinese'+ index].innerHTML--;
            this.setState({
                foodNum:--this.state.foodNum
            })
        }

    }

    ADD_ChineseFood_Num(index){
        this.refs['Chinese'+ index].innerHTML++;
        this.setState({
            foodNum:++this.state.foodNum
        })
    }
    Del_WestornFood_Num(index){
        if(this.refs['Westorn'+ index].innerHTML>0){
            this.refs['Chinese'+ index].innerHTML--;
            this.setState({
                foodNum:--this.state.foodNum
            })
        }

    }

    ADD_WestornFood_Num(index){
        this.refs['Westorn'+ index].innerHTML++;
        this.setState({
            foodNum:++this.state.foodNum
        })
    }

    showComponent(value){
        var index=value.split('-');
        var arr=[];
        for(var i=0;i<this.state.Bags.length;i++){
            if(this.state.Bags[i].length>0){
                arr.push(i+1);
            }else{
                arr.push(i+1);
                break;
            }
        }
        this.setState({
            BagsIndex:arr,
        });
        console.log(this.state.BagsIndex);
    }

    handleChangeMultiple (event, value)  {
        this.setState({
            valueMultiple: value,
        });
    };


    openInfoPage(){
        browserHistory.push('InfoNotify');
    }




    render() {
       var timer;
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
        var that = this;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>

                <div style={styles.container}>
                    <AppBar style={{textAlign:'center'}}
                        title={<span style={styles.title}>定位区</span>}

                        iconElementLeft={<IconButton> <div><Badge  style={{padding:'12px 24px 12px 0'}} badgeContent={this.props.unreadNum} primary={true}><NotificationsIcon />


                                </Badge></div>
                             </IconButton>}
                        iconElementRight={<IconButton><Search color='white' style={{width:'30px',height:'30px'}}/> </IconButton>}
                        />
                    <div style={{height:'170px'}}>
                        <Slider {...settings}>
                            {
                                this.props.SlideImage.map(function(current){
                                    return (
                                <div style={{width:'100%'}}><img width="100%" height="170px"src={current}/></div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                     <div className={this.getClassOrderForm_Food_all_info()}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        >
                        <Tab label="中餐" value="a" style={{fontSize:'19px'}}>

                            <div className={this.getClassFoodInfo()}>
                                <ul className={this.getClassOrderFoodList()}>
                                    { this.props.ChineseMedal.map(
                                        function(current,index){
                                            console.log(current.pictureUrl)
                                            console.log('aaaaaaa');
                                            return(
                                                <li>
                                                    <div className={this.getClassOrderFoodImg()} onClick={this.gotoDetailPage}>
                                                        <img src={current.foodImage} />
                                                    </div>
                                                    <div className={this.getClassOrderFoodInfoIntro()}>
                                                        <p>{current.foodName}</p>
                                                        <span>{current.foodInfo}</span>
                                                        <div className={this.getClassOrder_num_price()}>
                                                            <span>{current.foodprice}</span>
                                                            <div>
                                                                <FloatingActionButton  mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'30px',height:'30px'}} zDepth='1' onClick={
                                                                function(){
                                                                that.Del_ChineseFood_Num(index);
                                                                }
                                                                }
                                                                >
                                                                    <ContentDel className='contentDel'/>
                                                                </FloatingActionButton>
                                                                <span ref={'Chinese'+index}>0</span>
                                                                <FloatingActionButton mini={true} secondary={true}  iconStyle={{width:'30px',height:'30px'}} zDepth='1' onClick={
                                                                function(){
                                                                that.ADD_ChineseFood_Num(index);
                                                                }
                                                                }>
                                                                    <ContentAdd />
                                                                </FloatingActionButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                )
                                    }, this)
                                    }


                                </ul>
                            </div>
                        </Tab>
                        <Tab label="西餐" value="b" style={{fontSize:'19px'}}>
                            <div className={this.getClassFoodInfo()}>
                                <ul className={this.getClassOrderFoodList()}>
                                    { this.props.EuropeanFood.map(
                                        function(current,index){
                                            return(
                                                <li>
                                                    <div className={this.getClassOrderFoodImg()} onClick={this.gotoDetailPage}>
                                                        <img src={current.foodImage} />
                                                    </div>
                                                    <div className={this.getClassOrderFoodInfoIntro()}>
                                                        <p>{current.foodName}</p>
                                                        <span>{current.foodInfo}</span>
                                                        <div className={this.getClassOrder_num_price()}>
                                                            <span>{current.foodprice}</span>
                                                            <div>
                                                                <FloatingActionButton  mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'30px',height:'30px'}} zDepth='1' onClick={
                                                                function(){
                                                                that.Del_WestornFood_Num(index);
                                                                }
                                                                }
                                                                    >
                                                                    <ContentDel className='contentDel'/>
                                                                </FloatingActionButton>
                                                                <span ref={'Westorn'+index}>0</span>
                                                                <FloatingActionButton mini={true} secondary={true}  iconStyle={{width:'30px',height:'30px'}} zDepth='1' onClick={
                                                                function(){
                                                                that.ADD_WestornFood_Num(index);
                                                                }
                                                                }>
                                                                    <ContentAdd />
                                                                </FloatingActionButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )


                                        }, this)
                                    }
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                    <div className={this.getClassOrderFootSel()}>
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
                    <div >
                    <div className={this.getClassOrder_Store()}>
                        <div className='ShopCart_move'>
                            <IconButton
                                iconStyle={{width:'40px',height:'40px'}}
                                style={{width:'60px',height:'60px'}}
                                onTouchTap={this.handleToggle.bind(this)}
                                >
                                <ShopCart className='OrderForm_ShopCart'/>
                            </IconButton>
                            <div className={this.getClassOrderShopNum()}>
                                {this.props.foodNum}
                            </div>
                        </div>
                        <Drawer width={300} height={300} open={this.state.open}>
                            <div className={'Drawer_container'}>
                                <ul>
                                    {
                                        this.state.Bags.map(function(current,index,arr){

                                            var cleanCart='';
                                            var cartState='';
                                            if(index==0){
                                                cleanCart= <div>
                                                    <FlatButton
                                                        label="清空购物车"
                                                        labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                        labelPosition="after"
                                                        icon={<Delete />}
                                                        disabled={true}
                                                        />
                                                </div>
                                            }
                                            if(index>0){
                                                if(current.length>0||arr[index-1].length>0){
                                                    cartState=<div className={'Drawer_title'}>
                                                        <div>
                                                            <FlatButton
                                                                label={(index+1)+'号袋'}
                                                                labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                                labelPosition="after"
                                                                icon={<Card_travel color='red'/>}
                                                                disabled={true}
                                                                />
                                                        </div>
                                                        {cleanCart}
                                                    </div>
                                                }
                                            }else if(index==0){
                                                cartState=<div className={'Drawer_title'}>
                                                    <div>
                                                        <FlatButton
                                                            label={(index+1)+'号袋'}
                                                            labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                            labelPosition="after"
                                                            icon={<Card_travel color='red'/>}
                                                            disabled={true}
                                                            />
                                                    </div>
                                                    {cleanCart}
                                                </div>
                                            }

                                            return (
                                                <li>
                                                     {cartState}
                                                    {
                                                        current.map(function(foodinfo,index1){
                                                        return(
                                                            <div className={'Drawer_food_detail'} ref={index+'_'+index1}onMouseDown={function(){
                                                                 timer=setTimeout(function(){
                                                                   that.showComponent(index+'-'+index1);
                                                                 },3000)
                                                            }} onMouseUp={function(){
                                                                 clearTimeout(timer);
                                                            }} >
                                                                <div>
                                                                    <span>
                                                                       {foodinfo.cartfoodName}
                                                                        </span>

                                                                </div>

                                                                <div>
                                                                    <span style={{color:'red',paddingRight:'10px',fontSize:'16px'}}>{'￥'+foodinfo.cartfoodPrice}</span>
                                                                    <FloatingActionButton mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'25px',height:'25px'}}  zDepth='1'>
                                                                        <ContentDel className='contentDel'/>
                                                                    </FloatingActionButton>
                                                                    <span style={{padding:'0 5px',fontSize:'18px'}}>{foodinfo.cartfoodnum}</span>
                                                                    <FloatingActionButton mini={true} secondary={true} iconStyle={{width:'25px',height:'25px'}}  zDepth='1'>
                                                                        <ContentAdd />
                                                                    </FloatingActionButton>
                                                                    <div className="fendai">
                                                                        <IconMenu
                                                                            iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                                                                            onChange={that.handleChangeMultiple.bind(that)}
                                                                            value={that.state.valueMultiple}
                                                                            multiple={true}
                                                                            >
                                                                            <MenuItem value="1" primaryText="Blu-ray" />
                                                                            <MenuItem value="2" primaryText="Cassette" />
                                                                            <MenuItem value="3" primaryText="CD" />
                                                                            <MenuItem value="4" primaryText="DVD Audio" />
                                                                            <MenuItem value="5" primaryText="Hybrid SACD" />
                                                                            <MenuItem value="6" primaryText="Vinyl" />
                                                                        </IconMenu>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                        }


                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                            <div className={'Drawer_foot_content'}>
                                <div>
                                    <span>共￥</span>
                                    <span>113</span>
                                </div>
                                <div>
                                    <FlatButton label="选好了" labelStyle={{color:'white'}} onClick={this.gotoBuyPage} />
                                </div>
                            </div>
                        </Drawer>

                    </div>
                       </div>
                   </div>
            </MuiThemeProvider>
        );
    }
}

const chicken2 = 'http://o8ea97cbs.bkt.clouddn.com/chicken2.jpg';
const cai1 = 'http://o8ea97cbs.bkt.clouddn.com/cai1.png';

OrderForm.defaultProps = {
    SlideImage: ['http://o8ea97cbs.bkt.clouddn.com/meishi3.png',
        'http://o8ea97cbs.bkt.clouddn.com/meishi3.png',
        'http://o8ea97cbs.bkt.clouddn.com/meishi3.png'] ,
    ChineseMedal:[
        {
          foodImage:cai1,
          foodName:'八宝榛子酱',
          foodInfo:'月售125份 好评率100%',
          foodprice:'￥10'
        },
        {
            foodImage:cai1,
            foodName:'八宝榛子酱',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        },
        {
            foodImage:cai1,
            foodName:'八宝榛子酱',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        },
        {
            foodImage:cai1,
            foodName:'八宝榛子酱',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        }
    ],
    EuropeanFood:[
        {
            foodImage:chicken2,
            foodName:'脆皮炒虾',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        },
        {
            foodImage:chicken2,
            foodName:'脆皮炒虾',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        },
        {
            foodImage:chicken2,
            foodName:'脆皮炒虾',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        },
        {
            foodImage:chicken2,
            foodName:'脆皮炒虾',
            foodInfo:'月售125份 好评率100%',
            foodprice:'￥10'
        },

    ],
    CartFoodTotalNum:5,
    CartFoodInfo:[
        [ {
            cartfoodName:'秘制鸡翅',
            cartfoodPrice:10.00,
            cartfoodnum:3
        },
            {
                cartfoodName:'9寸奥尔良',
                cartfoodPrice:12.00,
                cartfoodnum:1
            },
            {
                cartfoodName:'冰镇雪碧',
                cartfoodPrice:6.00,
                cartfoodnum:1
            },
        ],
        [],[],[],[]


    ],
    CartFoodTotalMoney:156.00



};

//function mapStateToProps({ foodList, homePageCarousel, notification, cart }) {
//	return {
//		SlideImage: homePageCarousel.homePageCarouselUrls,
//		ChineseMedal: foodList.chineseFoodList,
//		EuropeanFood: foodList.westernFoodList,
//		unreadNum: notification.unreadNum,
//		foodNum: cart.cartFoodNum
//	};
//}

//export default connect(mapStateToProps)(OrderForm);
export default OrderForm


