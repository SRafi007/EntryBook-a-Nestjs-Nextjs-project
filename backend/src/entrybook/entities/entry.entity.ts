import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm';
import { EntryEvent } from './entryEvent.entity';
@Entity('entryBook')
export class EntryBook{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({nullable:true})
    employeeID: string;
    @Column({nullable:true})
    inTime: Date;
    @Column({nullable:true})
    outTime: Date;
    @Column({nullable:true})
    status: string;
    @Column({nullable:true})
    workingHour: Date;
    @Column({nullable:true})
    entryEventId: number;
    @ManyToOne(() => EntryEvent, entryEvent => entryEvent.entryBook)
   entryEvent: EntryEvent;

}

