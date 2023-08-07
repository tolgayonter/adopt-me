const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, {
      name: "pepper",
      animal: "bird",
      breed: "cockatiel",
    }),
    React.createElement(Pet, {
      name: "doink",
      animal: "cat",
      breed: "mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
