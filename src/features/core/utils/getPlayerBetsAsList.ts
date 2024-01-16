import { BetsType } from 'shared/types/BetItem.types';

export const getPlayerBetsAsList = (playerBets: BetsType) => {
  const playedBets = Object.values(playerBets).filter((bet) => bet.amount > 0);

  return playedBets;
};
