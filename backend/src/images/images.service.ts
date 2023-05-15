import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { HttpService } from '@nestjs/axios';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(private readonly httpService: HttpService) {}
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll(): Promise<Image[]> {
    const axios = this.httpService.axiosRef;

    const [images] = await axios({
      url: `${process.env.PICTURES_HOST_URL}${process.env.IMAGES_URL}`,
      method: 'GET',
    })
      .then((response) => response.data)
      .catch(() => [[]]);

    const [photos] = await axios({
      url: `${process.env.PICTURES_HOST_URL}${process.env.PHOTOS_URL}`,
      method: 'GET',
    })
      .then((response) => response.data)
      .catch(() => [[]]);

    return [...images, ...photos];
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
