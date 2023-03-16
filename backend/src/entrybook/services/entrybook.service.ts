import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { EntryBook } from "../entities/entry.entity";
import { InjectRepository } from "@nestjs/typeorm/dist/common";
import { employeeDTO, EntrybookDTO, tempEntryDTO } from "../DTOs/entrybookDTO";
import { Employee } from "../entities/employee.entity";
@Injectable()
export class EntrybookService {
    constructor(
        @InjectRepository(EntryBook)
        private EntryBookRepo:Repository<EntryBook>,
        @InjectRepository(Employee)
        private EmployeeRepo:Repository<Employee>
    ){}
    

  async getEmployee() {
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
            position: updatedEntry.position,
            employeeID:updatedEntry.employeeID

        });
    if (entrybook.affected==0) {

      return this.EmployeeRepo.save({
        name: updatedEntry.name,
        mail: updatedEntry.mail,
        phoneNumber:updatedEntry.phoneNumber,
        position: updatedEntry.position,
        employeeID:updatedEntry.employeeID
      });
    }
    else{
        return "updated";
    }


  }
      //--------------------------------
     async createEntrybook(){
        //let entryList:tempEntryDTO;
        const tempdata = await this.EmployeeRepo.find();
        for(var i = 0; i < tempdata.length; i++) {
            const currentdate=new Date();
            let entryList={name:tempdata[i].name,employeeID:tempdata[i].employeeID,currDate:currentdate};
            await this.EntryBookRepo.save(entryList);
        }

        return tempdata;
    }
}