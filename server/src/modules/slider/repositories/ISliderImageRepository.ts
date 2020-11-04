import ICreateSliderImageDto from '@modules/slider/dtos/ICreateSliderImageDto';
import SliderImage from '../infra/typeorm/entities/SliderImage';

export default interface ISliderImageRepository {
    save(sliderImage: ICreateSliderImageDto): Promise<SliderImage>;
    // addImage(sliderImage: ICreateSliderImageDto): Promise<SliderImage>;
}
