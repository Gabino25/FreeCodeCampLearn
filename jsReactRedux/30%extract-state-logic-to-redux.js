// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
const defaultState = []; 
const addMessage = (p)=> {
  return {type:ADD,message:p};
};

const messageReducer = (state = defaultState,action)=>{
   switch(action.type){
     case ADD:
     return[...state,action.message]
     break;
     default:
     return state;
   }
}; 

const store = Redux.createStore(messageReducer);