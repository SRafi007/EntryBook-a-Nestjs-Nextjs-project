import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany,CreateDateColumn} from 'typeorm';
import { EntryBook } from './entry.entity';
@Entity('entryEvents')
export class EntryEvent{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    workingDay:string;
    @Column({nullable:true})
    attendance:number;
    @Column({nullable:true})
    productiveHours:number;
    @Column({nullable:true})
    markTheDayAs:string;
    @OneToMany(() => EntryBook, entryBook => entryBook.entryEvent)
    entryBook: EntryBook[];
   
}