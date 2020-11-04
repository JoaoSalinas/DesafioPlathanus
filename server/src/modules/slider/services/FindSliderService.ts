import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Slider from '@modules/slider/infra/typeorm/entities/Slider';
import ISliderRepository from '../repositories/ISliderRepository';

interface IRequest {
    id: string;
}

@injectable()
class FindSliderService {
    constructor(
        @inject('SliderRepository')
        private sliderRepository: ISliderRepository,
    ) {}

    public async execute({ id }: IRequest): Promise<Slider | undefined> {
        const slider = await this.sliderRepository.findById(id);
        return slider;
    }
}

export default FindSliderService;
