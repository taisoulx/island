import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Action } from '@libs/db/models/system/action.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Action,
})
@ApiTags('页面操作权限管理')
@Controller('action')
export class ActionController {
  constructor(
    @InjectModel(Action) private readonly model: ReturnModelType<typeof Action>,
  ) {}
}
