import CrossSvgComponent from "./svgs/cross";

const Count = () => {
  return (
    <p className="text-scheme-light-400 dark:text-scheme-dark-600 text-sm">
      # items left
    </p>
  );
};

const Filter = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-x-4">
      <button className="text-scheme-light-400 dark:text-scheme-dark-600 hover:text-scheme-light-500 dark:hover:text-scheme-dark-300 text-sm font-bold">
        All
      </button>
      <button className="text-scheme-light-400 dark:text-scheme-dark-600 hover:text-scheme-light-500 dark:hover:text-scheme-dark-300 text-sm font-bold">
        Active
      </button>
      <button className="text-scheme-light-400 dark:text-scheme-dark-600 hover:text-scheme-light-500 dark:hover:text-scheme-dark-300 text-sm font-bold">
        Completed
      </button>
    </div>
  );
};

const ClearCompleted = () => {
  return (
    <button className="text-scheme-light-400 dark:text-scheme-dark-600 hover:text-scheme-light-500 dark:hover:text-scheme-dark-300 text-sm">
      Clear completed
    </button>
  );
};

const TodoItem = () => {
  return (
    <li className="border-scheme-light-200 dark:border-scheme-dark-700 group flex flex-row items-center justify-between gap-x-4 border-b px-4 pb-[17px] pt-[18px] last-of-type:border-none">
      <button className="border-scheme-light-200 dark:border-scheme-dark-700 hover:border-brand-gradient-start dark:hover:border-brand-gradient-start mx-2 h-6 w-6 flex-none self-start rounded-full border-2 bg-transparent p-1">
        <span className="sr-only">Mark complete</span>
      </button>
      <p className="text-scheme-light-500 dark:text-scheme-dark-300 grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
        ullamcorper felis. Donec lacus nunc, rutrum quis elementum ut, ornare
        nec odio.
      </p>
      <button className="invisible p-1 group-hover:visible">
        <span className="sr-only">Clear item</span>
        <CrossSvgComponent className="fill-scheme-light-500 dark:fill-scheme-dark-500" />
      </button>
    </li>
  );
};

export default function TodoList() {
  return (
    <div className="dark:bg-scheme-dark-200 flex flex-col overflow-hidden rounded-md bg-white shadow-lg">
      <ul className="list-none">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <div className="border-scheme-light-200 dark:border-scheme-dark-700 flex flex-row items-center justify-between border-t px-6 py-4">
        <Count />
        <Filter />
        <ClearCompleted />
      </div>
    </div>
  );
}
