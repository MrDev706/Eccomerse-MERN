import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import bCategoryReducer from "../features/bCategory/bcategorySlice";
import blogReducers from "../features/blog/blogSlice";
import colorReducer from "../features/color/colorSlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";
 

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product : productReducer,
        brand : brandReducer,
        pCategory : pCategoryReducer,
        bCategory: bCategoryReducer,
        blogs : blogReducers,
        color : colorReducer,
        upload : uploadReducer,
        coupon : couponReducer
    }
})