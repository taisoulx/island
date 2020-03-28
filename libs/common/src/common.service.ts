import { Injectable } from '@nestjs/common';
import {initService} from './common.axios'

@Injectable()
export class CommonService {

  async axiosRequest(Cookie){
    return initService(Cookie)
  }
}
