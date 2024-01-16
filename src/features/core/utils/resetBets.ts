import { initialValue } from 'shared/contexts/Bets.context';
import { AppDataType } from 'shared/types/App.types';
import { BetsType } from 'shared/types/BetItem.types';

export const resetBets = (
  setBets: (value: React.SetStateAction<BetsType>) => void,
  setAppData: (value: React.SetStateAction<AppDataType>) => void
) => {
  setBets(initialValue);
  setAppData((prevValue) => ({
    ...prevValue,
    currentWinAmount: 0,
    computersBet: null,
    playersBets: null,
    playersChosenBet: null,
    isItATie: false,
  }));
};
