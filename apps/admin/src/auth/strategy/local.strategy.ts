import { IStrategyOptions, Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { BadRequestException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { SystemUser } from '@libs/db/models/system/systemUser.model';

export class LocalStrategy extends PassportStrategy(Strategy,'local'){
  constructor(
    @InjectModel(SystemUser) private userModel:ReturnModelType<typeof SystemUser>
  ) {
    super({
      usernameField:'username',
      passwordField:'password'
    } as IStrategyOptions);
  }

  //验证
  async validate(username:string,password:string){
    const user = await this.userModel.findOne({
      username
    }).select('+password');

    if(!user){
      //抛出异常
      throw new BadRequestException('用户名不正确')
    }
    //密码校验
    if(!compareSync(password,user.password)){
      throw new BadRequestException('密码不正确')
    }
    user.password = '';
    return user
  }
}
