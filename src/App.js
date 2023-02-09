import { useState } from 'react';
import Amount from './Components/Amount';
import InputData from './Components/InputData';

const App = () => {
  const [amount, setAmount] = useState(1);
  const [summ, setSumm] = useState(3500);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Amount amount={amount} setAmount={setAmount} summ={summ} setSumm={setSumm} />
      <InputData />
    </div>
  );
};

export default App;
