import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { WechatGroupMember } from '@libs/db/models/wetool/wechatGroupMember.model';

@modelOptions({
  schemaOptions: {
    toJSON: {
      virtuals: true,
    },
  },
})
export class WechatGroup {
  @ApiModelProperty({ description: '群名称', example: '相亲相爱一家人' })
  @prop()
  groupName: string;

  @ApiModelProperty({ description: '群成员数量', example: '10' })
  @prop({
    default: 0
  })
  groupNum: number;

  @arrayProp({
    ref: 'WechatGroupMember',
    localField: '_id',
    foreignField: 'wechatgroup',
  })
  wechatGroupMember: Ref<WechatGroupMember>[];
}
