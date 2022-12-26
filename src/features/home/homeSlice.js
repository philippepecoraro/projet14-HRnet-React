import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    employees: [],
}

const homeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        }
    }
})


export default homeSlice.reducer
export const { addEmployee } = homeSlice.actions