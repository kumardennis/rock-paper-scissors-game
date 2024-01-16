import { BetItemUnionType } from 'shared/types/BetItem.types';

export const getTotalBetAmount = (playerBets: BetItemUnionType[]): number => {
  const totalBetAmount = playerBets.reduce(
    (prevValue, { amount }) => prevValue + amount,
    0
  );

  return totalBetAmount;
};
