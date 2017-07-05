
const initState = {
		text:'我是中部列表',
		title:'我是中部'
	}

export default (state = initState , action)=>{
	switch (action.type) {
		case 'chageCenter':
		  	return  Object.assign({},state,{
		  		text:'我是被改变的中部列表'
		  	})
		default:
		 	return state;
	}
}