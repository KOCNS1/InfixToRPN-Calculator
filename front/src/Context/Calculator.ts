import { createContext } from 'react';
import { CalculatorContextType } from '../Types/Calculator';

export const CalculatorContext = createContext<CalculatorContextType | null>(
  null
);
