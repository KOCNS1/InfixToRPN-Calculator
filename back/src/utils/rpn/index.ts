import { do_add, do_sub, do_div, do_mul, do_mod } from '../operations';
import { Ops } from '../../types/rpn';

const ops: Ops = {
  '+': do_add,
  '-': do_sub,
  '*': do_mul,
  '/': do_div,
  '%': do_mod,
};

/**
 * @param {string} expression
 * @returns {number}
 */
export const calc_rpn = (expression: string): number => {
  const stack: number[] = [];
  const tokens = expression.split(' ');

  for (const token of tokens) {
    // Unary plus (+) convet to number && if Token is a value, push it onto the stack

    if (!Number.isNaN(+token)) {
      stack.push(parseFloat(token));
    }

    // Token is operator
    else {
      if (stack.length < 2) {
        throw new Error('Insufficient values in expression.');
      }

      const op = ops[token];
      const a = stack.pop() as number;
      const b = stack.pop() as number;
      stack.push(op(b, a));
    }
  }

  if (stack.length > 1) {
    throw new Error('Inputted expression has too many values.');
  }

  return stack.pop() as number;
};

console.log(calc_rpn('1 2 +'));
