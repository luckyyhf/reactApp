import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CookHouse from '../components/cookhouse'; // Our custom react component
import EatPage from '../components/EatPage'; // Our custom react component
import OrderForm from '../components/OrderForm'; // Our custom react component
import OwnInfoForm from '../components/OwnInfoForm';
import FoodSecondMenu from '../components/FoodSecondMenu';
import OrderIntroductionPage from '../components/OrderIntroductionPage';
import TheSettlementPage from '../components/TheSettlementPage';
import TopicSecondForm from '../components/TopicSecondForm';
import DiscussForm from '../components/DiscussForm';
import MyOrderForm from '../components/MyOrderForm';
import FirstPage from '../components/FirstPage';
import MyCoupon from '../components/MyCoupon';
import Mysite from '../components/Mysite';
import AddNewSite from '../components/AddNewSite';
import SelSitePage from '../components/SelSitePage';
import AccountManage from '../components/AccountManage';
import LoginPage from '../components/LoginPage';
import RemarkPage from '../components/RemarkPage';
import PersonOFAdmirePage from '../components/PersonOFAdmirePage';
import ChangeName from '../components/ChangeName';
import ChangeNiName from '../components/ChangeNiName';
import FastLogining from '../components/FastLogining';
import SelecSex from '../components/SelecSex';
import Set_Name_Pas_Page from '../components/Set_Name_Pas_Page.js';
import ChangeSite from '../components/ChangeSite.js';
import InfoNotify from '../components/infoNotify.js'
injectTapEventPlugin();

const Routes = ({ history, store, dispatch }) => {

	return (
		<Router history={history}>
			<Route path="/" component={FirstPage} >
				<IndexRoute  component={OrderForm} />
				<Route path="OwnInfoForm" component={OwnInfoForm} />
				<Route path="FoodSecondMenu" component={FoodSecondMenu}/>
				<Route path="OrderIntroductionPage" component={OrderIntroductionPage} />
				<Route path="TheSettlementPage" component={TheSettlementPage} />
				<Route path="TheSettlementPage" component={TopicSecondForm} />
				<Route path="DiscussForm" component={DiscussForm} />
				<Route path="TopicSecondForm" component={TopicSecondForm}/>
				<Route path="MyOrderForm" component={MyOrderForm} />
				<Route path="MyCoupon" component={MyCoupon} />
				<Route path="Mysite" component={Mysite} />
				<Route path="AddNewSite" component={AddNewSite} />
				<Route path="SelSitePage" component={SelSitePage} />
				<Route path="AccountManage" component={AccountManage} />
				<Route path="LoginPage" component={LoginPage} />
				<Route path="RemarkPage" component={RemarkPage} />
				<Route path="PersonOFAdmirePage" component={PersonOFAdmirePage} />
				<Route path="ChangeName" component={ChangeName} />
				<Route path="ChangeNiName" component={ChangeNiName} />
				<Route path="SelecSex" component={SelecSex} />
				<Route path="FastLogining" component={FastLogining}/>
				<Route path="Set_Name_Pas_Page" component={Set_Name_Pas_Page} />
				<Route path="ChangeSite" component={ChangeSite} />
				<Route path="InfoNotify" component={InfoNotify} />
			</Route>
		</Router>
	);
};

Routes.propTypes = {
	history: PropTypes.any,
};

export default connect()(Routes);
