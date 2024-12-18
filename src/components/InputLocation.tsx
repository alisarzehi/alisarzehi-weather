import React from "react";
import Button from "./Button";

function InputLocation({
  onCity,
}: {
  onCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <div className="w-full p-4 pt-4 px-8 float-right h-1/4 flex flex-col justify-evenly">
        <div className="relative">
          <input
            type="text"
            className="bg-transparent w-2/3 lg:w-3/4 inline text-slate-300 focus:outline-none border-b border-slate-200 peer pt-6 pb-2"
            id="username"
            aria-label="Change location"
            placeholder=" "
            onChange={onCity}
          />
          <label
            htmlFor="username"
            className="cursor-text absolute peer-focus:-top-5 peer-focus:text-sm transition-all top-0 left-0 inline duration-300 peer-focus:text-slate-300/50 text-slate-300 focus:outline-none">
            Change location
          </label>
          <i className="bi bi-search text-slate-200 absolute top-0 right-0 bg-slate-950/50 hover:bg-slate-900/25 p-2 sm:p-4 md:p-6" />
        </div>
        <Button label="search" />
      </div>
    </>
  );
}

export default InputLocation;
