
import { ADD_SHOP, GET_SHOPS } from "../Actions/actionType";


 
export const TestReducer   = (state=[], action ) => {
    switch(action.type){
        case ADD_SHOP:
            console.log("action.payload",action.payload)
            return{
                shops:action.payload
            }
        default: return state;
    }
}