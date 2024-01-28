import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  useremail: string;

  @IsString()
  password: string;
}
