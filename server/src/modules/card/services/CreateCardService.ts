import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import Card from '@modules/card/infra/typeorm/entities/Card';
import IImageRepository from '@modules/image/repositories/IImageRepository';
import AppError from '@shared/errors/AppError';
import ICardRepository from '../repositories/ICardRepository';

interface IRequest {
    title: string;
    description: string;
    link: string;
    image_id: string;
}

@injectable()
class CreateCardService {
    constructor(
        @inject('CardRepository')
        private cardRepository: ICardRepository,

        @inject('ImageRepository')
        private imageRepository: IImageRepository,
    ) {}

    public async execute({
        title,
        description,
        link,
        image_id,
    }: IRequest): Promise<Card> {
        const image = await this.imageRepository.findById(image_id);

        if (!image) {
            throw new AppError('This image does not exist');
        }

        const card = await this.cardRepository.create({
            title,
            description,
            link,
            image,
        });

        return card;
    }
}

export default CreateCardService;
