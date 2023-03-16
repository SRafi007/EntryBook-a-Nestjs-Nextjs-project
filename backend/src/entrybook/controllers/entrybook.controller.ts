import{Get,Controller,Post,Body,Param,Delete,Put} from '@nestjs/common';
import { employeeDTO, EntrybookDTO } from '../DTOs/entrybookDTO';
import { EntrybookService } from '../services/entrybook.service';
@Controller('entrybook')
export class EntryBookController{
    constructor(private entrybookService: EntrybookService){}
    @Get()
    getEmployee(){
        return this.entrybookService.getEmployee();
    }
    @Post('/add')
    insertEmployee(@Body()employeeInfo:EntrybookDTO){
        return this.entrybookService.insertEmployee(employeeInfo)
    }
    @Delete('/delete/:id')
    deleteEmployee(@Param()id){
        return this.entrybookService.deleteEmployee(id)
    }
    @Put('/update/:id')
    updateentry(@Param('id')id:number,@Body()entryInfo:employeeDTO){
        return this.entrybookService.updateEmployee(entryInfo,id)
    }

    //------------------------------------------
    @Get('/entrybook')
    createEntrybook(){
        return this.entrybookService.createEntrybook()
    }
}