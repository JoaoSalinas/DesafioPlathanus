import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';
import Slider from '@modules/slider/infra/typeorm/entities/Slider';

import ISliderRepository from '../repositories/ISliderRepository';

interface IRequest {
    title: string;
    link_button: string;
    text_button: string;
}

@injectable()
class CreateSliderService {
    constructor(
        @inject('SliderRepository')
        private sliderRepository: ISliderRepository,
    ) {}

    public async execute({
        title,
        link_button,
        text_button,
    }: IRequest): Promise<Slider> {
        const slider = await this.sliderRepository.create({
            title,
            link_button,
            text_button,
        });

        return slider;
    }
}

export default CreateSliderService;
