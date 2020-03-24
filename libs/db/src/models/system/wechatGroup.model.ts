import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@modelOptions({
  schemaOptions: {
    toJSON: {
      virtuals: true,
    },
  },
})
export class WechatGroup {
  @ApiModelProperty({ description: '角色名称', example: '管理员' })
  @prop()
  groupName: string;

  @ApiModelProperty({ description: '角色属性', example: 'admin' })
  @prop({
    default: 0
  })
  groupNum: number;

  @arrayProp({
    ref: 'Permission',
    localField: '_id',
    foreignField: 'role',
  })
  systemUsers: Ref<We>[];
}
