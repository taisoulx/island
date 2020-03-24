import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports:[
    PassportModule,
  ],
  controllers:[AuthController],
  providers:[LocalStrategy,JwtStrategy, AuthService]
})
export class AuthModule {}
