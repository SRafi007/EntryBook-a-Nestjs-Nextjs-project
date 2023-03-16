import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm';
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
    currDate: Date;

}

