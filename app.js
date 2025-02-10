import React from "react";
import ReactDOM from "react-dom/client";
//normal react component
//const jsxheading = <h1  className="head" tabIndex="1">namaste React🚀🚀🚀</h1>

//react element
// const title =(
//     <h1 className="head">namaste react🚀🚀🚀🚀</h1>
// );

const Title= function() {
    return(
        <h1>namaste react🚀🚀🚀</h1>
        );
};

const number=10000;

//react functional component
const HeadingComponent = () => (
    <div id="conatiner">
        <h1 className="head">welcome to react</h1>
        {number}
        <Title/>
        <Title></Title>
        {Title()}
        <h1>{console.log(number)}</h1>
    </div>
);
const heads = ReactDOM.createRoot(document.getElementById("root"));
heads.render(<HeadingComponent/>);
