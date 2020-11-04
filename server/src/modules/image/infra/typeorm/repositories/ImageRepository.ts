import { getRepository, Repository } from 'typeorm';

import ICreateSliderDto from '@modules/image/dtos/ICreateImageDto';

import IImageRepository from '@modules/image/repositories/IImageRepository';
import Image from '../entities/Image';

class ImageRepository implements IImageRepository {
    private ormRepository: Repository<Image>;

    constructor() {
        this.ormRepository = getRepository(Image);
    }

    public async findById(id: string): Promise<Image | undefined> {
        const image = await this.ormRepository.findOne(id);
        return image;
    }

    public async create(ImageData: ICreateSliderDto): Promise<Image> {
        const image = this.ormRepository.create(ImageData);
        await this.ormRepository.save(image);
        return image;
    }

    public async save(image: Image): Promise<Image> {
        return this.ormRepository.save(image);
    }
}

export default ImageRepository;
