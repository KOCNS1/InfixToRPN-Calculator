import { useState } from 'react';
import Calculator from './Components/Calculator';
import { CalculatorContext } from './Context/Calculator';
import { historyItem } from './Types/Calculator';

function App() {
  const [result, setResult] = useState('0');
  const [history, setHistory] = useState<historyItem[]>([]);
  const [currentOperation, setCurrentOperation] = useState('');

  return (
    <>
      <CalculatorContext.Provider
        value={{
          result,
          setResult,
          history,
          setHistory,
          currentOperation,
          setCurrentOperation,
        }}
      >
        <Calculator />
      </CalculatorContext.Provider>
    </>
  );
}

export default App;
