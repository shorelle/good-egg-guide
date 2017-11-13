/*---------------- 
  CONSTANTS 
 -----------------*/
export const ActionTypes = {
  SET_LOCATION: 'SET_LOCATION'
}


/*---------------- 
  ACTIONS 
 -----------------*/
export function setLocation(location) {
  return {
    type: ActionTypes.SET_LOCATION,
    location
  }
}

export const Actions = {
  setLocation
}


/*---------------- 
  ACTION HANDLERS 
 -----------------*/
const ACTION_HANDLERS = {
  [ActionTypes.SET_LOCATION]: (state, action) => {
    return { 
      ...state, 
      [action.location]: {
        ...state[action.location],
        active: state[action.location].active ? false : true
      }
    }
  }
}


/*---------------- 
  STATE 
 -----------------*/
const initialState = {
  Australia: {
    label: 'Australia-wide',
    active: true
  },
  ACT: {
    label: 'ACT',
    active: false
  },
  NSW: {
    label: 'NSW',
    active: false
  },
  NT: {
    label: 'NT',
    active: false
  },
  QLD: {
    label: 'QLD',
    active: false
  },
  SA: {
    label: 'SA',
    active: false
  },
  TAS: {
    label: 'TAS',
    active: false
  },
  VIC: {
    label: 'VIC',
    active: false
  },
  WA: {
    label: 'WA',
    active: false
  }
}


/*---------------- 
  REDUCER 
 -----------------*/
export default function locationReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}


/*---------------- 
  SELECTORS 
 -----------------*/
export const getLocationState = (state) => state
export const getActiveLocations = (state) => {
  return Object.keys(state).reduce( (activeLocations, location) => {
    if (state[location].active) {
      activeLocations.push(location)
    }
    return activeLocations
  }, [])
}
