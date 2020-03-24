import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @MinLength(5)
  @MaxLength(20)
  @ApiProperty({ default: 'taisoulx' })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ default: '123456' })
  password: string;

}
