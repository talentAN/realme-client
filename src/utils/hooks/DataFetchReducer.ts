
import {FETCH} from "../consts/Data";

const dataFetchReducer = (state:any , action: any ) => {
  switch (action.type) {
    case FETCH.INIT :
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case FETCH.SUCCESS:
      return {
        ...state, 
        isLoading: false,
        isError: false,
        res : action.payload
      }
    case FETCH.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        res: action.payload
      }
    default:
      return {}
  }
}

export default dataFetchReducer;