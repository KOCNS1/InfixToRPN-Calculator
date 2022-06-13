import React from 'react';

type TilesProps = {
  result: string;
};

const CalculatorDispay = ({ result }: TilesProps) => {
  return (
    <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
      <div className="w-full py-5 px-6 text-6xl text-white font-thin">
        {result}
      </div>
    </div>
  );
};

export default CalculatorDispay;
