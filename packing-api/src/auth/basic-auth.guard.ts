import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const [type, credentials] = authHeader.split(' ');

    if (type !== 'Basic') {
      throw new UnauthorizedException('Invalid authentication type');
    }

    const decoded = Buffer.from(credentials, 'base64').toString();
    const [user, pass] = decoded.split(':');

    if (user !== 'l2code' || pass !== '1234') {
      throw new UnauthorizedException('Invalid username or password');
    }

    return true;
  }
}