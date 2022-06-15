import { useState } from 'react';
import CalculatorDispay from './CalculatorDispay';
import Tiles from './Tiles';

const Calculator = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden max-w-xl">
        <CalculatorDispay />
        <Tiles />
      </div>
    </div>
  );
};

export default Calculator;
