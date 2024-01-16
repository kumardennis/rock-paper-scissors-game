import { createContext } from 'react';
import { AppDataType } from 'shared/types/App.types';
import { betAmountConstants } from 'shared/utils/constants';

type AppContextType = {
  appData: AppDataType;
  setAppData: React.Dispatch<React.SetStateAction<AppDataType>>;
};

export const initialValue: AppDataType = {
  balance: betAmountConstants.betAmount_START_AMOUNT,
  bet: 0,
  wins: 0,
  computersBet: null,
  playersBets: null,
  playersChosenBet: null,
  isLoadingComputersBet: false,
  currentWinAmount: 0,
  isItATie: false,
};

export const AppContext = createContext<AppContextType>({
  appData: initialValue,
} as AppContextType);
