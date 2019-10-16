import { combineReducers } from 'redux'

const initialState = {
  login: {}
}

function loginReducer (state = initialState.login, action = {}) {
  switch (action.type) {
    case 'LOGIN': {
      return action.payload
    }
    default: {
      return state
    }
  }
}





const rootReducer = (state, action) => {


  if (action.type === 'INIT_APP') {
    state = undefined
  }

  if (action.type === 'CLEAN_REDUCER') {
    for (var i = 0; i < action.payload.length; i++) {
      for (var key in state) {
        if(key==action.payload[i].reducer){
          if(state.hasOwnProperty(key)) {
            state[key]=undefined
            console.warn('libero memoria ',key,' - Data -',JSON.stringify(state[key]))
            break;
          }
        }
      }
    }
  }

  return appReducer(state, action)
}

const appReducer = combineReducers({
  login: loginReducer,
})

export default rootReducer
