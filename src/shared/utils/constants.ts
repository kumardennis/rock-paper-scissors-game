import { BetItemConstantsType } from 'shared/types/BetItem.types';

export const betTypeConstants: BetItemConstantsType = {
  betType_ROCK: { type: 'ROCK', value: 1 },
  betType_PAPER: { type: 'PAPER', value: 2 },
  betType_SCISSORS: { type: 'SCISSORS', value: 3 },
};

export const betAmountConstants = {
  betAmount_STEP: 500,
  betAmount_START_AMOUNT: 5000,
  betAmount_MAX_BETS: 2,
};

export const betValueConstants = {
  betValue_MIN: 1,
  betValue_MAX: 3,
  betReturn_SINGLE_BET: 14,
  betReturn_DOUBLE_BET: 3,
};
