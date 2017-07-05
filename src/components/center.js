import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import List from './list';

class Center extends Component{
	render(){
		let {centerData,centerclick} =this.props;
		return (
			<div className="center">
				<h1 onClick={centerclick}>{centerData.title}</h1>
				<List data={centerData}/>
			</div>
		)
	}
}

Center.propTypes = {
  centerclick: PropTypes.func.isRequired
}



const mapStateToProps = state=>({
	centerData:state.center
});

const mapDispatchToProps = dispatch=>({
	centerclick:function(){
		dispatch({ type: 'chageCenter' })
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Center)