import { getRepository, Repository } from 'typeorm';

import ISliderImageRepository from '@modules/slider/repositories/ISliderImageRepository';
import ICreateSliderImageDto from '@modules/slider/dtos/ICreateSliderImageDto';
import SliderImage from '../entities/SliderImage';

class SlidersImageRepository implements ISliderImageRepository {
    private ormRepository: Repository<SliderImage>;

    constructor() {
        this.ormRepository = getRepository(SliderImage);
    }

    public async save({
        slider,
        image,
    }: ICreateSliderImageDto): Promise<SliderImage> {
        return this.ormRepository.save({
            slider,
            image,
            image_id: image.id,
            slider_id: slider.id,
        });
    }
}

export default SlidersImageRepository;
