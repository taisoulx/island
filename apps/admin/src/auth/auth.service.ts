import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Permission } from '@libs/db/models/system/permission.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Role } from '@libs/db/models/system/role.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Permission)
    private readonly permissionModel: ReturnModelType<typeof Permission>,
    @InjectModel(Role) private readonly roleModel: ReturnModelType<typeof Role>,
  ) {}

  async getPermission(roleId: string) {
    return this.permissionModel
      .find({ role: roleId })
      .populate({ path: 'actionEntitySet' });
  }

  async getRoleDetail(roleId: string) {
    return this.roleModel.find({ _id: roleId });
  }
}
