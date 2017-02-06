/**
 * Created by 13945 on 2016/7/26.
 */
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
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Answer from 'material-ui/svg-icons/action/question-answer';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Favorite_border from 'material-ui/svg-icons/action/favorite-border';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Create from 'material-ui/svg-icons/content/create'
import Arrow_left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Arrow_right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
const styles = {
    container: {
        //paddingTop: 200,
        //marginLeft: 200,
        height:'100%',
        position:'relative',
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
    },
    smallIcon: {
        width: 25,
        height: 25,
        color:'gray'
    },
    mediumIcon: {
        width: 48,
        height: 48,
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    small: {
        width: 60,
        height: 60,
        padding: 16,
        color:'gray'
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    },
    large: {
        width: 120,
        height: 120,
        padding: 30,
    },

};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});



class TopicSecondForm extends Component {

    getClassTopicSecondForm_content(){
        return 'TopicSecondForm_content';
    }

    getClassTopicSec_OwnAvat(){
        return 'TopicSec_OwnAvat';
    }

    getClassTopicSec_Detail_content(){
        return 'Sec_Detail_content'
    }

    getClassTopicFoot(){
        return 'TopicFoot';
    }

    goback(){
        history.back();
    }

    render() {

      var that=this;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar style={{textAlign:'center'}}
                            title={<span style={styles.title}>话题菜单区</span>}
                            iconElementLeft={<IconButton onClick={this.goback} style={{width:'40px',height:'40px'}} iconStyle={styles.iconStyle}><Arrow_left /></IconButton>}
                            iconElementRight={<FlatButton  icon={<Share/>}/>}
                        />
                    <div className={this.getClassTopicSecondForm_content()}>
                        <div className={this.getClassTopicSec_OwnAvat()}>
                        <img src={this.props.AuthorImage}/>
                            <div>{this.props.AuthorName}</div>
                        </div>
                     <ul>
                         {
                             this.props.content.map(function(content){
                                 return(
                                 <li>
                                     <div className={that.getClassTopicSec_Detail_content()}>
                                         <img src={content.contentImage}/>
                                     </div>
                                     <p>{content.contentText}</p>
                                 </li>

                                 )
                             })
                         }

                         </ul>
                        <div className='aa'>
                            <div className='PersonOfZan'>
                                {
                                    this.props.AdmirePerSonAvAt.map(function(img){
                                        return (
                                            <Avatar src={img} />
                                        )
                                    })
                                }
                                <div className='personNum_topicSec'>
                                    <FlatButton
                                        label={this.props.AdmirePerSonNum + "人点赞"}
                                        style={{height:'60px'}}
                                        labelPosition="before"
                                        icon={<Arrow_right />}
                                        />
                                </div>
                                </div>
                            <p style={{fontSize:'20px',textAlign:'left',fontFamily:'微软雅黑',margin:'10px'}}>全部评论</p>
                            <ul>
                                {
                                    this.props.ObserverInfo.map(function(info){
                                        return (
                                            <li style={{borderBottom:'1px solid #e6e6e6'}}>
                                                <div style={{float:'left'}}>
                                                    <ListItem
                                                        disabled={true}
                                                        leftAvatar={ <Avatar src={info.observerImage}  />
                                                          }
                                                        >
                                                        {info.observerName}
                                                    </ListItem>
                                                </div>
                                                <div style={{float:'right',paddingTop:'17px',paddingRight:'10px'}}>
                                                    {info.observertime}前发布
                                                </div>
                                                <div style={{clear:'both'}}></div>
                                                <p style={{paddingLeft:'60px'}}>{info.observerContent}</p>

                                                <div style={{textAlign:'right'}}>
                                                    <FlatButton
                                                        label="写评论"
                                                        labelPosition="after"
                                                        primary={true}
                                                        icon={<Create color='gray'/>}
                                                        />
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    <div className={this.getClassTopicFoot()}>
                        <div>
                            <FlatButton
                                label="12"
                                labelPosition="after"
                                primary={true}
                                style={styles.button}
                                icon={ <Favorite_border color='gray'/>}
                                />
                        </div>
                        <div>
                            <FlatButton
                                label="写评论"
                                labelPosition="after"
                                primary={true}
                                style={styles.button}
                                icon={   <Create color='gray'/>}
                                />
                        </div>
                        <div>
                            <FlatButton
                                label="3"
                                labelPosition="after"
                                primary={true}
                                style={styles.button}
                                icon={<CommunicationChatBubble color='gray'/>}
                                />
                        </div>
                        </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

TopicSecondForm.defaultProps={
    AuthorImage:'http://o8ea97cbs.bkt.clouddn.com/lama.png',
    AuthorName:'妈妈说',
    content:[
        {
            contentImage:'http://o8ea97cbs.bkt.clouddn.com/jidan.jpg',
            contentText:'鸡蛋，别看它那么可爱，它可是非常营养的奥！我们可以用它来做各种各样的美食，不仅味道可口，菜色也很不错奥！想知道它们是怎么做的嘛?赶快来学学吧。'
        },
        {
            contentImage:'http://o8ea97cbs.bkt.clouddn.com/egg1.jpg',
            contentText:'鸡蛋，别看它那么可爱，它可是非常营养的奥！我们可以用它来做各种各样的美食，不仅味道可口，菜色也很不错奥！想知道它们是怎么做的嘛?赶快来学学吧。'
        },
        {
            contentImage:'http://o8ea97cbs.bkt.clouddn.com/egg2.jpg',
            contentText:'鸡蛋，别看它那么可爱，它可是非常营养的奥！我们可以用它来做各种各样的美食，不仅味道可口，菜色也很不错奥！想知道它们是怎么做的嘛?赶快来学学吧。'
        },
        {
            contentImage:'http://o8ea97cbs.bkt.clouddn.com/egg3.jpg',
            contentText:'鸡蛋，别看它那么可爱，它可是非常营养的奥！我们可以用它来做各种各样的美食，不仅味道可口，菜色也很不错奥！想知道它们是怎么做的嘛?赶快来学学吧。'
        },
        {
            contentImage:'http://o8ea97cbs.bkt.clouddn.com/egg4.jpg',
            contentText:'鸡蛋，别看它那么可爱，它可是非常营养的奥！我们可以用它来做各种各样的美食，不仅味道可口，菜色也很不错奥！想知道它们是怎么做的嘛?赶快来学学吧。'
        },
        {
            contentImage:'http://o8ea97cbs.bkt.clouddn.com/egg5.jpg',
            contentText:'鸡蛋，别看它那么可爱，它可是非常营养的奥！我们可以用它来做各种各样的美食，不仅味道可口，菜色也很不错奥！想知道它们是怎么做的嘛?赶快来学学吧。'
        }
    ],
    AdmirePerSonAvAt:[
        'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
        'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
        'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
        'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',

    ],
    AdmirePerSonNum: 129,
    ObserverInfo:[
        {

            observerImage: 'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
            observerName: '小丸子',
            observertime: '3小时',
            observerContent: '这篇文章写的很不错，内容丰富，文采优美',
        },
        {
            observerImage: 'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
            observerName: '小丸子',
            observertime: '3小时',
            observerContent: '这篇文章写的很不错，内容丰富，文采优美',
        },
        {
            observerImage: 'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
            observerName: '小丸子',
            observertime: '3小时',
            observerContent: '这篇文章写的很不错，内容丰富，文采优美',
        },
        {
            observerImage: 'http://o8ea97cbs.bkt.clouddn.com/avar.jpg',
            observerName: '小丸子',
            observertime: '3小时',
            observerContent: '这篇文章写的很不错，内容丰富，文采优美',
        },


    ]
}

function mapStateToProps({ article }) {
	return {
		AuthorName: article.articleDetail.AuthorName,
	};
}

export default connect(mapStateToProps)(TopicSecondForm);



