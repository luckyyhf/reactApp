/**
 * Created by 13945 on 2016/7/8.
 */
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
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import  BackIcon from 'material-ui/svg-icons/navigation/arrow-back.js'
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';




const styles = {
    container: {

        marginLeft: 200,
        height:"630px",
    },
    style :{
        height: 120,
        width: 120,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    }


};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class CookHouse extends Component {


    handleTouchTap() {
        this.setState({
            open: true,
        });
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        title={<span style={styles.title}>厨房介绍</span>}
                        onTitleTouchTap={this.handleTouchTap}
                        iconElementLeft={<IconButton><BackIcon /></IconButton>}
                        iconElementRight={<FlatButton label="Save" />}
                        />
                    <div style={{clear:"both",height:"160px"}}>
                        <div style={{float:"left"}}>
                        <Paper style={styles.style} zDepth={1} children={<img
                            src="http://o8ea97cbs.bkt.clouddn.com/cookhouse.jpg" width="100%" height="100%"/>}
                            />
                            </div>
                        <div style={{float:'left',width:'calc(100% - 160px)'}}>
                            <TextField
                                floatingLabelStyle={{fontSize:"18px",fontWeight:"bolder"}}
                                style={{fontSize:"10px",width:"100%"}}
                                disabled={true}
                                hintText="Disabled Hint Text"
                                defaultValue="皇家厨房"
                                floatingLabelText="厨房名"
                                />
                            <TextField
                                floatingLabelStyle={{fontSize:"18px",fontWeight:"bolder"}}
                                style={{fontSize:"10px",width:"100%"}}
                                disabled={true}
                                hintText="Disabled Hint Text"
                                defaultValue="浙江省杭州市某某街道"
                                floatingLabelText="地址:"
                                />
                            </div>

                    </div>
                    <hr/>
                    <div style={{clear:"both",height:"160px"}}>
                        <div style={{float:"left"}}>
                            <Paper style={styles.style} circle={true} zDepth={1} children={<Avatar
                            src="http://o8ea97cbs.bkt.clouddn.com/firstmaster.jpg" size={105} style={{}}/>}
                                />
                        </div>
                        <div style={{float:'left',width:'calc(100% - 160px)'}}>
                            <TextField
                                floatingLabelStyle={{fontSize:"18px",fontWeight:"bolder"}}
                                style={{fontSize:"10px",width:"100%"}}
                                disabled={true}
                                hintText="Disabled Hint Text"
                                defaultValue="杨某某"
                                floatingLabelText="大师傅"
                                />
                            <TextField
                                floatingLabelStyle={{fontSize:"18px",fontWeight:"bolder"}}
                                style={{fontSize:"10px",width:"100%"}}
                                disabled={true}
                                hintText="Disabled Hint Text"
                                defaultValue="你可以模仿我的脸，但不可以模仿我的菜"
                                floatingLabelText="口号:"
                                />
                        </div>

                    </div>
                    <hr/>
                    <div style={{clear:"both",height:"160px"}}>
                        <div style={{float:"left"}}>
                            <Paper style={styles.style} circle={true} zDepth={1} children={<Avatar
                            src="http://o8ea97cbs.bkt.clouddn.com/secondmaster.jpg" size={105} style={{}}/>}
                                />
                        </div>
                        <div style={{float:'left',width:'calc(100% - 160px)'}}>
                            <TextField
                                floatingLabelStyle={{fontSize:"18px",fontWeight:"bolder"}}
                                style={{fontSize:"10px",width:"100%"}}
                                disabled={true}
                                hintText="Disabled Hint Text"
                                defaultValue="郑某某"
                                floatingLabelText="二师傅"
                                />
                            <TextField
                                floatingLabelStyle={{fontSize:"18px",fontWeight:"bolder"}}
                                style={{fontSize:"10px",width:"100%"}}
                                disabled={true}
                                hintText="Disabled Hint Text"
                                defaultValue="没有不好吃的菜，只有不好的厨艺"
                                floatingLabelText="口号:"
                                />
                        </div>

                    </div>



                </div>
            </MuiThemeProvider>
        );
    }
}

export default CookHouse;



