import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cat } from './cat';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Cat, (cat) => cat.user)
  cats?: Cat[];
}
