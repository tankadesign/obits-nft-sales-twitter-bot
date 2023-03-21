import { TweetRequest } from './base.service';

interface SalesStats {
  sales: number;
  tweetsSent: number;
  totalEth: number;
  ethDisplay: string;
  lastSaleDate?: Date;
  lastSale?: TweetRequest;
}

export const obitsSalesStats: SalesStats = {
  sales: 0,
  tweetsSent: 0,
  totalEth: 0,
  ethDisplay: 'none',
  lastSaleDate: null,
  lastSale: null,
};
