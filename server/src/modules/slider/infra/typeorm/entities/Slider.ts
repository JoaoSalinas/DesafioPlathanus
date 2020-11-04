import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import SliderImages from '@modules/slider/infra/typeorm/entities/SliderImage';

@Entity('sliders')
class Slider {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    link_button: string;

    @Column()
    text_button: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => SliderImages, slider_images => slider_images.slider, {
        cascade: true,
        eager: true,
    })
    slider_images: SliderImages[];
}

export default Slider;
