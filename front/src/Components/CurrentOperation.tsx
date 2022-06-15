import React, { useContext } from 'react';
import { CalculatorContext } from '../Context/Calculator';
import { CalculatorContextType } from '../Types/Calculator';

const CurrentOperation = () => {
  const { currentOperation } = useContext(
    CalculatorContext
  ) as CalculatorContextType;

  return (
    <div className="absolute top-0 right-0 m-4 text-white opacity-50">
      {currentOperation}
    </div>
  );
};

export default CurrentOperation;
