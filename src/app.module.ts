import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { Erc721SalesService } from './erc721sales.service';
// import { PhunksBidService } from './extensions/phunks.bid.extension.service';
import { TestController } from './test/test.controller';
import { AppController } from './app.controller';
import { BaseService } from './base.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    Erc721SalesService,
    BaseService,
    ////
    // Below is a simple example of how to create and plug a custom
    // extension to the bot
    ////
    //
    // PhunksBidService,
  ],
})
export class AppModule {}
