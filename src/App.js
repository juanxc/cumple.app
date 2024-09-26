import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  const [people] = useState(data);
  return (
    <div className="principal">
      <div className="titulo">
        <h2>Los Cumpleaños de mi Familia</h2>
      </div>
      <main>
        <section className="container">
          <List people={people} />
          {/* <button onClick={()=>window.location.href = "mailto:jnxcastro@gamil.com"}>contáctanos</button> */}
        </section>
      </main>
    </div>
  );
}

export default App;
