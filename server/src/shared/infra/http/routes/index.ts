// src/routes/index.ts
import { Router } from 'express';
import sliderRouter from '@modules/slider/infra/http/routes/slider.routes';
import cardsRouter from '@modules/card/infra/http/routes/card.routes';
import imagesRouter from '@modules/image/infra/http/routes/images.routes';

const routes = Router();
routes.use('/sliders', sliderRouter);
routes.use('/cards', cardsRouter);
routes.use('/images', imagesRouter);

export default routes;
