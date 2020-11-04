import Slider from '../infra/typeorm/entities/Image';
import iCreateImageDto from '../dtos/ICreateImageDto';

export default interface ISliderRepository {
    findById(id: string): Promise<Slider | undefined>;
    create(data: iCreateImageDto): Promise<Slider>;
    save(slide: Slider): Promise<Slider>;
}
