import { getRepository, Repository } from 'typeorm';
import ICreateCardDto from '@modules/card/dtos/ICreateCardDto';
import ICardRepository from '@modules/card/repositories/ICardRepository';
import Card from '../entities/Card';

class CardsRepository implements ICardRepository {
    private ormRepository: Repository<Card>;

    constructor() {
        this.ormRepository = getRepository(Card);
    }

    public async findById(id: string): Promise<Card | undefined> {
        const card = await this.ormRepository.findOne(id);
        return card;
    }

    public async create({
        title,
        description,
        link,
        image,
    }: ICreateCardDto): Promise<Card> {
        const card = this.ormRepository.create({
            title,
            description,
            link,
            image,
            image_id: image.id,
        });
        await this.ormRepository.save(card);

        return card;
    }

    public async save(card: Card): Promise<Card> {
        return this.ormRepository.save(card);
    }
}

export default CardsRepository;
