
const initState = {
	text:'我是头部列表(点击)',
	title:'我是头部',
	isFetching:false
}

export default (state = initState,action)=>{
	switch (action.type) {
		case 'chageHead':
		    return  Object.assign({},state,{
		  		text:'我是被改变的头部列表'
		  	})
	  	case 'REQUEST_POSTS':
		    return  Object.assign({},state,{
		  		isFetching:true
		  	})
	  	case 'RECEIVE_POSTS':
		    return  Object.assign({},state,action.posts)
		default:
		 	return state;
	}
}