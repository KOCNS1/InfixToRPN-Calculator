type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

export interface OpenProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type historyItem = {
  infix: string;
  result: string;
};

export interface CalculatorContextType {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  history: historyItem[];
  setHistory: Dispatch<SetStateAction<historyItem[]>>;
  currentOperation: string;
  setCurrentOperation: Dispatch<SetStateAction<string>>;
}
