// a reducer takes in currentstate and action

function posts(state = [], action){
  console.log('the posts will change');
  console.log(state, action);
  return state;
}


export default posts;
