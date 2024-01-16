import { createContext } from 'react';
import { BetsType } from 'shared/types/BetItem.types';
import { betTypeConstants } from 'shared/utils/constants';

export type BetsContextType = {
  bets: BetsType;
  setBets: React.Dispatch<React.SetStateAction<BetsType>>;
};

export const initialValue: BetsType = {
  ROCK: {
    amount: 0,
    data: { type: betTypeConstants.betType_ROCK.type, value: 1 },
  },
  PAPER: {
    amount: 0,
    data: { type: betTypeConstants.betType_PAPER.type, value: 2 },
  },
  SCISSORS: {
    amount: 0,
    data: { type: betTypeConstants.betType_SCISSORS.type, value: 3 },
  },
};

export const BetsContext = createContext<BetsContextType>({
  bets: initialValue,
} as BetsContextType);
