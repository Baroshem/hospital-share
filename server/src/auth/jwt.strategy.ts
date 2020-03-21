import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: req => {
        const TOKEN_COOKIE_NAME = this.configService.get('TOKEN_COOKIE_NAME');
        const TOKEN_PREFIX = this.configService.get('TOKEN_PREFIX');

        if (req?.cookies?.access_token) {
          return req.cookies[TOKEN_COOKIE_NAME].replace(TOKEN_PREFIX, '');
        }

        return null;
      },
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  validate(payload: any) {
    return { id: payload.sub };
  }
}
