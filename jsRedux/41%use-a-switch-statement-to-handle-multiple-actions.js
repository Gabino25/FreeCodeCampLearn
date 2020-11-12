const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
   let retval; 
   switch(action.type){
     case 'LOGIN':
     retval = {authenticated: true};
     break; 
     case 'LOGOUT':
     retval = {authenticated: false};
     break; 
     default:
     return defaultState;
   }
   return retval; 
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
