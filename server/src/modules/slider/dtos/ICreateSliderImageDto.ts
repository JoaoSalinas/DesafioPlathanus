import Slider from '@modules/slider/infra/typeorm/entities/Slider';
import Image from '@modules/image/infra/typeorm/entities/Image';

export default interface ICreateSliderImageDto {
    slider: Slider;
    image: Image;
}
