import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';
import Image from '@modules/image/infra/typeorm/entities/Image';

import IImageRepository from '../repositories/IImageRepository';

interface IRequest {
    path: string;
    alt?: string;
}

@injectable()
class CreateImageService {
    constructor(
        @inject('ImageRepository')
        private imageRepository: IImageRepository,
    ) {}

    public async execute({ path, alt }: IRequest): Promise<Image> {
        const image = await this.imageRepository.create({
            path,
            alt,
        });
        return image;
    }
}

export default CreateImageService;
