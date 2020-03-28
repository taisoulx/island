import { Test, TestingModule } from '@nestjs/testing';
import { WetoolController } from './wetool.controller';

describe('Wetool Controller', () => {
  let controller: WetoolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WetoolController],
    }).compile();

    controller = module.get<WetoolController>(WetoolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
