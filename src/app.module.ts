import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configurationDb } from './configuration/db';
import { CatController } from './controllers/cat.controller';
import { UserController } from './controllers/user.controller';
import { Cat } from './domain/cat';
import { User } from './domain/user';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configurationDb),
    TypeOrmModule.forFeature([User, Cat]),
  ],
  controllers: [UserController, CatController],
  providers: [UserService, CatService],
})
export class AppModule {}
