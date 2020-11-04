import Card from '../infra/typeorm/entities/Card';
import iCreateCardDto from '../dtos/ICreateCardDto';

export default interface ICardRepository {
    findById(id: string): Promise<Card | undefined>;
    create(data: iCreateCardDto): Promise<Card>;
    save(slide: Card): Promise<Card>;
}
