type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

export interface TilesProps {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
}
