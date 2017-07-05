
const initState = {
	text:'我是底部列表',
	title:'我是底部'
}
let i = 0;
export default (state = initState , action)=>{
	switch (action.type) {
		case 'chageBottom':
		  	return  Object.assign({},state,{
		  		text:'我是被改变的底部列表',
		  		title:'我是底部'
		  	})
	 	default:
	 		return state;
	}
}