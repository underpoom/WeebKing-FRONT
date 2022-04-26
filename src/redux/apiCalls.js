import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest,userRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, userdata) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/register", userdata);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const addtocart = async (dispatch,  itemid,userdata) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.put("/stock/addtocart/"+itemid,userdata );

        console.log(res.data);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

