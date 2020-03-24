import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { SystemUser } from '@libs/db/models/system/systemUser.model';

export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(
    @InjectModel(SystemUser) private userModel: ReturnModelType<typeof SystemUser>
  ) {
    super({
      //从bearer头部取出token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    } as StrategyOptions);
  }

  //验证
  async validate(_id) {
    console.log(_id)
    return this.userModel.findById(_id);
  }
}
