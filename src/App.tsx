import { createContext, Dispatch, useState } from 'react';

import './App.css';
import Footer from '@components/Footer';
import Rating from '@components/Rating';
import ThankYou from '@components/ThankYou';

interface Rating {
  rate: number;
  setRate: Dispatch<number>;
}

export const RatingContext = createContext({} as Rating);

function App() {
  const [rate, setRate] = useState(0);

  return (
    <>
      <RatingContext.Provider value={{ rate, setRate }}>
        {!!rate ? <ThankYou /> : <Rating />}
      </RatingContext.Provider>
      <Footer name="Abian Izquierdo" web="https://www.abizmo.dev" />
    </>
  );
}

export default App;
