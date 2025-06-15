const e = React.createElement;

function MyApp() {
  return e("div", null, [
    e("h2", { key: 1 }, "🚀 Hello from umang "),
    e("p", { key: 2 }, "This React app greate bro!!!"),
    e("button", {
      key: 3,
      onClick: () => alert("🎉 Nices")
    }, "Click Me")
  ]);
}

const rootId = document.currentScript.previousElementSibling.id;
const root = ReactDOM.createRoot(document.getElementById(rootId));
root.render(e(MyApp));
