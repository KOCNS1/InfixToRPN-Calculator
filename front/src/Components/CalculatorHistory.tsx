import React, { useContext, useState } from 'react';
import { CalculatorContext } from '../Context/Calculator';
import { CalculatorContextType } from '../Types/Calculator';
import { OpenProps } from '../Types/Calculator';

const CalculatorHistory = ({ open, setOpen }: OpenProps) => {
  const { history } = useContext(CalculatorContext) as CalculatorContextType;

  return (
    <div
      className={
        open
          ? 'absolute top-2 left-2 bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg w-96 shadow-xl'
          : 'hidden'
      }
    >
      <div
        className="h-14 w-full ml-3"
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          className="fill-[#818cf8] max-w-[22px]"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
        </svg>
      </div>
      <div className="text-[#818cf8] text-left text-sm mb-3 ml-3">
        {/* map */}
        {history.map((item, index) => {
          return (
            <div className="mb-4">
              <span
                tabIndex={0}
                className="border-solid border-white border py-1 px-3 mr-2 rounded"
              >
                {item.infix}
              </span>
              <span className="text-white">=</span>
              <span
                tabIndex={0}
                className="border-solid border-white border py-1 px-3 ml-2 rounded"
              >
                {item.result}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorHistory;
