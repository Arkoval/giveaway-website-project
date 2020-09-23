const initData = {
    isLogged: false,
    userId: null
}

const loggedReducer = (state = initData, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state, isLogged: true, userId: action.item
            }
        case 'SIGN_OUT':
            return initData
        default:
            return state;
    }
}
export default loggedReducer;