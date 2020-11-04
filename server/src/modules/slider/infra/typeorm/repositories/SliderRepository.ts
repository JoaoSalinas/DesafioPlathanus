import { getRepository, Repository } from 'typeorm';

import ICreateSliderDto from '@modules/slider/dtos/ICreateSliderDto';
import ISliderRepository from '@modules/slider/repositories/ISliderRepository';
import Slider from '../entities/Slider';

class SlidersRepository implements ISliderRepository {
    private ormRepository: Repository<Slider>;

    constructor() {
        this.ormRepository = getRepository(Slider);
    }

    public async findById(id: string): Promise<Slider | undefined> {
        const slider = await this.ormRepository.findOne(id);
        return slider;
    }

    public async create(SliderData: ICreateSliderDto): Promise<Slider> {
        const slider = this.ormRepository.create(SliderData);
        await this.ormRepository.save(slider);

        return slider;
    }

    public async save(slider: Slider): Promise<Slider> {
        return this.ormRepository.save(slider);
    }
}

export default SlidersRepository;
