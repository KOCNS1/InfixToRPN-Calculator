import { useContext, useState } from 'react';
import { CalculatorContext } from '../Context/Calculator';
import { CalculatorContextType } from '../Types/Calculator';
import CurrentOperation from './CurrentOperation';
import CalculatorHistory from './CalculatorHistory';

const CalculatorDispay = () => {
  const [open, setOpen] = useState(false);
  const { result } = useContext(CalculatorContext) as CalculatorContextType;

  return (
    <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right relative">
      <div onClick={() => setOpen((value) => !value)}>
        <svg
          className="absolute top-0 left-0 m-4 fill-white max-w-[22px]"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
        </svg>
      </div>
      <CalculatorHistory open={open} setOpen={setOpen} />
      <CurrentOperation />
      <div className="w-full py-5 px-6 text-6xl text-white font-thin">
        {result}
      </div>
    </div>
  );
};

export default CalculatorDispay;
