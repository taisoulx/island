import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { WechatGroup } from '@libs/db/models/wetool/wechatGroup.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: WechatGroup,
})
@ApiTags('群管理')
@Controller('wgroup')
export class WetoolController {
  constructor(
    @InjectModel(WechatGroup)
    private readonly model: ReturnModelType<typeof WechatGroup>,
  ) {}
}
