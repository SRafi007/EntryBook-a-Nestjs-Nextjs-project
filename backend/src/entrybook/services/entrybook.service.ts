import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { EntryBook } from "../entities/entry.entity";
import { InjectRepository } from "@nestjs/typeorm/dist/common";
import { employeeDTO, EntrybookDTO, tempEntryDTO, WorkdayDTO } from "../DTOs/entrybookDTO";
import { Employee } from "../entities/employee.entity";
import { EntryEvent } from "../entities/entryEvent.entity";
@Injectable()
export class EntrybookService {
    constructor(
        @InjectRepository(EntryBook)
        private EntryBookRepo:Repository<EntryBook>,
        @InjectRepository(Employee)
        private EmployeeRepo:Repository<Employee>,
        @InjectRepository(EntryEvent)
        private EntryEventRepo:Repository<EntryEvent>
    ){}
    

  async getEmployee() {
    this.newEntryEvent();
    return await this.EmployeeRepo.find();

  }

  async insertEmployee(employeeInfo:employeeDTO){
    await this.EmployeeRepo.save(employeeInfo);
    return employeeInfo;
  }

  async deleteEmployee(id: number) {
    const tempdata =await this.EmployeeRepo.delete(id)
    if (tempdata.affected) {
      return 1;
    }
    else{
        return 0;
    }
  }

  async updateEmployee(updatedEntry:employeeDTO,id: number){
    const entrybook = await this.EmployeeRepo.update({id:id},
        {
            name: updatedEntry.name,
            mail: updatedEntry.mail,
            phoneNumber:updatedEntry.phoneNumber,
            jobType:updatedEntry.jobType,
            department: updatedEntry.department,
            employeeID:updatedEntry.employeeID,
            joiningDate:updatedEntry.joiningDate

        });
    if (entrybook.affected==0) {

      return this.EmployeeRepo.save({
        name: updatedEntry.name,
        mail: updatedEntry.mail,
        phoneNumber:updatedEntry.phoneNumber,
        jobType:updatedEntry.jobType,
        department: updatedEntry.department,
        employeeID:updatedEntry.employeeID,
        joiningDate:updatedEntry.joiningDate
      });
    }
    else{
        return "updated";
    }


  }
      //--------------------------------Genarate Entry Book for that Date
     async createEntrybook(id){
        
        const tempdata = await this.EmployeeRepo.find();
        for(var i = 0; i < tempdata.length; i++) {
            const currentdate=new Date();
            let entryList={
              name:tempdata[i].name,
              employeeID:tempdata[i].employeeID,
              status:"unactive",
              entryEventId:id
            };
            await this.EntryBookRepo.save(entryList);
        }

        return tempdata;
    }
    //-----------------------------------------------------
    async newEntryEvent(){
      //const tempdata=await this.EntryEventRepo.find({where:{workingDay:entryInfo.workingDay}})
      const today = new Date();
      const dateOnly = today.toLocaleDateString('en-US');
      const tempdata=await this.EntryEventRepo.find({where:{workingDay:dateOnly}})
      if(tempdata.length > 0){
        return tempdata;
      }
      else{
        let  tempList:WorkdayDTO;
        tempList={workingDay:dateOnly,
                  attendance:0,
                  productiveHours:0,
                  markTheDayAs:""
        };
        const tempdataE = await this.EntryEventRepo.save(tempList);
        
        if(tempdataE){
          const tempParam=await this.EntryEventRepo.findOneBy({workingDay:dateOnly})
          this.createEntrybook(tempParam.id);
          return 1;

        }else{
          return "submition fail";
        }
      }
      
  }
  async updateEntryEvent(entryInfo){
    const tempdata=await this.EntryEventRepo.update({id:entryInfo.id},{
      attendance:entryInfo.attendance,
      productiveHours:entryInfo.productiveHours,
      markTheDayAs:entryInfo.markTheDayAs
    });
    if(tempdata.affected==1){
      return tempdata;
    }
    else{
      return 0;
    }
    
  }
  async getEvents(){
    const tempdata=await  this.EntryEventRepo.find({where:{},relations:{
      entryBook:true,
    }
      
    });
    return tempdata//['entryBook'];getentrySheet
  }
  async getentrySheet(){
    const today = new Date();
      const dateOnly = today.toLocaleDateString('en-US');
    const tempdata=await this.EntryEventRepo.find({where:{workingDay:dateOnly}});
    if(tempdata.length>0){
      const tempId=tempdata[0].id
      const returndata=await this.EntryBookRepo.find({where:{entryEventId:tempId}});
      return returndata//['entryBook'];getentrySheet
    }
    
  }
  updateinTime(info){
    const currTime = new Date();
      //const dateOnly = today.toLocaleDateString('en-US');
    return this.EntryBookRepo.update({id:info.id},{
        inTime:currTime,
        status:info.status
    })
  }
}
