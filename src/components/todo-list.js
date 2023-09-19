"use client";

import CrossSvgComponent from "./svgs/cross";
import { useAppContext } from "@/context/app-context-provider";

const Count = ({ number }) => {
  return (
    <p className="text-sm text-scheme-light-400 dark:text-scheme-dark-600">
      {number} items left
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
  return (
    <button className="text-sm text-scheme-light-400 hover:text-scheme-light-500 dark:text-scheme-dark-600 dark:hover:text-scheme-dark-300">
      Clear completed
    </button>
  );
};

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useAppContext();
  return (
    <li className="group flex flex-row items-center justify-between gap-x-4 border-b border-scheme-light-200 px-4 pb-[17px] pt-[18px] last-of-type:border-none dark:border-scheme-dark-700">
      <button
        className="mx-2 h-6 w-6 flex-none self-start rounded-full border-2 border-scheme-light-200 bg-transparent p-1 hover:border-brand-gradient-start dark:border-scheme-dark-700 dark:hover:border-brand-gradient-start"
        onClick={() => toggleTodo(todo.id)}
      >
        <span className="sr-only">Mark complete</span>
      </button>
      <p className="grow text-scheme-light-500 dark:text-scheme-dark-300">
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
        <Count number={state.length} />
        <Filter />
        <ClearCompleted />
      </div>
    </div>
  );
}
