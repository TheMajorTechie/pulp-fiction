import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/db/users/users.module';


@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '3600s'},
      }),
    }),
  ],
  providers: [
    AuthService,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
