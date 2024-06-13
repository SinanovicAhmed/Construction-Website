import React from "react";

const LanguageSelection = () => {
  return (
    <select name="language" id="language" className="bg-transparent text-white">
      <option value="en" className="text-black">
        en
      </option>
      <option value="sl" className="text-black">
        sl
      </option>
    </select>
  );
};

export default LanguageSelection;
