import { useContext, useEffect, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";
const ThemeToggle = () => {
  const [optionValue, setOptionValue] = useState("light");
  const { toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    toggleTheme(optionValue);
  }, [optionValue]);

  const setTheme = (prevValue) => {
    prevValue === "light" ? setOptionValue("dark") : setOptionValue("light");
  };
  return (
    <div className="ThemeToggle">
      <span>☀️ 🌑</span>
      <div className="flex gap-x-1 sm:col-span-2">
        <div className="flex h-6 items-center">
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" id="switch" onChange={() => setTheme(optionValue)} className="peer sr-only" />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>
        </div>
        <label htmlFor="agreed" className="text-sm leading-6"></label>
      </div>
    </div>
  );
};
export default ThemeToggle;
