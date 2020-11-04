import Slider from '../infra/typeorm/entities/Slider';
import iCreateSliderDto from '../dtos/ICreateSliderDto';

export default interface ISliderRepository {
    findById(id: string): Promise<Slider | undefined>;
    create(data: iCreateSliderDto): Promise<Slider>;
    save(slide: Slider): Promise<Slider>;
}
