import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from "../store/Products/Apicallpackages"

const Store = configureStore({
    reducer:{
        product:ProductReducer,
    }
})

export default Store;