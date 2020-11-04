import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateImageService from '@modules/image/services/CreateImageService';

export default class ImageController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const createImage = container.resolve(CreateImageService);
        const image = await createImage.execute({
            path: request.file.filename,
        });

        return response.json(image);
    }
}
