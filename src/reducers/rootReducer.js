const initState = {
    names: []
}


const rootReducer = (state = initState, action) =>{
    console.log(action)
    if(action.type === 'ADD_NAME'){
        return {
            ...state,
            names: [...state.names, action.payload]
        }
    }
    return state;
}

export default rootReducer;