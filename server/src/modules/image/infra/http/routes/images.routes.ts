import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import ImageController from '../controllers/ImageController';

const ImageRouter = Router();
const imageController = new ImageController();

const upload = multer(uploadConfig);
ImageRouter.post('/file', upload.single('path'), imageController.create);

export default ImageRouter;
