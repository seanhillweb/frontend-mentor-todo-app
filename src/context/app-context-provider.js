"use client";

import React, { createContext, useReducer, useContext } from "react";
import { ACTIONS, AppReducer } from "@/context/reducer";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  // const [state, dispatch] = useReducer(
  //   AppReducer,
  //   localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : []
  // );

  const initialState = [];

  const [state, dispatch] = useReducer(AppReducer, initialState);

  console.log("TODOS ARRAY:", state);

  const addTodo = (object) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: object });
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  const clearTodos = () => {
    dispatch({ type: ACTIONS.CLEAR_COMPLETE });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addTodo,
        deleteTodo,
        toggleTodo,
        clearTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
