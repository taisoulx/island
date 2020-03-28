import { Module } from '@nestjs/common';
import { WechatygroupmemberController } from './wechatygroupmember.controller';
import { WechatygroupmemberService } from './wechatygroupmember.service';

@Module({
  controllers: [WechatygroupmemberController],
  providers: [WechatygroupmemberService]
})
export class WechatygroupmemberModule {}
