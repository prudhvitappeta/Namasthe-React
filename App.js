import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {id:"heading", xyz:"tagValue"}, "Hello World from React!");
console.log(heading); // retunrs JS object which is React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent =  React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"},[ 
        React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")] 
    ),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")] 
    )
]);
root.render(parent); 


/** 
 * Takes heading object which is React Elemet
 * Converts that React Element into HTML tag which can be understand by Browser
 * Reander this HTML tag inside the root element.(appendChild)
*/
//root.render(heading); 

/**
 * <div id="parent">
*    <div id="child1">
 *      <h1>I am h1 Tag </h1>
 *      <h2>I am h2 Tag </h2>
 *    </div>
 *    <div id="child2">
 *      <h1>I am h1 Tag </h1>
 *      <h2>I am h2 Tag </h2>
 *    </div>
 * </div>
 */
