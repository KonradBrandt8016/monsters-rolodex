import React from "react";
import "./Search.css";

export default ({ onChange, placeholder }) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onSearchValueChange = value => {
    onChange && onChange(value);
  };
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder={placeholder}
          ref={inputRef}
          onChange={({ target: { value } }) => onSearchValueChange(value)}
        ></input>
        <svg
          role="presentation"
          className="i-search"
          viewBox="0 0 32 32"
          width="14"
          height="14"
          fill="none"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        >
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30" />
        </svg>
      </div>
    </div>
  );
};
