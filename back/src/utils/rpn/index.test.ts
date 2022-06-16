import { calc_rpn, infix_to_rpn } from '.';
import { Exception } from '../exception';

describe('infix_to_rpn', () => {
  test('1 + 2', () => {
    expect(infix_to_rpn('1 + 2')).toBe('1 2 +');
  });
  test('1 + 2 * 3', () => {
    expect(infix_to_rpn('1 + 2 * 3')).toBe('1 2 3 * +');
  });
  test('1 + 2 * 3 - 4', () => {
    expect(infix_to_rpn('1 + 2 * 3 - 4')).toBe('1 2 3 * + 4 -');
  });
  test('1 + 2 * 3 - 4 * 5', () => {
    expect(infix_to_rpn('1 + 2 * 3 - 4 * 5')).toBe('1 2 3 * + 4 5 * -');
  });
  test('1 + 2 * 3 - 4 * 5 / 6', () => {
    expect(infix_to_rpn('1 + 2 * 3 - 4 * 5 / 6')).toBe('1 2 3 * + 4 5 * 6 / -');
  });
});

describe('calc_rpn', () => {
  test('1 + 2', () => {
    expect(calc_rpn('1 2 +')).toBe(3);
  });
  test('1 + 2 * 3', () => {
    expect(calc_rpn('1 2 3 * +')).toBe(7);
  });
  test('1 + 2 * 3 - 4', () => {
    expect(calc_rpn('1 2 3 * + 4 -')).toBe(3);
  });
  test('1 + 2 * 3 - 4 * 5', () => {
    expect(calc_rpn('1 2 3 * + 4 5 * -')).toBe(-13);
  });
  test('1 + 2 * 3 - 4 * 5 / 6', () => {
    expect(calc_rpn('1 2 3 * + 4 5 * 6 / -')).toBe(3.6666666666666665);
  });
  // expect to throw new Exception('Inputted expression has too many values.', 500);
  //   test('2 + ', () => {
  //     expect(calc_rpn('2 +')).toThrowError(Exception);
  //   });
});
