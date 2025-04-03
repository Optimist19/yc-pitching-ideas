"use client";
import { GiCancel } from "react-icons/gi";

interface SearchFormResetProps {
  onReset: () => void;
}

const SearchFormReset = ({ onReset }: SearchFormResetProps) => {


  return (
    <button 
    type="button" 
    onClick={onReset} 
    className="m-2"
  >
    <GiCancel className="size-5" />
  </button>

  );
};
export default SearchFormReset;
