import { do_add, do_sub, do_div, do_mul, do_mod } from '../operations';
import { Ops, Prio } from '../../types/rpn';
import { Exception } from '../exception';

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
      if (stack.length < 2)
        throw new Exception('Insufficient values in expression.', 500);

      const op = ops[token];
      const a = stack.pop() as number;
      const b = stack.pop() as number;
      stack.push(op(b, a));
    }
  }

  if (stack.length > 1)
    throw new Exception('Inputted expression has too many values.', 500);

  return stack.pop() as number;
};

const Priority: Prio = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };

// Convet infix to RPN
export const infix_to_rpn = (expression: string): string => {
  const stack: string[] = [];
  const output: string[] = [];
  const tokens = expression.split(' ');

  for (const token of tokens) {
    // Append the current token to the end of the postfix expression if it is an operand
    if (!Number.isNaN(+token)) {
      output.push(token);
    } else {
      // If current operator has lower precedence, first pop operators from the stack to the output
      while (
        stack.length > 0 &&
        Priority[token] <= Priority[stack.slice(-1)[0]]
      ) {
        output.push(stack.pop() as string);
      }
      // if operator  priority is Higher than the top of the stack, push the token to the stack
      stack.push(token);
    }
  }
  // while remaining operators in the stack, pop them to the output
  while (stack.length > 0) {
    output.push(stack.pop() as string);
  }
  return output.join(' ');
};
