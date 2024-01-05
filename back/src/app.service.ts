import { Injectable } from '@nestjs/common';
import httpCustom from './functions/httpCustom';

@Injectable()
export class AppService {
  async getCommits(): Promise<Array<any>> {

    let url:String="jorlyn95/test_fulltimeforce/commits"
    let data:Array<any>=await httpCustom(url, "GET", {})

    return data

  }
}
