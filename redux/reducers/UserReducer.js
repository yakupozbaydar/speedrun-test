const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
}

export const userReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USER_START":
            return {...state, loading: true, error:"", data: []}
        case "GET_USER_SUCCESS":
            return {...state, loading: false, data:action.payload, error:''}
        case "GET_USER_ERROR":
            return {...state, loading: false, error:"An error occured,please try again.", data: []}
        case "ADD_NEW_USER":
            return {...state, loading: false, data: data.users.push(action.payload), error: ''}
    }

    return state
}
