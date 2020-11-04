import { Request, Response } from 'express';
import { container } from 'tsyringe';
// import Image from '@modules/image/infra/typeorm/entities/Image';

import AddImageToSliderService from '@modules/slider/services/AddImageToSlider';

export default class SliderImageController {
    public async addImage(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { slider_id, image_id } = request.body;
        const sliderImage = container.resolve(AddImageToSliderService);
        const sliderWithImage = await sliderImage.execute({
            slider_id,
            image_id,
        });

        return response.json(sliderWithImage);
    }
}
