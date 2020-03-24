import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import {
  SystemUser,
  UserDocument,
} from '@libs/db/models/system/systemUser.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decoraroe';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('注册登陆')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private readonly authService: AuthService,
    @InjectModel(SystemUser)
    private systemUserModel: ReturnModelType<typeof SystemUser>,
  ) {}

  @Post('register')
  @ApiOperation({ summary: '用户注册' })
  async register(@Body() data: RegisterDto) {
    const isExist = await this.systemUserModel.findOne({
      username: data.username,
    });
    if (isExist) {
      return {
        code: -1,
        msg: '用户已存在',
        data: '',
      };
    } else {
      const res = await this.systemUserModel.create(data);
      res.password = '';
      return {
        code: 0,
        msg: '注册成功',
        data: res,
      };
    }
  }

  @Post('login')
  @ApiOperation({ summary: '用户登陆' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() data: LoginDto, @Req() req) {
    // return String(req.user)
    return {
      code: 0,
      msg: '登陆成功',
      data: {
        token: this.jwtService.sign({_id:String(req.user._id)},{
          expiresIn: 60 * 60 * 12
        }),
        userinfo: req.user,
      },
    };
  }

  @Get('info')
  @ApiOperation({ summary: '用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async userInfo(@CurrentUser() user: UserDocument) {
    const roleDetail = await this.authService.getRoleDetail(String(user.role));
    return {
      code:0,
      data: {
        user:user,
        roleDetail:roleDetail
      }
    };
  }

  @Get('permissions')
  @ApiOperation({ summary: '用户权限' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  userPermission(@CurrentUser() user: UserDocument) {
    const roleId = String(user.role);
    return this.authService.getPermission(roleId).then(value => {
      return {
        code: 0,
        data:value
      };
    })
    // console.log(data)

  }
}
