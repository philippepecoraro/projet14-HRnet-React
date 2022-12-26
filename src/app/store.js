import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/home/homeSlice'


const store = configureStore({
    reducer: {
        employeesList: employeesReducer
    }
})

export default store