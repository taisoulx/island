import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { WechatGroupMember } from '@libs/db/models/wetool/wechatGroupMember.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WechatygroupmemberService } from './wechatygroupmember.service'
import { LoginDto } from '../auth/dto/login.dto';

@Crud({
  model: WechatGroupMember
})
@ApiTags('群成员管理')
@Controller('wechatygroupmember')
export class WechatygroupmemberController {
  constructor(
    private WechatygroupmemberService: WechatygroupmemberService,
    @InjectModel(WechatGroupMember)private readonly model: ReturnModelType<typeof WechatGroupMember>) {
  }

  @Post('array')
  @ApiOperation({ summary: '批量添加' })
  async createByArray(@Body() data) {
      return await this.WechatygroupmemberService.createGroupMemberByArr(data)
  }

  @Get('wechatgroup/:id')
  @ApiOperation({ summary: '根据wechatgroup查询数据' })
  async getGroupMemberByWechatgroup(@Param('id') id) {
    return await this.WechatygroupmemberService.getGroupMemberByWechatgroup(id)
  }

  @Post('history')
  @ApiOperation({ summary: '获取wetool数据'})
  async getWetoolHistory(@Body() data){
    const Cookie = 'PHPSESSID=536ee1b12399752c44db6b9695c24911'
    return  await this.WechatygroupmemberService.getWetoolHistory(Cookie,data.url,data.params)
  }
}
