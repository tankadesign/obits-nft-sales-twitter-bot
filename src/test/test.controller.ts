import { Controller, Get, Inject } from '@nestjs/common';
import { BaseService, TweetRequest, TweetType } from '../base.service';

@Controller('test')
export class TestController {
  constructor(private apiService: BaseService) {}

  @Get()
  async test(): Promise<string> {
    const obitId = Math.round(Math.random() * 7131) + 1;
    const value = Math.round(Math.random() * 1000) / 1000;
    const tweetRequest: TweetRequest = {
      from: '0x88a...2eff',
      to: '0x9a9...b8a3',
      tokenId: `${obitId}`,
      ether: value,
      transactionHash: '0x999666000',
      alternateValue: value,
      type: TweetType.SALE,
    };

    tweetRequest.imageUrl = `https://obitsnft.com/obits/solid/${obitId}.png`;
    await this.apiService.tweet(tweetRequest, true);
    return `<h1>You tweeted: ${new Date().toLocaleString()}</h1>`;
  }
}
