import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

function App() {
  // const [category, setCategory] = useState(["lifestyle"]);

  return (
    <div>
      <Navbar />
      <NewsBoard />
    </div>
  );
}

export default App;
