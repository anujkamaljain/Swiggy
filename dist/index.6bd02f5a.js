const par = React.createElement("div", {
    id: "Parent"
}, [
    React.createElement("div", {
        id: "Child"
    }, [
        React.createElement("h1", {}, "I am h1 tag!"),
        React.createElement("h2", {}, "I am h2 tag!")
    ]),
    React.createElement("div", {
        id: "Child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag!"),
        React.createElement("h2", {}, "I am h2 tag!")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(par);

//# sourceMappingURL=index.6bd02f5a.js.map
