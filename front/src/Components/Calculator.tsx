import { useState } from 'react';
import CalculatorDispay from './CalculatorDispay';
import Tiles from './Tiles';

const Calculator = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center flex-col bg-gray-800">
      <div className="text-4xl text-white mb-5">Google Like Calculator</div>
      <div className="w-full mx-auto rounded-xl bg-gray-100 text-gray-800 relative overflow-hidden max-w-xl shadow-2xl shadow-slate-700 border border-zinc-300">
        <CalculatorDispay />
        <Tiles />
      </div>
    </div>
  );
};

export default Calculator;
