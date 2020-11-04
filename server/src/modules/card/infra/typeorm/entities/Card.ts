import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Image from '@modules/image/infra/typeorm/entities/Image';

@Entity('cards')
class Card {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Image, image => image.id)
    @JoinColumn({ name: 'image_id' })
    image: Image;

    @Column()
    image_id: string;
}

export default Card;
