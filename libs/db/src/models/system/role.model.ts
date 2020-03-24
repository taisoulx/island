import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Permission } from '@libs/db/models/system/permission.model';

@modelOptions({
  schemaOptions: {
    toJSON: {
      virtuals: true,
    },
  },
})
export class Role {
  @ApiModelProperty({ description: '角色名称', example: '管理员' })
  @prop()
  roleName: string;

  @ApiModelProperty({ description: '角色属性', example: 'admin' })
  @prop()
  roleId: string;

  @arrayProp({
    ref: 'Permission',
    localField: '_id',
    foreignField: 'role',
  })
  systemUsers: Ref<Permission>[];
}
