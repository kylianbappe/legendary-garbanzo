import { userRequest } from "@/requestMethod";
import { createProductFailure, createProductStart, createProductSuccess } from "./productRedux"

export const createProducts = async (dispatch, prd) => {
    dispatch(createProductStart());
    try{
        const products = await userRequest.post('products/', prd)
        dispatch(createProductSuccess(products.data))
        return products
    }catch(err) {
        dispatch(createProductFailure(err))
        return err
    }
}

export const handleResponse = (a, b, c) => {
    if (a.status == 200) {
      alert(b)
    } else {
      if (!a.response.data.message) {
        alert(c)
      }else {
        alert(a.response.data.message);
      }
    }
}