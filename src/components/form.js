"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="border-scheme-light-200 dark:border-scheme-dark-700 absolute left-[24px] top-1/2 block h-6 w-6 -translate-y-1/2 rounded-full border-2 bg-transparent"></div>
        <input
          {...register("todo")}
          id="todo"
          name="todo"
          placeholder="Create a new todo..."
          className={`text-scheme-light-500 placeholder:text-scheme-light-400 dark:placeholder:text-scheme-dark-500 dark:text-scheme-dark-300 dark:bg-scheme-dark-200 w-full rounded-md border-2 bg-white pb-4 pl-[70px] pr-4 pt-[18px] text-base shadow-lg focus:ring-transparent md:text-lg ${
            errors.todo
              ? "border-red-500 hover:border-red-500 focus:border-red-500"
              : "dark:border-scheme-dark-200 dark:hover:border-scheme-dark-200 dark:focus:border-scheme-dark-200 border-white hover:border-white focus:border-white"
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
