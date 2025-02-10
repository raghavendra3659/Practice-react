
const head = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id:"parent"},[
        React.createElement("h1",{id:"child"},"Hello World"),
        React.createElement("h2",{id:"child"},"Hello Welocme to react"),
        React.createElement("h3",{id:"child"},"Welcome to javascript react")
    ]),
    React.createElement("div",{id : "parent"},
        React.createElement("div",{id:"parent"},[
            React.createElement("h1",{id:"child"},"Hello World"),
            React.createElement("h2",{id:"child"},"Hello Welocme to react"),
            React.createElement("h3",{id:"child"},"Welcome to javascript react")
        ])
    
)]);



const heads = ReactDOM.createRoot(document.getElementById("root"));
heads.render(head);
