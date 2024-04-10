import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "./features/Apicallpackages";
import Maxvisitapi from "./features/Maxvisitapi"

const Store = configureStore({
    reducer:{
        product:ProductReducer,
        maxvisit:Maxvisitapi
    }
})

export default Store;