import React from 'react'

export const addtodo=(data)=> {
    return {
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deltodo=(id)=> {
    return {
        type:"DEL_TODO",
        id:id
    }
}
export const remove=()=> {
    return {
        type:"REMOVE"
    }
}


