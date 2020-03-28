import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { WechatGroup } from '@libs/db/models/wetool/wechatGroup.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
})
export class WechatGroupMember {
  @ApiModelProperty({ description: '用户wxid', example: 'wxid_cy90h0h60n1c21' })
  @prop()
  wxid: string;

  @ApiModelProperty({ description: '用户名', example: 'taisoulx' })
  @prop()
  user_name: string;

  @ApiModelProperty({ description: '用户昵称', example: 'jaqueline' })
  @prop()
  nick_name: string;

  @ApiModelProperty({description:'属于的群',example:'群id'})
  @prop({ ref: 'WechatGroup' })
  wechatgroup: Ref<WechatGroup>;
}
