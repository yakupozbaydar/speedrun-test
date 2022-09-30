import api from "../../src/constants/Api";



export const getUser = () => async (dispacth) => {
    dispacth({type: "GET_USER_START"});
    try {
        const response = await api.get("/");
        dispacth({type: "GET_USER_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_USER_ERROR"})
    }
}
export const addUser = () => async (dispatch) => {
    try {
        dispatch({type:"ADD_NEW_USER",payload:user});

    } catch (error) {
        
    }
}
