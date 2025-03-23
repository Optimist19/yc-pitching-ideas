"use client";
import { GiCancel } from "react-icons/gi";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset} className="m-2">
      <GiCancel className="size-5" />
    </button>
  );
};
export default SearchFormReset;
