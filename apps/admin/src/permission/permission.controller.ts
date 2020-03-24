import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Permission } from '@libs/db/models/system/permission.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Permission,
})
@ApiTags('权限管理')
@Controller('permission')
export class PermissionController {
  constructor(
    @InjectModel(Permission)
    private readonly model: ReturnModelType<typeof Permission>,
  ) {}
}
