import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCardService from '@modules/card/services/CreateCardService';

export default class CardController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { title, description, link, image_id } = request.body;

        const createCard = container.resolve(CreateCardService);

        const card = await createCard.execute({
            title,
            description,
            link,
            image_id,
        });

        return response.json(card);
    }
}
