import {
  Controller,
  Body,
  Post,
  Put,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { Cat } from 'src/domain/cat';
import { CatService } from 'src/services/cat.service';

@Controller('cats')
export class CatController {
  constructor(private _cat: CatService) {}
  @Post()
  save(@Body() cat: Cat) {
    this._cat.save(cat);
    return;
  }
  @Put()
  update(@Body() cat: Cat) {
    this._cat.save(cat);
    return;
  }
  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: number) {
    return this._cat.findAllByUser(userId);
  }
  @Get(':catId')
  findById(@Param('catId') catId: number) {
    return this._cat.findById(catId);
  }
  @Delete(':catId')
  deleteById(@Param('catId') catId: number) {
    this._cat.deleteById(catId);
    return;
  }
}
