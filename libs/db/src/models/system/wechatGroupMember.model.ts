import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
})
export class WechatGroupMember {
  @ApiModelProperty({ description: '系统用户名', example: 'admin' })
  @prop()
  wxid: string;

  @ApiModelProperty({ description: '系统登陆密码', example: '123456' })
  @prop({

  })
  username: string;

  @ApiModelProperty({ description: '邮箱', example: 'taisoulx@163.com' })
  @prop()
  nickname: string;

  @ApiModelProperty({ description: '用户昵称', example: '花无缺' })
  @prop()
  name: string;

  @ApiModelProperty({
    description: '头像',
    example:
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg',
  })
  @prop()
  avatar: string;

  @prop({ ref: 'Role',default:'5e73167195677d1e4c587769' })
  role: Ref<Role>;
}
