import initialState from './initialState'

const reducer = (state = initialState, action) => {
    console.log('state ', state)
    return state
}

export default reducer