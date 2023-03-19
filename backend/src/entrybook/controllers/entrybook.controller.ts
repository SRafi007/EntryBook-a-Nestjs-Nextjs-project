import{Get,Controller,Post,Body,Param,Delete,Put} from '@nestjs/common';
import { employeeDTO, EntrybookDTO, WorkdayDTO } from '../DTOs/entrybookDTO';
import { EntrybookService } from '../services/entrybook.service';
@Controller('entrybook')
export class EntryBookController{
    constructor(private entrybookService: EntrybookService){}
    @Get()
    getEmployee(){
        return this.entrybookService.getEmployee();
    }
    @Post('/add')
    insertEmployee(@Body()employeeInfo:employeeDTO){
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
    @Get('/newentryEvent')
    newEntryEvent(){
        return this.entrybookService.newEntryEvent();
    }
    @Put('/updateentryEvent')
    updateentryEvent(@Body()entryInfo){
        return this.entrybookService.updateEntryEvent(entryInfo);
    }
    @Get('/entryEvent')
    getEvents(){
        return  this.entrybookService.getEvents();
    }
    @Get('/entrySheet')
    getentrySheet(){
        return  this.entrybookService.getentrySheet();
    }
    @Get('/updateinTime')
    updateinTime(@Body()entryInfo){
        return this.entrybookService.updateinTime(entryInfo)
    }
    //------------------------------------------
    // @Get('/entrybook')
    // createEntrybook(){
    //     return this.entrybookService.createEntrybook()
    // }
}