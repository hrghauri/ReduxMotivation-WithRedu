const initState = {
    names: []
}


const rootReducer = (state = initState, action) =>{
    if(action.type === 'ADD_NAME'){

        const newState = {
            ...state,
            names: [...state.names, action.name]
        }


        return newState

    }

    if(action.type==='REMOVE_NAME'){    

        let clonedNames = JSON.parse(JSON.stringify(state.names))
        clonedNames.splice(action.index,1)

        const newState = {
            ...state,
            names: clonedNames
        }

        return newState;
    }


    return state;
}

export default rootReducer;