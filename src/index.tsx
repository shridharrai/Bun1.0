// import fetchUser from "./githubApi";

// const getUserDetails = async () => {
//   const userData = await fetchUser("shridharrai");
//   document.querySelector("h1").innerHTML = JSON.stringify(userData);
// };

// getUserDetails();

import React from "react";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello Bun!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

root.render(<App />);
