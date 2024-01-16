import { BetItemConstantType, BetItemUnionType } from './BetItem.types';

export type AppDataType = {
  balance: number;
  wins: number;
  bet: number;
  computersBet: BetItemConstantType | null;
  playersBets: BetItemUnionType[] | null;
  playersChosenBet: BetItemUnionType | null;
  isLoadingComputersBet: boolean;
  currentWinAmount: number;
  isItATie: boolean;
};
