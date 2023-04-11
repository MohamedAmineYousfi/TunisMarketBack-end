import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

// import {BreedsModule} from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [UsersModule, MongooseModule.forRoot("mongodb+srv://dali:dalixo@tunismarket0.ykbjsxz.mongodb.net/TunisMarket?retryWrites=true&w=majority") ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
