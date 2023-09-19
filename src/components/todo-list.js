"use client";

import CrossSvgComponent from "./svgs/cross";
import CheckSvgComponent from "./svgs/check";
import { useAppContext } from "@/context/app-context-provider";
import { useState, useEffect } from "react";

const Count = ({ state }) => {
  const [count, setCount] = useState(state.length);
  useEffect(() => {
    setCount(state.filter((item) => item.completed === false).length);
  }, [state]);
  return (
    <p className="text-sm text-scheme-light-400 dark:text-scheme-dark-600">
      {count} items left
    </p>
  );
};

const Filter = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-x-4">
      <button className="text-sm font-bold text-scheme-light-400 hover:text-scheme-light-500 dark:text-scheme-dark-600 dark:hover:text-scheme-dark-300">
        All
      </button>
      <button className="text-sm font-bold text-scheme-light-400 hover:text-scheme-light-500 dark:text-scheme-dark-600 dark:hover:text-scheme-dark-300">
        Active
      </button>
      <button className="text-sm font-bold text-scheme-light-400 hover:text-scheme-light-500 dark:text-scheme-dark-600 dark:hover:text-scheme-dark-300">
        Completed
      </button>
    </div>
  );
};

const ClearCompleted = () => {
  const { clearTodos } = useAppContext();

  return (
    <button
      className="text-sm text-scheme-light-400 hover:text-scheme-light-500 dark:text-scheme-dark-600 dark:hover:text-scheme-dark-300"
      onClick={() => clearTodos()}
    >
      Clear completed
    </button>
  );
};

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useAppContext();
  return (
    <li className="group flex flex-row items-center justify-between gap-x-4 border-b border-scheme-light-200 px-4 pb-[17px] pt-[18px] last-of-type:border-none dark:border-scheme-dark-700">
      <button
        className={`mx-2 h-6 w-6 flex-none self-start rounded-full border-2 bg-transparent p-1 ${
          todo.completed
            ? "border-hidden bg-gradient-to-br from-brand-gradient-start to-brand-gradient-end"
            : "border-scheme-light-200 hover:border-scheme-light-300 dark:border-scheme-dark-700 dark:hover:border-scheme-dark-600"
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        <span className="sr-only">Mark complete</span>
        <CheckSvgComponent
          className={`mx-auto fill-none stroke-white ${
            todo.completed ? "block" : "hidden"
          }`}
        />
      </button>
      <p
        className={`grow ${
          todo.completed
            ? "text-scheme-light-300 line-through dark:text-scheme-dark-600"
            : "text-scheme-light-500 no-underline dark:text-scheme-dark-300"
        }`}
      >
        {todo.content}
      </p>
      <button
        className="invisible p-1 group-hover:visible"
        onClick={() => deleteTodo(todo.id)}
      >
        <span className="sr-only">Remove todo</span>
        <CrossSvgComponent className="fill-scheme-light-500 dark:fill-scheme-dark-500" />
      </button>
    </li>
  );
};

const TodoItems = ({ state }) => {
  if (state.length === 0) {
    return (
      <div className="flex flex-row items-start px-6 pb-[17px] pt-[18px]">
        <p className="grow text-scheme-light-500 dark:text-scheme-dark-300">
          Nothing todo on your list!
        </p>
      </div>
    );
  } else {
    return (
      <ul className="list-none">
        {state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
};

export default function TodoList() {
  const { state } = useAppContext();

  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-lg dark:bg-scheme-dark-200">
      <TodoItems state={state} />
      <div className="flex flex-row items-center justify-between border-t border-scheme-light-200 px-6 py-4 dark:border-scheme-dark-700">
        <Count state={state} />
        <Filter />
        <ClearCompleted />
      </div>
    </div>
  );
}
