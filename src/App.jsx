import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>adopt me</h1>
      <Pet name="luna" animal="dog" breed="havenese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="doink" animal="cat" breed="mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
