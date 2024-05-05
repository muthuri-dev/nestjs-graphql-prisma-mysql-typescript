import { IsString, IsEnum, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role requitred' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
