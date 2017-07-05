import React,{Component} from 'react';

export default class List extends Component{
	/*constructor(){
		super();
	}*/

	render(){
		let {data,ajaxPost} = this.props;
		let text = data.text;
		if(data.isFetching){
			text='正在加载...'
		}
		return (
			<span onClick={ajaxPost}>{text}</span>
		);
	}
}