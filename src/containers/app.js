import React,{Component} from 'react';

import Head from '../components/head';
import Center from '../components/center';
import Bottom from '../components/bottom';

export default class App extends Component{
	render(){
		return (
			<div className="wrap">
				<Head />
				<Center />
				<Bottom />
			</div>
		)
	}
}