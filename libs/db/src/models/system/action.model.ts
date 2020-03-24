import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Permission } from '@libs/db/models/system/permission.model';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class Action {
  @ApiModelProperty({description:'动作id',example:'add'})
  @prop()
  action: string;

  @ApiModelProperty({description:'描述',example:'新增'})
  @prop()
  describe: string;

  @ApiModelProperty({description:'属于的权限id',example:'5e65e2661c00d7250c46d0fa'})
  @prop({
    ref: 'permission',
  })
  permission: Ref<Permission>;
}
