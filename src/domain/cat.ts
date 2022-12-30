import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fact: string;
  @Column({ name: 'gift_url' })
  giftUrl: string;
  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
