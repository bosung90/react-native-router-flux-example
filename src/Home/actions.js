import {getHome} from '../reducers'

export const incrementCount = ()=>({
  type: 'INCREMENT'
})

export const decrementCount = ()=> ({
  type: 'DECREMENT'
})

export const incrementCountThunk = ()=>(
  (dispatch, getState)=>{
    const {count} = getHome(getState())
    if(count < 10) {
      dispatch({type: 'INCREMENT'})
    }
  }
)
