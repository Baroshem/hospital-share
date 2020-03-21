import { Response } from 'express';
import { Controller, UseGuards, Req, Res, Post, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from 'src/common/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly configService: ConfigService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req, @Res() res: Response) {
    const token = this.authService.login(req.user);
    const TOKEN_COOKIE_NAME = this.configService.get('TOKEN_COOKIE_NAME');
    const TOKEN_PREFIX = this.configService.get('TOKEN_PREFIX');

    res
      .status(200)
      .cookie(TOKEN_COOKIE_NAME, TOKEN_PREFIX + token, {
        expires: new Date(Date.now() + 24 * 3600000),
        httpOnly: true,
      })
      .send(true);

    return true;
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@User('id') userId: string) {
    if (!userId) return null;

    return this.authService.getProfile(userId);
  }

  @Post('logout')
  logout(@Res() res: Response) {
    const TOKEN_COOKIE_NAME = this.configService.get('TOKEN_COOKIE_NAME');

    res.clearCookie(TOKEN_COOKIE_NAME).send(true);

    return true;
  }
}
