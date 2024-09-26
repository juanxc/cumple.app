import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  const [people] = useState(data);
  return (
    <main>
      <section className="container">
        <List people={people} />
        {/* <button onClick={()=>window.location.href = "mailto:jnxcastro@gamil.com"}>contáctanos</button> */}
      </section>
    </main>
  );
}

export default App;
