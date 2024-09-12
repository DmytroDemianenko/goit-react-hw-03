import { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
    // console.log(evt.target.value);
  };
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
