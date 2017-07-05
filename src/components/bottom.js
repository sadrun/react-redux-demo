import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import List from './list';

class Bottom extends Component{
	render(){
		console.log(this.props);
		let {bottomData,bottomclick} =this.props;
		return (
			<div className="bottom">
				<h1 onClick={bottomclick}>{bottomData.title}</h1>
				<span>{bottomData.text}</span>
			</div>
		)
	}
}
Bottom.propTypes = {
  bottomclick: PropTypes.func.isRequired
}



const mapStateToProps = state=>({
	bottomData:state.bottom
});

const mapDispatchToProps = dispatch=>({
	bottomclick:function(){
		dispatch({ type: 'chageBottom' })
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Bottom)