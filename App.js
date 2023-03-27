import React from "react";
import ReactDOM from "react-dom/client";

//JSX (Transpiled before it reaches to JS Engine) by Parcel through Babel.

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTML Element(rendered) 
const jsxHeader = (
    <h1 className="head" tabIndex="5" >
        Namasthe React
    </h1>
);

console.log(jsxHeader);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeader);