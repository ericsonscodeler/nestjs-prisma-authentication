import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { BcryptService } from 'src/share/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserService, PrismaService, BcryptService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
