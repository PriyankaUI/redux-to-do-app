import React from 'react'
const initialdata={
    list:[]
}

const todoReducer=( state=initialdata, action)=> {
   switch (action.type) {
       case "ADD_TODO":
           const{id,data}=action.payload;
           return{
               ...state,
               list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }  
               ]
           }
           case "DEL_TODO":
            
           const newlist= state.list.filter((ele)=>ele.id!=action.id)
            return{
                ...state,
               list:newlist
            }
            case "REMOVE":
            return{
                ...state,
               list:[]
            }
       default:
          return state;
   }
}
export default todoReducer
