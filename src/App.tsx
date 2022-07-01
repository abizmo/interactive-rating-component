import { useState } from "react";

import "./App.css";
import Footer from "@components/Footer";
import Rating from "@components/Rating";
import ThankYou from "@components/ThankYou";

function App() {
  const [rate, setRate] = useState(0);

  return (
    <>
      {!!rate ? <ThankYou /> : <Rating />}
      <Footer name="Abian Izquierdo" web="https://www.abizmo.dev" />
    </>
  );
}

export default App;
