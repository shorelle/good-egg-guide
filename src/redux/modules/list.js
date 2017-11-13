import { database } from '../../utils/firebase'

/*---------------- 
  CONSTANTS 
 -----------------*/
export const ActionTypes = {
  BRANDS_REQUEST: 'BRANDS_REQUEST',
  BRANDS_RECEIVE_DATA: 'BRANDS_RECEIVE_DATA',
  BRANDS_RECEIVE_DATA_ERROR: 'BRANDS_RECEIVE_DATA_ERROR'
}

/*---------------- 
  ACTIONS 
 -----------------*/
export function requestBrands(locations) {
  return {
    type: ActionTypes.BRANDS_REQUEST,
    locations,
    status: 'loading'
  }
}

export const Actions = {
  requestBrands
}

/*---------------- 
  ACTION HANDLERS 
 -----------------*/
const ACTION_HANDLERS = {
  [ActionTypes.BRANDS_REQUEST]: (state, action) => ({
    ...state,
    status: action.status,
    brands: getBrandsFromFirebase(action.locations)
      .then(result => result)
      .catch(error => error)
  })
}

const getBrandsFromFirebase = locations => {
  return Promise.all(
    locations.map(location => {
      return database
        .ref('availability/' + location)
        .once('value')
        .then(snapshot => snapshot.val())
        .catch(error => error)
    })
  )
    .then(result => result)
    .catch(error => error)
}

/*---------------- 
  STATE 
 -----------------*/
const initialState = {
  brands: [],
  status: 'loading'
}

/*---------------- 
  REDUCER 
 -----------------*/
export default function listReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

/*---------------- 
  HELPERS 
 -----------------*/
export const getListState = state => state
