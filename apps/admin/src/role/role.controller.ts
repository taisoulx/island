import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Role } from '@libs/db/models/system/role.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model:Role
})
@ApiTags('角色')
@Controller('role')
export class RoleController {
  constructor(
    @InjectModel(Role) private readonly model: ReturnModelType<typeof Role>
  ) {
  }
}
