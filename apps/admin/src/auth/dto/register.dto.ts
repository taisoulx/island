import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @MinLength(5)
  @MaxLength(20)
  @ApiProperty({ default: 'taisoulx' })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ default: '123456' })
  password: string;

  @IsEmail()
  @ApiProperty({ default: 'taisoulx@163.com' })
  email: string;

  @MinLength(2)
  @MaxLength(15)
  @ApiProperty({ default: '花无缺' })
  name: string;
}
