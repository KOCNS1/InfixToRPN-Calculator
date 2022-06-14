import React, { ReactEventHandler, useEffect } from 'react';
import useEventListener from '../Hooks/useEventListener';
import useFetch from '../Hooks/useFetch';

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

interface TilesProps {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
}

const Tiles = ({ setResult, result }: TilesProps) => {
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

  const Ops = ['%', '/', 'x', '−', '+'];

  const getResult = async () => {
    console.log(result);
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
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(result);
    const value = e.currentTarget.innerText;
    const trimmed = result.replace(/ /g, '');

    // Clear, remove
    if (result === '0' && value != 'C') return setResult(value);
    else if (value === 'C') return setResult('0');
    else if (value === '←')
      return setResult((previousVal: string) => previousVal.slice(0, -1));

    // Prevent double dot
    if (value === '.' && trimmed.slice(-1) === '.') return;

    // Operators
    if (Ops.includes(value) && !Ops.includes(trimmed.slice(-1)))
      return setResult((previousVal: string) => `${previousVal} ${value} `);
    // Numbers
    else if (!Ops.includes(value))
      return setResult((previousVal: string) => previousVal + value);
  };

  const handleKeyPress = (e) => {
    const keys = [...tiles, '*', ',', 'Delete', 'Enter', '='];
    const value = e.key;
    const trimmed = result.replace(/ /g, '');

    if (!keys.includes(value)) return;

    // Prevent double dot
    if (value === '.' && trimmed.slice(-1) === '.') return;

    // Operators
    if (Ops.includes(value) && !Ops.includes(trimmed.slice(-1)))
      return setResult((previousVal: string) => `${previousVal} ${value} `);
    // Numbers
    else if (!Ops.includes(value))
      return setResult((previousVal: string) =>
        previousVal === '0' ? value : previousVal + value
      );
  };

  useEventListener('keydown', (e) => handleKeyPress(e));

  // useEffect(() => {
  //   document.addEventListener('keypress', (e) => handleKeyPress(e));
  //   return () => {
  //     document.removeEventListener('keypress', (e) => handleKeyPress(e));
  //   };
  // }, []);
  return (
    <div
      onKeyDown={(e) => handleKeyPress(e)}
      className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500"
    >
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
            onClick={(e) => getResult()}
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
