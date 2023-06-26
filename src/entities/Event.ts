import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Index } from 'typeorm';

@Entity()
@Index(["title", "eventDate"])
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true, default: null})
  description: string;

  @Column()
  eventDate: Date; 

  @Column()
  location: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date; 
}

