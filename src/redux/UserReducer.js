/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";
// import initialData from '../Data';

 
const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            console.log("Action user", action);
            state.push(action.payload);           
        },
 
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
         
        deleteUser: (state, action) => {
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        }
    }
});
 
export const { addUser, updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;