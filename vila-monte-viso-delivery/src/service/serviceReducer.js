const INITIAL_STATE = {
  description: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SERVICES':
      return {
        ...state,
        services: {}
      }
    default:
      return state
  }
}
