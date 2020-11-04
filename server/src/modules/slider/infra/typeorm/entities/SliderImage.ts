import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Slider from '@modules/slider/infra/typeorm/entities/Slider';
import Image from '@modules/image/infra/typeorm/entities/Image';

@Entity('slider_images')
class SliderImages {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Slider, image => image.slider_images)
    @JoinColumn({ name: 'image_id' })
    image: Image;

    @ManyToOne(() => Slider, slider => slider.slider_images)
    @JoinColumn({ name: 'slider_id' })
    slider: Slider;

    @Column()
    slider_id: string;

    @Column()
    image_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default SliderImages;
