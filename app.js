import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png"
import userIcon from "./userIcon.png"

/**
 * <div id = "parent"?
 *    <div id = "child">
 *      <h1></h1>
 *    </div>
 * </div>
 *
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am Amrita"),
//     React.createElement("h3", {}, "Backend Developer"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am Amrita"),
//     React.createElement("h3", {}, "Software Developer"),
//   ])
// );

// React.createElement => Object => HtmlElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" }, //attribute
  "Amrita Kadyan ❤" //children
);

// JSX : its is not a HTML , its looks like html syntax
const Title = () => (
  <h1 id="heading" className="head">
    Amrita 🎶
  </h1>
);

const name = "Amrita Kadyan";

// React Functional Componenet : A funtion that return a ReactElement(JSX)
// ** Component Composition
const HeadingComponnt1 = () => (
  <div id="container">
    {Title}
    <h1 className="heading">React Functional Component ❕</h1>
  </div>
);

// ** add createElement
const HeadingComponnt2 = () => (
  <div id="container">
    {heading}
    <h1 className="heading">React Functional Component ❕</h1>
  </div>
);

// ** Write javascript inside JSx {}
const HeadingComponnt = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">React Functional Component ❕</h1>
  </div>
);

// ! Assignment 3
/**
 * Add Logo on left
 * Add a Search bar in middle
 * Add user icon on right
 * Add Css to make it look Nice
 */

const Assignment = () => {
  return(
      <>
      <header className="header">
          <div className="left">
              <img src={logo} alt="Logo" />
          </div>
          <div className="center">
              <input className="input" type="text" placeholder="Search anything you want..."/>
              <button type="submit">Submit</button>
          </div>
          <div className="right">
              <img src={userIcon} alt="User Icon"/>
          </div>
      </header>
      </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// ** <HeadingComponnt / >
// root.render(<HeadingComponnt />);
root.render(<Assignment />);
