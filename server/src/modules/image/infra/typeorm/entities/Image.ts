import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import SliderImage from '@modules/slider/infra/typeorm/entities/SliderImage';

@Entity('images')
class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @Column()
    alt?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => SliderImage, slider => slider.image)
    slider_images: SliderImage[];
}

export default Image;
