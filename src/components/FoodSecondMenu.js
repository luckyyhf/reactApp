/**
 * Created by 13945 on 2016/7/25.
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
import  BackIcon from 'material-ui/svg-icons/navigation/arrow-back.js'
import  Share from 'material-ui/svg-icons/social/share.js'
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Favorite_border from 'material-ui/svg-icons/action/favorite-border.js';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import { browserHistory } from 'react-router';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
import Card_travel from 'material-ui/svg-icons/action/card-travel.js';
import Delete from 'material-ui/svg-icons/action/delete.js';
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Drawer from 'material-ui/Drawer';
const styles = {
    container: {
        //paddingTop: 200,
        //marginLeft: 200,
        height:"100%",
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



class foodSecondMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    getClassDetailInfo(){
        return 'DetailInfo'
    }

    getClassFoodSecDetailFir(){
        return 'FoodSecDetailFir';
    }


    getClassFoodSecDetailThir(){

        return 'FoodSecDetailThir';
    }

    handleToggle(){
        this.setState({open: !this.state.open});
    }


    getClassFoodSecondMenu_footSel(){
        return 'FoodSecondMenu_footSel';
    }


    getClassFoodSecondMenuNUM(){
       return 'FoodSecondMenuNUM';
    }


    getClassShopNum(){
        return 'ShopNum';
    }

    gotoBuyPage(){
        browserHistory.push('TheSettlementPage');
    }

    goback(){
        history.back();
    }

    getClassFoodSecondMenu_SHow(){
        return 'FoodSecondMenu_SHow'
    }

    getClassDrawer_title(){
        return 'Drawer_title'
    }

    getClassDrawer_container(){
        return 'Drawer_container'
    }

    Drawer_food_detail(){
        return 'Drawer_food_detail'
    }

    getClassDrawer_foot_content(){
        return 'Drawer_foot_content'
    }

    gotoPersonOFAdmirePage(){
        browserHistory.push('PersonOFAdmirePage');
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
                            title={<span style={styles.title}>菜单详情区</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                            iconElementRight={<FlatButton  icon={<Share/>}/>}
                        />
                    <div style={{height:'170px'}}>
                        <Slider {...settings}>
                            { this.props.SlideImage.map(function(current){
                                return (
                                    <div style={{width:'100%'}}><img width="100%" height="170px"src={current}/></div>
                                )

                            })}
                        </Slider>
                    </div>

                    <div className={this.getClassDetailInfo()}>
                        <div className={this.getClassFoodSecDetailFir()}>
                           <div>{this.props.FoodFirTitle}</div>
                           <div>{this.props.FoodSecTitle}</div>
                           <div>
                               <div><span style={{fontSize:'17px'}}>￥</span><span>{this.props.FoodPrice}</span></div>
                               <div><RaisedButton label="添加购物车" primary={true} /></div>
                           </div>
                           <div>
                               <div>
                                   <span style={{color:"gray"}}>{'离结束时间:'}</span><span>{this.props.EndTime}</span>
                               </div>
                               <div>
                                   <span style={{color:"gray"}}>{'剩余份数:'}</span><span>{this.props.FoodRemainingPortion}</span>
                               </div>
                               </div>

                            <div>
                                <div className='include_avar'>
                                    {this.props.BuyersAvar.map(function(current){
                                        return (
                                            <Avatar src={current} />
                                        )
                                    })}

                                </div>
                                <div>
                                    <FlatButton
                                        onClick={this.gotoPersonOFAdmirePage}
                                        label={this.props.BuyersNum + '人已购买'}
                                        labelPosition="before"
                                        icon={<Arrow_right style={{fill:'gray',color:'gray'}} />}
                                        />
                                    </div>
                            </div>

                            <div>
                               <div>
                                   <Favorite_border style={{color:'#227700'}}/>
                                   </div>
                                <div>
                                    {
                                        this.props.AdmirePersonName.map(function(current){
                                            return (
                                                <span>{current}</span>
                                            )
                                        })
                                    }
                                    </div>
                                <div>
                                    <FlatButton
                                        label="赞"
                                        labelPosition="before"
                                        primary={true}
                                        icon={ <Favorite_border style={{color:'red',fill:'red'}}/>}
                                        />
                                    </div>

                                </div>

                            </div>



                        <div className={this.getClassFoodSecDetailThir()}>

                            <List>
                                <Subheader>购物须知</Subheader>
                                {
                                    this.props.ShoppingInformation.map(function(current){
                                        return (
                                            <ListItem primaryText={current}  style={{lineHeight:'25px'}} />
                                        )
                                    })
                                }
                             </List>
                            <List>
                                <Subheader>菜单介绍</Subheader>
                                {
                                    this.props.MenuIntroduction.map(function(current){
                                        return (
                                            <ListItem primaryText={current}  style={{lineHeight:'25px'}} />
                                        )
                                    })
                                }
                            </List>
                        </div>

                        </div>
                    <div className={this.getClassFoodSecondMenu_SHow()}>
                        <IconButton
                            iconStyle={{width:'40px',height:'40px'}}
                            style={{width:'60px',height:'60px'}}
                            onTouchTap={this.handleToggle.bind(this)}
                            >
                            <ShopCart className='OrderForm_ShopCart'/>
                        </IconButton>
                         <div className='food_num'>
                             <span>1</span>
                             </div>
                        <Drawer width={300} height={300} open={this.state.open} >
                         <div className={this.getClassDrawer_container()}>
                             <ul>
                                <li>
                                    <div className={this.getClassDrawer_title()}>
                                        <div>
                                            <FlatButton
                                                label="一号袋"
                                                labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                labelPosition="after"
                                                icon={<Card_travel color='red'/>}
                                                disabled={true}
                                                />
                                            </div>
                                        <div>
                                            <FlatButton
                                                label="清空购物车"
                                                labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                labelPosition="after"
                                                icon={<Delete />}
                                                disabled={true}
                                                />
                                            </div>
                                        </div>
                                    <div className={this.Drawer_food_detail()}>
                                        <div>
                                            <span>
                                                秘制鸡翅
                                                </span>

                                            </div>
                                        <div>
                                            <span style={{color:'red',paddingRight:'10px',fontSize:'16px'}}>￥30</span>
                                            <FloatingActionButton mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'25px',height:'25px'}} >
                                                <ContentDel className='contentDel'/>
                                            </FloatingActionButton>
                                            <span style={{padding:'0 5px'}}>3</span>
                                            <FloatingActionButton mini={true} secondary={true} iconStyle={{width:'25px',height:'25px'}} >
                                                <ContentAdd />
                                            </FloatingActionButton>
                                        </div>
                                        </div>
                                    <div className={this.Drawer_food_detail()}>
                                        <div>
                                            <span>
                                                9寸奥尔良
                                                </span>

                                        </div>
                                        <div>
                                            <span style={{color:'red',paddingRight:'10px',fontSize:'16px'}}>￥68</span>
                                            <FloatingActionButton mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'25px',height:'25px'}} >
                                                <ContentDel className='contentDel'/>
                                            </FloatingActionButton>
                                            <span style={{padding:'0 5px'}}>5</span>
                                            <FloatingActionButton mini={true} secondary={true} iconStyle={{width:'25px',height:'25px'}} >
                                                <ContentAdd />
                                            </FloatingActionButton>
                                        </div>
                                    </div>
                                    </li>

                                 <li>
                                     <div className={this.getClassDrawer_title()}>
                                         <div>
                                             <FlatButton
                                                 label="二号袋"
                                                 labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                 labelPosition="after"
                                                 icon={<Card_travel />}
                                                 disabled={true}
                                                 />
                                         </div>

                                     </div>
                                     <div className={this.Drawer_food_detail()}>
                                         <div>
                                            <span>
                                                秘制鸡翅
                                                </span>

                                         </div>
                                         <div>
                                             <span style={{color:'red',paddingRight:'10px',fontSize:'16px'}}>￥30</span>
                                             <FloatingActionButton mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'25px',height:'25px'}} >
                                                 <ContentDel className='contentDel'/>
                                             </FloatingActionButton>
                                             <span style={{padding:'0 5px'}}>3</span>
                                             <FloatingActionButton mini={true} secondary={true} iconStyle={{width:'25px',height:'25px'}} >
                                                 <ContentAdd />
                                             </FloatingActionButton>
                                         </div>
                                     </div>

                                 </li>

                                 <li>
                                     <div className={this.getClassDrawer_title()}>
                                         <div>
                                             <FlatButton
                                                 label="三号袋"
                                                 labelStyle={{color:'black',fontFamily:'微软雅黑'}}
                                                 labelPosition="after"
                                                 icon={<Card_travel />}
                                                 disabled={true}
                                                 />
                                         </div>

                                     </div>
                                     <div className={this.Drawer_food_detail()}>
                                         <div>
                                            <span>
                                                秘制鸡翅
                                                </span>

                                         </div>
                                         <div>
                                             <span style={{color:'red',paddingRight:'10px',fontSize:'16px'}}>￥30</span>
                                             <FloatingActionButton mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'25px',height:'25px'}} >
                                                 <ContentDel className='contentDel'/>
                                             </FloatingActionButton>
                                             <span style={{padding:'0 5px'}}>3</span>
                                             <FloatingActionButton mini={true} secondary={true} iconStyle={{width:'25px',height:'25px'}} >
                                                 <ContentAdd />
                                             </FloatingActionButton>
                                         </div>
                                     </div>
                                     <div className={this.Drawer_food_detail()}>
                                         <div>
                                            <span>
                                                9寸奥尔良
                                                </span>

                                         </div>
                                         <div>
                                             <span style={{color:'red',paddingRight:'10px',fontSize:'16px'}}>￥68</span>
                                             <FloatingActionButton mini={true} secondary={true} iconStyle={{backgroundColor:'white',width:'25px',height:'25px'}} >
                                                 <ContentDel className='contentDel'/>
                                             </FloatingActionButton>
                                             <span style={{padding:'0 5px'}}>5</span>
                                             <FloatingActionButton mini={true} secondary={true} iconStyle={{width:'25px',height:'25px'}} >
                                                 <ContentAdd />
                                             </FloatingActionButton>
                                         </div>
                                     </div>
                                 </li>

                                 </ul>
                             </div>
                            <div className={this.getClassDrawer_foot_content()}>
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
            </MuiThemeProvider>
        );
    }
}

foodSecondMenu.defaultProps = {
    //SlideImage:['http://o8ea97cbs.bkt.clouddn.com/cai1_3.png',
    //    'http://o8ea97cbs.bkt.clouddn.com/cai1_2.png',
    //    'http://o8ea97cbs.bkt.clouddn.com/cai1_1.png'],
    //FoodFirTitle:'鸭肉营养丰富、烧过后肉质熟烂、配合梅干菜的特有香气、味道更是独特。',
    //FoodSecTitle:'满160元包邮梅州正宗烤鸭、口味鲜美、严格按照正规方式宰杀烧烤',
    //FoodPrice:56.00,
    //EndTime:'00:43:56',
    //FoodRemainingPortion:129,
    //BuyersAvar:['http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
    //   'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
    //    'http://o8ea97cbs.bkt.clouddn.com/avar.jpg'
    //],
    //BuyersNum:56,
    //AdmirePersonName:['嘻嘻嘻','哈哈哈','嘿嘿嘿'],
    //ShoppingInformation:[
    //    '1、你可以选择网上下单，也可以电话下单',
    //    '2、如有问题可以拨打客服电话寻求帮助'
    //],
    //MenuIntroduction:[
    //    '1、自贡盐帮菜分为盐商菜、盐工菜、会馆菜三大支系，以麻辣味、辛辣味、甜酸味为三大类别。',
    //    '2、具备川菜“百菜百味、烹调技法多样”的传统之外，更具有“味厚香浓、辣鲜刺激”的特点'
    //]




};

function mapStateToProps({ food }) {
	console.log(food);
	return {
		//SlideImage: food.SlideImage,
		//FoodFirTitle: food.FoodFirTitle,
		//FoodSecTitle: food.FoodSecTitle,
		//FoodPrice: food.FoodPrice,
		//EndTime: food.EndTime,
		//FoodRemainingPortion: food.FoodRemainingPortion,
		//BuyersAvar:['http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
		//   'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
		//    'http://o8ea97cbs.bkt.clouddn.com/avar.jpg'
		//],
		//BuyersNum:56,
		//AdmirePersonName:['嘻嘻嘻','哈哈哈','嘿嘿嘿'],
		//ShoppingInformation:[
		//    '1、你可以选择网上下单，也可以电话下单',
		//    '2、如有问题可以拨打客服电话寻求帮助'
		//],
		//MenuIntroduction:[
		//    '1、自贡盐帮菜分为盐商菜、盐工菜、会馆菜三大支系，以麻辣味、辛辣味、甜酸味为三大类别。',
		//    '2、具备川菜“百菜百味、烹调技法多样”的传统之外，更具有“味厚香浓、辣鲜刺激”的特点'
		//]
		SlideImage:['http://o8ea97cbs.bkt.clouddn.com/cai1_3.png',
		    'http://o8ea97cbs.bkt.clouddn.com/cai1_2.png',
		    'http://o8ea97cbs.bkt.clouddn.com/cai1_1.png'],
		FoodFirTitle: food.FoodFirTitle,
		FoodSecTitle:'满160元包邮梅州正宗烤鸭、口味鲜美、严格按照正规方式宰杀烧烤',
		FoodPrice:56.00,
		EndTime:'00:43:56',
		FoodRemainingPortion:129,
		BuyersAvar:['http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
		   'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
		    'http://o8ea97cbs.bkt.clouddn.com/avar.jpg'
		],
		BuyersNum:56,
		AdmirePersonName:['嘻嘻嘻','哈哈哈','嘿嘿嘿'],
		ShoppingInformation:[
		    '1、你可以选择网上下单，也可以电话下单',
		    '2、如有问题可以拨打客服电话寻求帮助'
		],
		MenuIntroduction:[
		    '1、自贡盐帮菜分为盐商菜、盐工菜、会馆菜三大支系，以麻辣味、辛辣味、甜酸味为三大类别。',
		    '2、具备川菜“百菜百味、烹调技法多样”的传统之外，更具有“味厚香浓、辣鲜刺激”的特点'
		]
	};
}

export default connect(mapStateToProps)(foodSecondMenu);

//export default foodSecondMenu;



