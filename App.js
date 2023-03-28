import React from "react";
import ReactDOM from "react-dom/client";

//JSX (Transpiled before it reaches to JS Engine) by Parcel through Babel.
//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTML Element(rendered) 

const Title1 = () => (
    <h1 className="title">
        Namasthe React in Title1
    </h1>
);

const Title2 = () => {
    return ( 
        <h1 className="title">
            Namasthe React in Title2 using return keyword. It is same like Title1.
        </h1>
    );
}

//Component composition == Component inside another Component
const Headings = () => (
// <React.Fragment> </React.Fragment> == <> </>
    <React.Fragment> 
        <Title1 />
        <Title2 />
        <h1 className="headings">
            This is Heading from React functional component
        </h1>
    </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Headings />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Headings />);