


import { createSlice } from "@reduxjs/toolkit";



const initialState={

    todos:[],

    message:[],

    formData:{
        title: 'foo',
        completed: false,
        userId: 1,
    },


    formDataToUpdate:{
        id:983,
        title: 'foo',
        completed: false,
        userId: 1,
    },



    updateState:false,
    id:1,
    isLoading: false,
    error: null,
    fetchAgain:1,


}






const todoSlice = createSlice({
    name:'todos',
    initialState:initialState,
    reducers:{


        fetchStart:(state, action)=>{
            state.isLoading=true;
        },

     

        fetchSuccess:(state, action)=>{
            state.message=action.payload;
            state.isLoading=false;
            console.log("Success :___ "+action.payload);
        },

        fetchError:(state, action)=>{
           state.error = action.payload;
           state.isLoading = false ;

           console.log("ERROR :___ "+action.payload);
        },

        firstfetch:(state, action)=>{
            state.todos=action.payload;
            state.isLoading=false;
            console.log("Sucessfully fetched todos ");
        },

        addData:(state, action)=>{
            state.todos=[action.payload,...state.todos];
            state.isLoading=false;
        },

        updateTitle:(state,action)=>{
            state.formData.title=action.payload;
            state.formDataToUpdate.title=action.payload;

        },

        toggleCompleted:(state,action)=>{
            state.formData.completed = !state.formData.completed;

        },


        updateTodo: (state,action) => {

          

            state.todos= action.payload;

        },

        setUpdateState:(state,action)=>{
            state.updateState = action.payload;

        },

        setID:(state,action)=>{
            state.id = action.payload;
            state.formDataToUpdate.id = action.payload;

        },

        setFetchAgain:(state,action)=>{
            state.fetchAgain += 1;

        },


     

    }
})



// export the todos reducer function and action creators here
export const todoReducer=todoSlice.reducer;

export const todoActions = todoSlice.actions;



// export the todos selector function here

export const todoSelector = (state)=>state.todoReducer;



     