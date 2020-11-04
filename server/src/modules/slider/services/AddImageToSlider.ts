import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import SliderImage from '@modules/slider/infra/typeorm/entities/SliderImage';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import AppError from '@shared/errors/AppError';
import ISliderImageRepository from '@modules/slider/repositories/ISliderImageRepository';
import ISliderRepository from '../repositories/ISliderRepository';

interface IRequest {
    slider_id: string;
    image_id: string;
}

@injectable()
class AddImageToSliderService {
    constructor(
        @inject('SliderRepository')
        private sliderRepository: ISliderRepository,

        @inject('ImageRepository')
        private imageRepository: IImageRepository,

        @inject('SliderImageRepository')
        private sliderImageRepository: ISliderImageRepository,
    ) {}

    public async execute({
        slider_id,
        image_id,
    }: IRequest): Promise<SliderImage> {
        const slider = await this.sliderRepository.findById(slider_id);
        if (!slider) {
            throw new AppError('Slider not found!');
        }

        const image = await this.imageRepository.findById(image_id);
        if (!image) {
            throw new AppError('Image not found!');
        }

        const sliderResult = await this.sliderImageRepository.save({
            slider,
            image,
        });

        return sliderResult;
    }
}

export default AddImageToSliderService;
