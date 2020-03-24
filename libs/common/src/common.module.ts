import { Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from '@libs/db';
import { JwtModule } from '@nestjs/jwt';

//Global 将模块标记为全局模块，这样在其他模块中才能引用此模块导出的模块
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: process.env.SECRET,
        };
      },
    }),
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService,JwtModule],
})
export class CommonModule {}
