/**
 * Created by 13945 on 2016/7/28.
 */
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
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { browserHistory } from 'react-router';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Home from 'material-ui/svg-icons/action/home';
import Find from 'material-ui/svg-icons/action/find-in-page';
import Paper from 'material-ui/Paper';
import ShopCart from 'material-ui/svg-icons/action/shopping-cart';
const styles = {
    container: {

        height:"100%",
        position:'relative'
    },
    title: {
        cursor: 'pointer',
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    }

};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


class DiscussForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            open: false
        };
    }


    handleChange(value){
        console.log(value);
        this.setState({
            value: value,
        });
    };

    getClassDiscussFormTopic(){
        return "DiscussFormTopic"
    }



    getClassFootInfo(){
        return 'FootInfo'
    }

    getClassDiscussFormContent(){
        return 'DiscussFormContent';
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

    gotoChatDetail(){
        browserHistory.push('TopicSecondForm');
    }

    getClassItemOne(){
        return 'DiscussForm_ItemOne'
    }

    getClassDiscussForm_Detail_AllInfo(){
        return 'DiscussForm_Detail_AllInfo'
    }

    getCLassDiscu_Content_INfo(){
        return 'Discu_Content_INfo'
    }

    getClassDiscussShopNum(){
        return 'DiscussShopNum'
    }

    gotoShopCart(){
        browserHistory.push('OrderIntroductionPage');
    }



    render() {
      var that=this;
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
                            title={<span style={styles.title}>发现</span>}
                            iconElementLeft={<IconButton> <div ><Badge  style={{padding:'12px 24px 12px 0'}} badgeContent={4} primary={true}><NotificationsIcon />
                                </Badge></div>
                             </IconButton>}
                        />
                    <div style={{height:'170px',marginBottom:'1px'}}>
                        <Slider {...settings}>
                            {this.props.SlideImage.map(function(imageContent){
                                console.log(imageContent)
                                return(
                                    <div style={{width:'100%'}}><img width="100%" height="170px"src={imageContent}/></div>
                                )
                            })}
                        </Slider>
                    </div>


                    <div className={this.getCLassDiscu_Content_INfo()}>
                        <Tabs value={this.state.value}
                              onChange={this.handleChange.bind(this)}>
                            <Tab label="早餐文化"  value='a'  style={{color:'black',fontFamily:'微软雅黑'}}>
                                <div className={this.getClassItemOne()}>
                                    <ul>
                                        {
                                            this.props.CultureTopicSInfo.map(function(cultureInfo){
                                                return(
                                                    <li>
                                                        <Paper  zDepth={1} style={{width:'100%',height:'120px'}}
                                                                onClick={that.gotoChatDetail}
                                                                children={
                                               <div className={that.getClassDiscussForm_Detail_AllInfo()}>
                                                <div>
                                              <img src={cultureInfo.topicImage}/>
                                              </div>
                                          <div>
                                              <span style={{color:'red'}}>{cultureInfo.topicAuthor}</span>
                                              <p>{cultureInfo.topicTitle}</p>
                                              <span style={{textAlign:'center'}}>{cultureInfo.readPeople}阅读</span>

                                                 </div>

                                               </div>
                                               }/>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                </div>
                            </Tab>
                            <Tab label="学做早餐" value='b' style={{color:'black',fontFamily:'微软雅黑'}}>
                                <div className={this.getClassItemOne()}>
                                    <ul>
                                        {
                                            this.props.LearnTopicInfo.map(function(cultureInfo){
                                                return(
                                                    <li>
                                                        <Paper  zDepth={1} style={{width:'100%',height:'120px'}}
                                                                onClick={that.gotoChatDetail}
                                                                children={
                                               <div className={that.getClassDiscussForm_Detail_AllInfo()}>
                                                <div>
                                              <img src={cultureInfo.topicImage}/>
                                              </div>
                                          <div>
                                              <span style={{color:'red'}}>{cultureInfo.topicAuthor}</span>
                                              <p>{cultureInfo.topicTitle}</p>
                                              <span style={{textAlign:'center'}}>{cultureInfo.readPeople}阅读</span>

                                                 </div>

                                               </div>
                                               }/>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Tab>
                            <Tab  label="早餐搭配" value='c' style={{color:'black',fontFamily:'微软雅黑'}}>
                                <div className={this.getClassItemOne()}>
                                    <ul>
                                        {
                                            this.props.MatchTopicInfo.map(function(cultureInfo){
                                                return(
                                                    <li>
                                                        <Paper  zDepth={1} style={{width:'100%',height:'120px'}}
                                                                onClick={that.gotoChatDetail}
                                                                children={
                                               <div className={that.getClassDiscussForm_Detail_AllInfo()}>
                                                <div>
                                              <img src={cultureInfo.topicImage}/>
                                              </div>
                                          <div>
                                              <span style={{color:'red'}}>{cultureInfo.topicAuthor}</span>
                                              <p>{cultureInfo.topicTitle}</p>
                                              <span style={{textAlign:'center'}}>{cultureInfo.readPeople}阅读</span>

                                                 </div>

                                               </div>
                                               }/>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Tab>
                        </Tabs>



                        </div>



                    <div className={this.getClassFootInfo()}>
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
DiscussForm.defaultProps={
    SlideImage:[
         'http://o8ea97cbs.bkt.clouddn.com/zaocan2.jpg',
        'http://o8ea97cbs.bkt.clouddn.com/zaocan3.jpg',
        'http://o8ea97cbs.bkt.clouddn.com/zaocan4.jpg',
    ],
    CultureTopicSInfo:[
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告妈妈',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告妈妈',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告妈妈',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告妈妈',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        }
    ],
    LearnTopicInfo:[
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告宝宝',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告宝宝',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告宝宝',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告宝宝',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        }
    ],

    MatchTopicInfo:[
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告老板',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告老板',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告老板',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        },
        {
            topicImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            topicAuthor:'报告老板',
            topicTitle:'四招让平凡的鸡蛋发挥无穷的魅力！宝宝都流泪',
            readPeople:708
        }
    ]

}

//function mapStateToProps({ articleCarousel, articleList }) {
//	return {
//		SlideImage: articleCarousel.articleCarouselUrls,
//		CultureTopicSInfo: articleList.articleCultureList,
//		LearnTopicInfo: articleList.articleLeaningList,
//		MatchTopicInfo: articleList.articleTieInList,
//	};
//}

//export default connect(mapStateToProps)(DiscussForm);

export default DiscussForm;



