import { createContext, useReducer } from "react"

export const IdContext=createContext();

export const IdContextProvider=({children})=>{
    const INITIAL_STATE={
        id:null
    }

    const idreducer=(state,action)=>{
        if(action.type==='CHANGE_ID'){
            return{
                id:action.payload,
            }
        }
    }
    const [state,dispatch]=useReducer(idreducer,INITIAL_STATE);
    return(
        <IdContext.Provider value={{data:state,dispatch}}>
            {children}
        </IdContext.Provider>
    );
}