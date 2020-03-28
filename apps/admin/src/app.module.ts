import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemModule } from './system/system.module';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';
import { CommonModule } from '@libs/common';
import { PermissionController } from './permission/permission.controller';
import { PermissionModule } from './permission/permission.module';
import { ActionModule } from './action/action.module';
import { AuthModule } from './auth/auth.module';
import { WetoolController } from './wetool/wetool.controller';
import { WetoolModule } from './wetool/wetool.module';
import { WechatygroupmemberModule } from './wechatygroupmember/wechatygroupmember.module';

@Module({
  imports: [CommonModule, SystemModule, RoleModule, PermissionModule, ActionModule, AuthModule, WetoolModule, WechatygroupmemberModule],
  controllers: [AppController, RoleController, PermissionController, WetoolController ],
  providers: [AppService],
})
export class AppModule {}
