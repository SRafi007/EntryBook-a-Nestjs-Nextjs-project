import { IsNotEmpty,IsOptional } from "class-validator";

export class EntrybookDTO{

    @IsNotEmpty()

    name:string;
    @IsNotEmpty()

    mail:string;
    @IsNotEmpty()

    phoneNumber:string;

    @IsNotEmpty()
    position:string;
    @IsNotEmpty()
    employeeID:string;

}

export class employeeDTO{
     @IsNotEmpty()

    name:string;
    @IsNotEmpty()

    mail:string;
    @IsNotEmpty()

    phoneNumber:string;

    @IsNotEmpty()
    position:string;
    
    @IsNotEmpty()
    employeeID:string;
}
export class entryDTO{
    @IsNotEmpty()
    name:string;
    @IsOptional()

    employeeID:string;
    @IsOptional()

    inTime:Date;

    @IsOptional()
    outTime:Date;

    @IsOptional()
    status:string;
    @IsOptional()
    date:Date;
}
export class tempEntryDTO{
    @IsNotEmpty()
    name:string;
    @IsOptional()

    employeeID:string;
    @IsOptional()
    currDate:Date;
}