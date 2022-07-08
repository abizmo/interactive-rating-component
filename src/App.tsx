import { createContext, Dispatch, useState } from 'react';

import './App.css';
import Footer from '@components/Footer';
import Rating from '@components/Rating';
import ThankYou from '@components/ThankYou';

interface Rating {
  rate: number;
  onSubmit: Dispatch<number>;
}

export const RatingContext = createContext({} as Rating);

function App() {
  const [rate, setRate] = useState(0);

  return (
    <>
      <RatingContext.Provider value={{ rate, onSubmit: setRate }}>
        <main>{!!rate ? <ThankYou /> : <Rating />}</main>
      </RatingContext.Provider>
      <Footer name="Abian Izquierdo" web="https://www.abizmo.dev" />
    </>
  );
}

export default App;
