// a reducer takes in currentstate and action

function posts(state = [], action){
  console.log('the posts will change')
  switch(action.type){
    case "INCREMENT_LIKES":
      //return updated state
      console.log('Incrementing Likes')
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) //after te one we are updating
      ]
    default:
      return state
  }
}


export default posts;
