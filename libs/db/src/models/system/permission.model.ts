import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Action } from '@libs/db/models/system/action.model';
import { Role } from '@libs/db/models/system/role.model';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@modelOptions({
  schemaOptions: {
    toJSON: {
      virtuals: true,
    },
  },
})
export class Permission {
  @ApiModelProperty({description:'权限命名id',example:'dashboard'})
  @prop()
  permissionId: string;

  @ApiModelProperty({description:'权限名称',example:'仪表盘'})
  @prop()
  permissionName: string;

  @ApiModelProperty({description:'状态',default:true})
  @prop({
    default: true,
  })
  status: boolean;

  @ApiModelProperty({description:'属于哪个角色',example:'5e64c58ea790955a36a6db22'})
  @prop({
    ref: 'Role',
  })
  role: Ref<Role>;

  @arrayProp({
    ref: 'Action',
    localField: '_id',
    foreignField: 'permission',
  })
  actionEntitySet: Ref<Action>[];
}
