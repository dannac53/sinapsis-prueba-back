import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domain/cat';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  save(cat: Cat) {
    this.catRepository.save(cat);
  }
  findAllByUser(userId: number) {
    return this.catRepository.findBy({ user: { id: userId } });
  }
  findById(catId: number) {
    return this.catRepository.findBy({ id: catId });
  }
  deleteById(catId: number) {
    this.catRepository.delete(catId);
  }
}
