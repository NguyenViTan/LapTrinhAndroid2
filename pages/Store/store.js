import { configureStore } from "@reduxjs/toolkit";
import Cart from "../Cart";
export default configureStore({
    reducer:{
        cart:Cart
    }
})