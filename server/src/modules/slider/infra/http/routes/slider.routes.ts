import { Router } from 'express';
import SliderController from '../controllers/SliderController';
import SliderImageController from '../controllers/SliderImageController';

const SliderRouter = Router();
const sliderController = new SliderController();
const sliderImageController = new SliderImageController();

SliderRouter.post('/', sliderController.create);
SliderRouter.get('/:id', sliderController.show);
SliderRouter.post('/add-image-to-slider', sliderImageController.addImage);

export default SliderRouter;
