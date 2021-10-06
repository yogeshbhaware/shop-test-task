import { ADD_SHOP, GET_SHOPS } from "./actionType";

export const addshop = (data) => {
    console.log("this is data",data)
    let localData = JSON.parse(localStorage.getItem('shops'));
    localData = localData ? localData : [];
    localData.push(data);
    localStorage.setItem('shops',JSON.stringify(localData));
    return {
        type:ADD_SHOP,
        payload:localData
    }
}

// export const getData = (data) => {
//     let localData = JSON.parse(localStorage.getItem('shops'));
//     localData = localData ? localData : [];
//     localData.push(data);
//     localStorage.setItem('shops',JSON.stringify(localData));
//     return {
//         type:GET_SHOPS,
//         payload:localData
//     }
// }