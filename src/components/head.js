import React,{Component,PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import actions from '../actions/actions';

import List from './list';

class Head extends Component{
	
	render(){
		let {headData,actions} =this.props;
		return (
			<div className="header">
				<h1 onClick={actions.headclick}>{headData.title}</h1>
				<List data={headData} ajaxPost={actions.fetchPostsIfNeeded}/>
			</div>
		)
	}
}



const mapStateToProps = state=>({
	headData:state.head
});

const mapDispatchToProps = dispatch=>({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Head)