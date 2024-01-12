import React from 'react';
import ReactDOM from "react-dom/client";
/**
 * <div id = "parent"?
 *    <div id = "child">
 *      <h1></h1>
 *    </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Amrita"),
    React.createElement("h3", {}, "Backend Developer"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am Amrita"),
    React.createElement("h3", {}, "Software Developer"),
  ])
);                  

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //attribute
//   "Hello world from React!, Amrita Kadyan" //children
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
