import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:[
    {
      id:1,
      name:'Ameya Potdar',
      age:25,
      job:'Python Developer'
    },
    {
      id:2,
      name:'Sarah Potdar',
      age:25,
      job:'React Developer'
    },
    {
      id:3,
      name:'Irina Potdar',
      age:25,
      job:'MongoDB Developer'
    },
    {
      id:4,
      name:'Sabrina Potdar',
      age:25,
      job:'Devops Developer'
    }
  ]
};

const tableSlice = createSlice({
  name:'table',
  initialState,
  reducers:{}
});

export const selectTableData= (state) => state.table.data;

export default tableSlice.reducer;