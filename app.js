// const heading = React.createElement(
//   "h1",
//   { id: "thisIsID"},
//   "Hello World From Namaste React !"
// );

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/*
    <div id="parent">
        <div id="child"><h1>This is nested Html</h1></div>
    </div>

*/

const parentElm = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2", {}, "This is h2 tag")]
  )
);

console.log(parentElm);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentElm);
