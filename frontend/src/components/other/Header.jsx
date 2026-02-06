import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="flex m-1 justify-between items-center p-2 ">
        <div>
          <h1 className="font-bold text-xl">Hello</h1>
          <span className="font-extrabold text-3xl">{props.name}👋</span>
        </div>
        <button onClick={props.logoutHandler} className="p-3 border-3 rounded-2xl text-xl font-bold bg-purple-200 shadow-lg shadow-purple-400 hover:bg-purple-300 hover:shadow-purple-900">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
