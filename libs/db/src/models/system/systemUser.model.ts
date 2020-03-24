import { modelOptions, prop, Ref,DocumentType } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Role } from '@libs/db/models/system/role.model';
import { hashSync } from 'bcryptjs';

export type UserDocument = DocumentType<SystemUser>


@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
})
export class SystemUser {
  @ApiModelProperty({ description: '系统用户名', example: 'admin' })
  @prop()
  username: string;

  @ApiModelProperty({ description: '系统登陆密码', example: '123456' })
  @prop({
    select: false,
    get(val: any): any {
      return val;
    },
    set(val: any): any {
      return val ? hashSync(val) : val;
    },
  })
  password: string;

  @ApiModelProperty({ description: '邮箱', example: 'taisoulx@163.com' })
  @prop()
  email: string;

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
