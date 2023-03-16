import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntrybookModule } from './entrybook/modules/entrybook.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EntrybookModule,TypeOrmModule.forRoot({type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'psql2424',
  database: 'EntryBook',
  autoLoadEntities: true,
  synchronize: true,})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
