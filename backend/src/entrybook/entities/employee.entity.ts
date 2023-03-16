import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm';
@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    mail: string;
    @Column()
    phoneNumber: string;
    @Column()
    position: string;
    @Column()
    employeeID: string;
    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP',nullable:true})
    date: Date;

}