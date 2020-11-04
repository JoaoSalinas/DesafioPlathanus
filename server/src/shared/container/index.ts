import { container } from 'tsyringe';
import './provider';

import ISliderRepository from '@modules/slider/repositories/ISliderRepository';
import SliderRepository from '@modules/slider/infra/typeorm/repositories/SliderRepository';

import IImageRepository from '@modules/image/repositories/IImageRepository';
import ImageRepository from '@modules/image/infra/typeorm/repositories/ImageRepository';

import ICardRepository from '@modules/card/repositories/ICardRepository';
import CardRepository from '@modules/card/infra/typeorm/repositories/CardRepository';

import ISliderImageRepository from '@modules/slider/repositories/ISliderImageRepository';
import SliderImageRepository from '@modules/slider/infra/typeorm/repositories/SliderImageRepository';

container.registerSingleton<ISliderRepository>(
    'SliderRepository',
    SliderRepository,
);

container.registerSingleton<ICardRepository>('CardRepository', CardRepository);

container.registerSingleton<IImageRepository>(
    'ImageRepository',
    ImageRepository,
);

container.registerSingleton<ISliderImageRepository>(
    'SliderImageRepository',
    SliderImageRepository,
);
