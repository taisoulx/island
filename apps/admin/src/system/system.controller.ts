import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { SystemUser } from '@libs/db/models/system/systemUser.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model:SystemUser
})
@ApiTags('系统用户')
@Controller('system')
export class SystemController {
  constructor(
    @InjectModel(SystemUser) private readonly model:ReturnModelType<typeof SystemUser>
  ) {}
}
