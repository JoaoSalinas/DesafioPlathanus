import Image from '@modules/image/infra/typeorm/entities/Image';

export default interface ICreateCardDto {
    title: string;
    description: string;
    link: string;
    image: Image;
}
