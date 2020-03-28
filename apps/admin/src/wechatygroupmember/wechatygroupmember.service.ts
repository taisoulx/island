import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { WechatGroupMember } from '@libs/db/models/wetool/wechatGroupMember.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { initService } from '@libs/common/common.axios';

@Injectable()
export class WechatygroupmemberService {
  constructor(@InjectModel(WechatGroupMember) private WechatGroupMemberModel: ReturnModelType<typeof WechatGroupMember>) {
  }

  async createGroupMemberByArr(Group: any) {
    return  await this.WechatGroupMemberModel.insertMany(Group)
  }

  async getGroupMemberByWechatgroup(wechatgroup: string){
    return this.WechatGroupMemberModel.find({ wechatgroup: wechatgroup });
  }

  async getWetoolHistory(Cookie,url,params){
    const request = initService(Cookie);
    return request({
      url,
      method:'get',
      params
    }).then(value => {
        console.log(value.data)
      return value.data
    })
  }
}
