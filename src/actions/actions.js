
const REQUEST_POSTS = 'REQUEST_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json,
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return go(dispatch,subreddit)
  }
}

function go(dispatch,subreddit){
    setTimeout(function(){
        dispatch(receivePosts(subreddit, {
          text:'我是ajax请求来text',
          isFetching:false
        }))
    },2000);
}

function shouldFetchPosts(state, subreddit) {
  const isFetching = state.head.isFetching;
  if (!isFetching) {
    return true
  } else if (isFetching) {
    return false
  }
}

function fetchPostsIfNeeded(subreddit) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit))
    }
  }
}
function headclick(){
  return {
    type: 'chageHead'
  }
}

let actions = {
  fetchPostsIfNeeded:fetchPostsIfNeeded,
  headclick:headclick
}
export default actions