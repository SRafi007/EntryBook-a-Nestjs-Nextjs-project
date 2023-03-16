import { Module } from "@nestjs/common";
import { EntryBookController } from "../controllers/entrybook.controller";
import { EntrybookService } from "../services/entrybook.service";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { EntryBook } from "../entities/entry.entity";
import { Employee } from "../entities/employee.entity";

@Module({
    //imports: [TypeOrmModule.forFeature([])],
    imports:[TypeOrmModule.forFeature([EntryBook,Employee])],
    controllers:[EntryBookController],
    providers:[EntrybookService]
})
export class EntrybookModule {}