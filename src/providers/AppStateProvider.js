import { createContext, useReducer } from "react";

const initialState = {
    currentPageNo: 1
}
const AppContext = createContext(initialState);

const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'increment-current-page-number': {
            return {
                ...state,
                currentPageNo: state.currentPageNo + 1
            }
        }

        case 'update-current-page-number': {
            return {
                ...state,
                currentPageNo: action.payload
            }
        }

        default: {
            throw new Error('check dispatced action type.')
        }
    }
}
const AppStateProvider = ({ children }) => {
    const [appInitialState, dispatch] = useReducer(reducerFunction, initialState)
    const actions = {
        incrementCurrentpageNo() {
            dispatch({
                type: 'increment-current-page-number'
            })
        },
        updateCurrentpageNo(no) {
            dispatch({
                type: 'update-current-page-number',
                payload: no
            })
        }
    }
    return <AppContext.Provider value={{ state: appInitialState, actions }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppStateProvider }