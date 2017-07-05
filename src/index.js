import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';

import App from './containers/app'

/*const store = createStore(reducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

*/ 
let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        reducer,
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        reducer,
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
);