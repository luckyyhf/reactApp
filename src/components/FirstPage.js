import React from 'react'
import { Router, Route, Link } from 'react-router'

const FirstPage = React.createClass({
    render() {
        return (
            <div style={{height:'100%'}}>
                {this.props.children}
            </div>
        )
    }
});
export default FirstPage;
