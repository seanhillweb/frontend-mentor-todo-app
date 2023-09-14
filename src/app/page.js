import Banner from "@/components/banner";
import { ThemeSwitch } from "@/components/theme-switch";
import Form from "@/components/form";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <main aria-label="Content">
      <Banner />
      <div className="container">
        <div className="mx-auto mb-[45px] mt-[45px] flex max-w-[540px] flex-col md:mb-[76px] md:mt-[76px]">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-[26px] font-bold uppercase leading-[1.2em] tracking-[0.45em] text-white md:text-[38px]">
              Todo
            </h1>
            <ThemeSwitch />
          </div>
          <div className="mt-9">
            <Form />
          </div>
          <div className="mt-6">
            <TodoList />
          </div>
        </div>
      </div>
    </main>
  );
}
