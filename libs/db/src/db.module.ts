import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { SystemUser } from '@libs/db/models/system/systemUser.model';
import { Role } from '@libs/db/models/system/role.model';
import { Permission } from '@libs/db/models/system/permission.model';
import { Action } from '@libs/db/models/system/action.model';

const models = TypegooseModule.forFeature([
  SystemUser,
  Role,
  Permission,
  Action
])

@Global()
@Module({
  imports: [

    TypegooseModule.forRoot('mongodb://localhost/island', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
