import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // * when every componenent re-render => useeffect also called.
  // * If dependency array is empty = [] => useefferc called on initial render only ( onlu once)
  // * If depenndency array contain any dependency = [btnNameReact] => it called everytime when btnName chnaged or re-render
  useEffect(() => {
    console.log("UseEfferct Called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo">
        <img src="data:image/png;base64,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" />
      </div>
      <h1 className="company-Name">Food Shala</h1>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
