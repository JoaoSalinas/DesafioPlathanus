import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSliderService from '@modules/slider/services/CreateSliderService';
import FindSliderService from '@modules/slider/services/FindSliderService';

export default class SliderController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { title, link_button, text_button } = request.body;

        const createSlider = container.resolve(CreateSliderService);

        const slider = await createSlider.execute({
            title,
            link_button,
            text_button,
        });

        return response.json(slider);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findSlider = container.resolve(FindSliderService);
        const slider = await findSlider.execute({ id });

        return response.json(slider);
    }
}
