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

@Module({
  imports: [CommonModule, SystemModule, RoleModule, PermissionModule, ActionModule, AuthModule],
  controllers: [AppController, RoleController, PermissionController ],
  providers: [AppService],
})
export class AppModule {}
