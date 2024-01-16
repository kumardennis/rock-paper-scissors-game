import {
  BetItemConstantType,
  BetItemUnionType,
} from 'shared/types/BetItem.types';

export const itIsATie = (
  playerBet: BetItemUnionType,
  computerBet: BetItemConstantType
): boolean => {
  return playerBet.data.type === computerBet.type;
};
