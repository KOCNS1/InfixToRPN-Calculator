import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import { infix_to_rpn, calc_rpn } from '~/utils/rpn';

const calculatorRouter = Router();

calculatorRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { infix } = req.body;
      const postfix = infix_to_rpn(infix);
      const result = calc_rpn(postfix);
      return res.json({ result, postfix });
    } catch (e) {
      next(e);
    }
  }
);

export default calculatorRouter;
