"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAppContext } from "@/context/app-context-provider";

export default function Form() {
  const { addTodo } = useAppContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    addTodo({ id: Date.now(), content: data.todo, completed: false });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="absolute left-[24px] top-1/2 block h-6 w-6 -translate-y-1/2 rounded-full border-2 border-scheme-light-200 bg-transparent dark:border-scheme-dark-700"></div>
        <input
          {...register("todo", { required: "Cannot be blank" })}
          id="todo"
          name="todo"
          placeholder="Create a new todo..."
          className={`w-full rounded-md border-2 bg-white pb-4 pl-[70px] pr-4 pt-[18px] text-base text-scheme-light-500 placeholder:text-scheme-light-400 focus:ring-transparent dark:bg-scheme-dark-200 dark:text-scheme-dark-300 dark:placeholder:text-scheme-dark-500 md:text-lg ${
            errors.todo
              ? "border-red-500 hover:border-red-500 focus:border-red-500"
              : "border-white hover:border-white focus:border-white dark:border-scheme-dark-200 dark:hover:border-scheme-dark-200 dark:focus:border-scheme-dark-200"
          }`}
          aria-invalid={errors.todo ? "true" : "false"}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name="todo"
        render={({ message }) => (
          <p
            role="alert"
            className="-mt-1 rounded-b border-2 border-red-500 bg-red-500 px-2 pb-1 pt-2 text-base text-white"
          >
            {message}
          </p>
        )}
      />
      <input type="submit" className="hidden" />
    </form>
  );
}
