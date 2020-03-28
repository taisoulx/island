import { Test, TestingModule } from '@nestjs/testing';
import { WechatygroupmemberService } from './wechatygroupmember.service';

describe('WechatygroupmemberService', () => {
  let service: WechatygroupmemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WechatygroupmemberService],
    }).compile();

    service = module.get<WechatygroupmemberService>(WechatygroupmemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
