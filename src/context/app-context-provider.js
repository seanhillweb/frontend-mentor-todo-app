"use client";

import React, { createContext, useReducer, useContext } from "react";
import { ACTIONS, AppReducer } from "@/context/reducer";

export const AppContext = createContext();

export function AppContextProvider({ children }) {

  const initialState = {
    todos: [],
    activeTodos: [],
    completeTodos: [],
    showTodos: true,
    showActiveTodos: false,
    showCompleteTodos: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

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

  const showAllTodos = () => {
    dispatch({ type: ACTIONS.SHOW_ALL_TODOS });
  };

  const showActiveTodos = () => {
    dispatch({ type: ACTIONS.SHOW_ACTIVE_TODOS });
  };

  const showCompleteTodos = () => {
    dispatch({ type: ACTIONS.SHOW_COMPLETE_TODOS });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addTodo,
        deleteTodo,
        toggleTodo,
        clearTodos,
        showAllTodos,
        showActiveTodos,
        showCompleteTodos
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
