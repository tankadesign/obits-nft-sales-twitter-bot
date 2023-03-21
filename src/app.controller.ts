import { Controller, Get } from '@nestjs/common';
import { obitsSalesStats } from './stats';

const appStarted = new Date();

@Controller('/')
export class AppController {
  @Get()
  index(): string {
    const obitId = Math.round(Math.random() * 7131) + 1;
    const lastSale = obitsSalesStats.lastSale;
    const saleHtml = `<div class="recent">
    <div class="sale">
      <h2>Last sale</h2>
      <div class="sale-item">
        <div class="image"><img src="${lastSale?.imageUrl}" width="64" height="64" /></div>
        <div class="sale-stats">
          <p class="obit">Obit #${lastSale?.tokenId}</p>
          <p>Transaction: <span>${lastSale?.transactionHash}</span></p>
          <p>From: <span>${lastSale?.from}</span></p>
          <p>To: <span>${lastSale?.to}</span></p>
          <p>Sold for: <span>${lastSale?.priceDisplay}</span></p>
        </div>
      </div>
    </div>
  </div>`;
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8"/>
      <meta http-equiv="refresh" content="30" />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"/>
      <title>ObitsNFT Sales Bot</title>
      <style>
        body {
          background: black;
          color: white;
          font-family: sans-serif;
          padding: 20px;
          margin: 0;
        }
        .row {
          display: flex;
          align-items: center;
        }
        .sale-item {
          display: flex;
          align-items: flex-start;
          margin-top: 20px;
        }
        img {
          border-radius: 128px;
          margin-right: 20px;
          display: block;
        }
        h1, h2, h3 {
          margin: 0;
        }
        p {
          font-size: 12px;
          font-weight: bold;
          color: #999;
        }
        .stats, .sale {
          border-top: 1px solid white;
          padding-top: 50px;
          margin-top: 50px;
        }
        .stats p, .sale p {
          font-family: monospace;
        }
        .stats p span, .sale p {
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="row">
        <div class="image"><img src="https://obitsnft.com/obits/solid/7132.png" width="96" height="96" /></div>
        <div class="info">
          <h1>Obits Sales Bot</h1>
          <h3>Just doing its thing</h3>
          <p>Since ${appStarted}</p>
        </div>
      </div>
      <div class="stats">
        <h2>Stats since last launch</h2>
        <p>Total sales: <span>${obitsSalesStats.sales}</span></p>
        <p>Last sale: <span>${obitsSalesStats.lastSaleDate}</span></p>
        <p>Tweets sent: <span>${obitsSalesStats.tweetsSent}</span></p>
        <p>Total ETH: <span>${obitsSalesStats.ethDisplay}</span></p>
      </div>
      ${lastSale ? saleHtml : ''}
    </body>
    </html>
    `;
  }
}
