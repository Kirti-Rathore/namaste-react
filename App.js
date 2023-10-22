
// One React Element
const heading = React.createElement(
    "h2",
    {id: "heading"},
    "Hello World from React!"
);

// one parent div contains one child div and then child div have one child element
// <div id="parent"> 
//      <div id="child">
//           <h1>H1 Tag</h1>
//      </div>
// </div>

const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, 
    React.createElement("h1", {}, "H1 Tag")));

// Nested React Elements : If multiple child present in parent, use [] [React.elementfirst, ReactElement.second]

// <div id="parent"> 
//      <div id="child">
//           <h1>H1 Tag</h1>
//           <h1>H2 Tag</h1>
//      </div>
//      <div id="child2">
//           <h1>H1 Tag of child 2</h1>
//      </div>
// </div>

const parent1 = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child" }, [
        React.createElement('h1', {}, "H1 Tag"),
        React.createElement('h1', {}, "H2 Tag")
    ]),
    React.createElement('div', { id: "child2" },
        React.createElement('h1', {}, "H1 Tag of child 2"))]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent1);