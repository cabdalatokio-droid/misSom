import { createSlice } from "@reduxjs/toolkit";

const initialState={
  isOpen:false,
  modal:{
    name:"me",
    info:"lorem"
  }
}
const modalSlice=createSlice({
  name:"modal",
  initialState,
  reducers:{
    handleModal:(state)=>{
    state.isOpen=!state.isOpen
  }
  }
})

export default modalSlice.reducer;
export const{handleModal}=modalSlice.actions;