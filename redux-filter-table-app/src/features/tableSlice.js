import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Ameya Potdar",
      age: 25,
      job: "Python Developer",
    },
    {
      id: 2,
      name: "Sarah Potdar",
      age: 25,
      job: "React Developer",
    },
    {
      id: 3,
      name: "Irina Potdar",
      age: 25,
      job: "MongoDB Developer",
    },
    {
      id: 4,
      name: "Sabrina Potdar",
      age: 25,
      job: "Devops Developer",
    },
    {
      id: 5,
      name: "Sana Potdar",
      age: 25,
      job: "Angular Developer",
    },
    {
      id: 6,
      name: "Sanjana Potdar",
      age: 25,
      job: "Vue Developer",
    },
    {
      id: 7,
      name: "Riya Potdar",
      age: 25,
      job: "Java Developer",
    },
    {
      id: 8,
      name: "Swarna Potdar",
      age: 25,
      job: "C Developer",
    },
    {
      id: 9,
      name: "Akriti Potdar",
      age: 25,
      job: "C++ Developer",
    },
    {
      id: 10,
      name: "Arundati Potdar",
      age: 25,
      job: "Ruby Developer",
    },
    {
      id: 11,
      name: "Dhanashree Potdar",
      age: 25,
      job: "Node JS Developer",
    },
    {
      id: 12,
      name: "Priyadarshini Potdar",
      age: 25,
      job: "Next JS Developer",
    },
    {
      id: 13,
      name: "Malvika Potdar",
      age: 25,
      job: "Nest JS Developer",
    },
    {
      id: 14,
      name: "Swati Potdar",
      age: 25,
      job: "Golang Developer",
    },
    {
      id: 15,
      name: "Natasha Potdar",
      age: 25,
      job: "C# Developer",
    },
    {
      id: 16,
      name: "Svetlana Potdar",
      age: 25,
      job: "Machine Learning Developer",
    },
    {
      id: 17,
      name: "Maria Potdar",
      age: 25,
      job: "Deep Learning Developer",
    },
    {
      id: 18,
      name: "Mitali Potdar",
      age: 25,
      job: "Data Scientist Developer",
    },
    {
      id: 19,
      name: "Omkar Potdar",
      age: 25,
      job: "Automation Developer",
    },
    {
      id: 20,
      name: "Kedar Potdar",
      age: 25,
      job: "Guitar Developer",
    },
    {
      id: 21,
      name: "Mandar Potdar",
      age: 25,
      job: "Bank Developer",
    },
    {
      id: 22,
      name: "Mau Potdar",
      age: 25,
      job: "Food Developer",
    },
    {
      id: 23,
      name: "Mahesh Potdar",
      age: 25,
      job: "Business Developer",
    },
  ],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});

export const selectTableData = (state) => state.table.data;

export default tableSlice.reducer;
