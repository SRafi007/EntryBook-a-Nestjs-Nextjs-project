import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm';
@Entity()
export class EntryEvent{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    entryTime: Date;
    @Column()
    exitTime: Date;
    @Column()
    EmployeeId:number;

}