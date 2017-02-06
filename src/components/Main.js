/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';


import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';



import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    container: {
        paddingTop: 200,
        marginLeft: 200,

    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width:'90%',
        margin:"0 auto"
    },
    gridList: {
        width: 500,
        height: 450,
        marginBottom: 24,
    },

};



const tilesData = [
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/1.jpg',
        title: 'Breakfast',
        author: 'jill111',
        featured: true,
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/2.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/3.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/4.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/5.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/6.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/7.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://o8ea97cbs.bkt.clouddn.com/8.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];




const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

class Main extends Component {
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

    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
                />
        );

        return (
            <MuiThemeProvider muiThem e={muiTheme}>
                <div style={styles.container}>
                    <AppBar
                        titleStyle={{marginLeft:"36px"}}
                        title="Work Order Page"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                    <List>
                        <ListItem
                            disabled={true}
                            leftAvatar={<Avatar src="http://o8ea97cbs.bkt.clouddn.com/uxceo-128.jpg" />}
                        >
                            Image Avatar
                        </ListItem>
                        </List>

                    <div style={{width:"90%",margin:"0 auto"}}>
                        <TextField
                            floatingLabelStyle={{fontsize:"18px",color:"black",fontWeight:"bolder"}}
                            fullWidth={true}
                            disabled={true}
                            hintText="Disabled Hint Text"
                            defaultValue="12345"
                            floatingLabelText="Work Order #:"
                            />

                        <TextField
                            floatingLabelStyle={{fontsize:"18px",color:"black",fontWeight:"bolder"}}
                            fullWidth={true}
                            disabled={true}
                            hintText="Disabled Hint Text"
                            defaultValue="4440 Rosewood Dr. Pleasa nton, CA 94588"
                            floatingLabelText="Work Location:"
                            />

                        <TextField
                            floatingLabelStyle={{fontsize:"18px",color:"black",fontWeight:"bolder"}}
                            fullWidth={true}
                            disabled={true}
                            hintText="Disabled Hint Text"
                            defaultValue="Hank s Boat Se rv ice"
                            floatingLabelText="Service to be provided by:"
                            />

                        <TextField
                            floatingLabelStyle={{fontsize:"18px",color:"black",fontWeight:"bolder"}}
                            fullWidth={true}
                            disabled={true}
                            hintText="Disabled Hint Text"
                            defaultValue="Disabled With Floating Label"
                            floatingLabelText="You are requesting the following services:"
                            />
                        <TextField
                            fullWidth={true}
                            disabled={true}
                            id="text-field-disabled"
                            defaultValue="Inspec t sea v al ve s for smooth ope ration.
"
                            /><br />
                        <TextField
                            multiLine
                            rows={2}
                            fullWidth={true}
                            disabled={true}
                            id="text-field-disabled"
                            defaultValue="Through-hul l plugs are near fittings or attache d to hose in case of eme rge ncy."
                            /><br />
                        <List>
                            <Subheader style={{fontsize:"18px",color:"black",fontWeight:"bolder",paddingLeft:'5px',lineHeight:'30px'}}>Message Center
                            </Subheader>
                            <ListItem innerDivStyle={{padding:'7px'}}
                                primaryText="5/12/14 – 12:51pm Work order dispa tc hed"
                                />
                        </List>
                        <div  style={{clear:"both",height:"40px"}}>
                        <FloatingActionButton mini={true} style={{margin:"0px 5px 5px 5px",float:"right"}}>
                            <ContentAdd />
                        </FloatingActionButton>
                            </div>
                        <div style={{fontsize:"18px",color:"black",fontWeight:"bolder"}}>
                            <label>Attachments: </label>
                            <RaisedButton label="Camera" primary={true} style={{margin:"12px"}} />
                            </div>
                        </div>
                    <div style={styles.root}>
                        <GridList
                            cols={2}
                            cellHeight={200}
                            padding={1}
                            style={styles.gridList}
                            >
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.title}
                                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                    actionPosition="left"
                                    titlePosition="top"
                                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                    cols={ 1}
                                    rows={ 1}
                                    >
                                    <img src={tile.img} />
                                </GridTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;



//<Dialog
/*open={this.state.open}
 title="Super Secret Password"
 actions={standardActions}
 onRequestClose={this.handleRequestClose}
 >
 1-2-3-4-5
 </Dialog>
 <h1>Material-UI</h1>
 <h2>example project</h2>
 <RaisedButton
 label="Super Secret Password"
 secondary={true}
 onTouchTap={this.handleTouchTap}
 />

 */




