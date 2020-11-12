const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
    if(action.type!=='LOGIN'){
      return state; 
    }else{
      return {login:true};     
    }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

