import { Router } from 'express';
import CardController from '../controllers/CardController';

const CardRouter = Router();
const cardController = new CardController();

CardRouter.post('/', cardController.create);

export default CardRouter;
