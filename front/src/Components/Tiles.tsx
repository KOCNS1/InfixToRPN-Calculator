import React, { ReactEventHandler, useContext, useEffect } from 'react';
import { CalculatorContext } from '../Context/Calculator';
import useEventListener from '../Hooks/useEventListener';
import { CalculatorContextType } from '../Types/Calculator';

const Tiles = () => {
  const { result, setResult, setCurrentOperation, history, setHistory } =
    useContext(CalculatorContext) as CalculatorContextType;

  const tiles = [
    'C',
    '←',
    '%',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
  ];

  const getResult = async () => {
    try {
      const res = await fetch('http://localhost:3001/calculator', {
        method: 'POST',
        body: JSON.stringify({ infix: result }),
        headers: {
          'Content-Type': 'application/json',
        } as unknown as Headers,
      });
      const data = await res.json();
      setResult(data.result.toString());
      setCurrentOperation(result + ' =');
      setHistory([...history, { infix: result, result: data.result }]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUseCases = (value: string) => {
    const trimmed = result.replace(/ /g, '');
    const Ops = ['%', '/', 'x', '−', '+', '*', '-'];

    switch (true) {
      case value === 'C' || value === 'c':
        setResult('0');
        break;
      case value === 'Backspace' || value === '←':
        setResult((previousVal: string) =>
          previousVal.length <= 1 ? '0' : previousVal.slice(0, -1)
        );
        break;

      case (value === '.' || value === ',') && trimmed.slice(-1) === '.':
        return;

      case value === ',':
        setResult((previousVal: string) => `${previousVal}.`);
        break;

      case value === 'Enter' || value === '=':
        return getResult();

      case Ops.includes(value) && !Ops.includes(trimmed.slice(-1)):
        setResult((previousVal: string) => `${previousVal} ${value} `);
        break;

      case !Ops.includes(value):
        setResult((previousVal: string) =>
          previousVal === '0' ? value : previousVal + value
        );
        break;
      default:
        break;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.innerText;
    handleUseCases(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const keys = [...tiles, '*', ',', 'Backspace', 'Enter', '=', 'c'];
    const { key } = e;

    if (!keys.includes(key)) return;
    handleUseCases(key);
  };

  useEventListener('keydown', (e: React.KeyboardEvent) => handleKeyPress(e));

  return (
    <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
      <div className="flex w-full flex-wrap">
        {tiles.map((tile, index) => {
          return (
            <div
              className="w-1/4 border-r border-b border-indigo-400"
              key={index}
            >
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={(e) => handleClick(e)}
              >
                {tile}
              </button>
            </div>
          );
        })}
        {/* Take the = sign out for styling purposes */}
        <div className="w-2/4 border-r border-indigo-400">
          <button
            onClick={() => getResult()}
            className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
