import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '여기는 메인 페이지 입니다.';
  }
}
