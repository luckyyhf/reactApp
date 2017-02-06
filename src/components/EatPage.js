/**
 * Created by 13945 on 2016/7/7.
 */
/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentDel from 'material-ui/svg-icons/content/remove';
import RaisedButton from 'material-ui/RaisedButton';
import ShopBasket from 'material-ui/svg-icons/action/shopping-cart';

const styles = {
    container: {
        //paddingTop: 200,
        marginLeft: 200,
        height:"630px",

        position:'relative'

    },

};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class EatPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    getClassMain(){
        return "mainDiv";
    }
    getClassLiStyle(){
        return 'listyle';
    }

    getClassUlStyle(){
        return "ulstyle";
    }
    getClassInfo(){
        return "infoStyle"
    }

    getBodyStyle(){
        return 'BodyStyle';
    }

    getBodyLeftStyle(){
        return 'leftBodyStyle';
    }

    getClassAvatUl(){
        return 'AvatUlStyle'
    }

    getBodyRightStyle(){
        return 'rightBodyStyle'
    }
    getShowContent(){
        return "showContent"
    }

    getShowImage(){
        return 'showImage'
    }

    getClassDetailInfo(){
        return "detailInfo";
    }

    getClassBut(){
        return 'ButGroup';
    }


    getClassfoot(){
          return "footBodyStyle";
    }

    getClassShop(){
        return "shopStyle"
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <div style={{position:"relative" ,width:"100%",height:"100%",borderLeft:"1px solid gray"}}>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        iconElementRight={<IconMenu iconButtonElement={ <IconButton><MoreVertIcon /></IconButton>}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                        </IconMenu> }/>
                    <div className={this.getClassMain()}>
                        <ul className={this.getClassUlStyle()}>
                            <li className={this.getClassLiStyle()}>起送<label>￥25</label></li>
                            <li className={this.getClassLiStyle()}>配送<label>￥25</label></li>
                            <li className={this.getClassLiStyle()}><label>送达30分钟</label></li>
                        </ul>
                    </div>
                    <div className={this.getClassInfo()}>'新用户在线支付立减15元，使用百度钱包立减23元;'</div>
                    <div className={this.getBodyStyle()}>
                      <div className={this.getBodyLeftStyle()}>
                          <ul  className={this.getClassAvatUl()}>
                              <li>
                                  <Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" size={30} />
                                  <span style={{display:"block"}}>巴必屋--六月特</span>
                                  <div></div>
                              </li>
                              <li>
                                  <Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" size={30} />
                                  <span style={{display:"block"}}>热销菜品</span>
                                  <div></div>
                              </li>
                              <li>
                                  <Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" size={30} />
                                  <span style={{display:"block"}}>套餐</span>
                                  <div></div>
                              </li>
                              <li>
                                  <Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" size={30} />
                                  <span style={{display:"block"}}>小吃类</span>
                                  <div></div>
                              </li>
                              <li>
                                  <Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" size={30} />
                                  <span style={{display:"block"}}>饮料</span>
                                  <div></div>
                              </li>
                              <li>
                                  <Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" size={30} />
                                  <span style={{display:"block"}}>五角区</span>
                                  <div></div>
                              </li>
                              </ul>
                          </div>
                      <div className={this.getBodyRightStyle()}>
                           <ul>
                               <li>
                                   <div className={this.getShowContent()}>
                                       <div className={this.getShowImage()}>
                                           <img src="http://o8ea97cbs.bkt.clouddn.com/chicken.jpg" width="100%" height="100%"/>
                                           </div>
                                       <div className={this.getClassDetailInfo()}>
                                           <ul>
                                             <li>黄金蝴蝶虾</li>
                                               <li>月售出11份</li>
                                               <li><span>￥7</span><span>￥8</span></li>
                                               </ul>
                                           </div>
                                       <div className={this.getClassBut()}>
                                           <div>
                                               <FloatingActionButton mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentDel />
                                               </FloatingActionButton>
                                               <span>3</span>
                                               <FloatingActionButton  mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentAdd style={{width:"34px",height:"34px"}}/>
                                               </FloatingActionButton>
                                           </div>
                                           </div>
                                       </div>
                                   </li>



                               <li>
                                   <div className={this.getShowContent()}>
                                       <div className={this.getShowImage()}>
                                           <img src="http://o8ea97cbs.bkt.clouddn.com/chicken.jpg" width="100%" height="100%"/>
                                       </div>
                                       <div className={this.getClassDetailInfo()}>
                                           <ul>
                                               <li>黄金蝴蝶虾</li>
                                               <li>月售出11份</li>
                                               <li><span>￥7</span><span>￥8</span></li>
                                           </ul>
                                       </div>
                                       <div className={this.getClassBut()}>
                                           <div>
                                               <FloatingActionButton mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentDel />
                                               </FloatingActionButton>
                                               <span>3</span>
                                               <FloatingActionButton  mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentAdd style={{width:"34px",height:"34px"}}/>
                                               </FloatingActionButton>
                                           </div>
                                       </div>
                                   </div>
                               </li>



                               <li>
                                   <div className={this.getShowContent()}>
                                       <div className={this.getShowImage()}>
                                           <img src="http://o8ea97cbs.bkt.clouddn.com/chicken.jpg" width="100%" height="100%"/>
                                       </div>
                                       <div className={this.getClassDetailInfo()}>
                                           <ul>
                                               <li>黄金蝴蝶虾</li>
                                               <li>月售出11份</li>
                                               <li><span>￥7</span><span>￥8</span></li>
                                           </ul>
                                       </div>
                                       <div className={this.getClassBut()}>
                                           <div>
                                               <FloatingActionButton mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentDel />
                                               </FloatingActionButton>
                                               <span>3</span>
                                               <FloatingActionButton  mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentAdd style={{width:"34px",height:"34px"}}/>
                                               </FloatingActionButton>
                                           </div>
                                       </div>
                                   </div>
                               </li>


                               <li>
                                   <div className={this.getShowContent()}>
                                       <div className={this.getShowImage()}>
                                           <img src="http://o8ea97cbs.bkt.clouddn.com/chicken.jpg" width="100%" height="100%"/>
                                       </div>
                                       <div className={this.getClassDetailInfo()}>
                                           <ul>
                                               <li>黄金蝴蝶虾</li>
                                               <li>月售出11份</li>
                                               <li><span>￥7</span><span>￥8</span></li>
                                           </ul>
                                       </div>
                                       <div className={this.getClassBut()}>
                                           <div>
                                               <FloatingActionButton mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentDel />
                                               </FloatingActionButton>
                                               <span>3</span>
                                               <FloatingActionButton  mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentAdd style={{width:"34px",height:"34px"}}/>
                                               </FloatingActionButton>
                                           </div>
                                       </div>
                                   </div>
                               </li>


                               <li>
                                   <div className={this.getShowContent()}>
                                       <div className={this.getShowImage()}>
                                           <img src="http://o8ea97cbs.bkt.clouddn.com/chicken.jpg" width="100%" height="100%"/>
                                       </div>
                                       <div className={this.getClassDetailInfo()}>
                                           <ul>
                                               <li>黄金蝴蝶虾</li>
                                               <li>月售出11份</li>
                                               <li><span>￥7</span><span>￥8</span></li>
                                           </ul>
                                       </div>
                                       <div className={this.getClassBut()}>
                                           <div>
                                               <FloatingActionButton mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentDel />
                                               </FloatingActionButton>
                                               <span>3</span>
                                               <FloatingActionButton  mini={true}  backgroundColor="white" iconStyle={{fill:"red"}}>
                                                   <ContentAdd style={{width:"34px",height:"34px"}}/>
                                               </FloatingActionButton>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                               </ul>
                          </div>
                        </div>
                    <div className={this.getClassfoot()}>
                        <div className={this.getClassShop()}>
                            <ShopBasket style={{backgroundColor:"black",fill:"white"}}/>
                        </div>
                        <RaisedButton label="共￥32.5" backgroundColor ={"black"} labelStyle={{color:"white",textAlign:"left",paddingLeft:"0px"}} style={{width:"35%"}}   />
                        <RaisedButton label="选好了"  backgroundColor={"red"} labelStyle={{color:"white"}} style={{width:"45%"}} />



                        </div>
                  </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default EatPage;



