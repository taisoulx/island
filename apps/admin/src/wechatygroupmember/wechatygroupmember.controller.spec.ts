import { Test, TestingModule } from '@nestjs/testing';
import { WechatygroupmemberController } from './wechatygroupmember.controller';

describe('Wechatygroupmember Controller', () => {
  let controller: WechatygroupmemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WechatygroupmemberController],
    }).compile();

    controller = module.get<WechatygroupmemberController>(WechatygroupmemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
