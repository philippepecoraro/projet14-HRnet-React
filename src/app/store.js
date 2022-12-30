import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/home/homeSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const reducers = combineReducers({
    employeesList: employeesReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],

})

export default store