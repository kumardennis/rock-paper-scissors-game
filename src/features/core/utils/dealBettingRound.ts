import { AppDataType } from 'shared/types/App.types';
import {
  BetItemUnionType,
  BetItemConstantType,
} from 'shared/types/BetItem.types';
import { betAmountConstants, betValueConstants } from 'shared/utils/constants';
import { didPlayerWin } from './didPlayerWin';
import { getTotalBetAmount } from './getTotalBetAmount';
import { itIsATie } from './itIsATie';

export const dealBettingRound = (
  playerBets: BetItemUnionType[],
  computerBet: BetItemConstantType,
  setAppData: (value: React.SetStateAction<AppDataType>) => void
) => {
  const onlyBet: BetItemUnionType = playerBets[0];
  const playerHasOnlyOneBet = playerBets.length === 1;
  const totalBetAmount = getTotalBetAmount(playerBets);

  if (playerHasOnlyOneBet) {
    dealWithOneBet(onlyBet, computerBet, setAppData, totalBetAmount);
  } else {
    dealWithTwoBets(playerBets, computerBet, setAppData, totalBetAmount);
  }
};

const dealWithOneBet = (
  onlyBet: BetItemUnionType,
  computerBet: BetItemConstantType,
  setAppData: (value: React.SetStateAction<AppDataType>) => void,
  totalBetAmount: number
) => {
  if (itIsATie(onlyBet, computerBet)) {
    setAppData((prevValue) => ({
      ...prevValue,
      playersChosenBet: onlyBet,
      isItATie: true,
    }));
    return;
  }

  if (didPlayerWin(onlyBet, computerBet)) {
    setAppData((prevValue) => ({
      ...prevValue,
      balance:
        prevValue.balance +
        betAmountConstants.betAmount_STEP *
          betValueConstants.betReturn_SINGLE_BET,
      currentWinAmount:
        betAmountConstants.betAmount_STEP *
        betValueConstants.betReturn_SINGLE_BET,
      playersChosenBet: onlyBet,
      wins: prevValue.wins + 1,
    }));

    return;
  }

  setAppData((prevValue) => ({
    ...prevValue,
    balance: prevValue.balance - totalBetAmount,
    currentWinAmount: -totalBetAmount,
    playersChosenBet: onlyBet,
  }));
};

const dealWithTwoBets = (
  playerBets: BetItemUnionType[],
  computerBet: BetItemConstantType,
  setAppData: (value: React.SetStateAction<AppDataType>) => void,
  totalBetAmount: number
) => {
  let playerHasWonAnyOfTheBets = false;
  let isItATie = false;
  let chosenBet: BetItemUnionType | null = null;

  playerBets.some((playerBet) => {
    if (didPlayerWin(playerBet, computerBet)) {
      playerHasWonAnyOfTheBets = true;
      chosenBet = playerBet;
      isItATie = false;

      return true;
    }

    if (itIsATie(playerBet, computerBet)) {
      chosenBet = playerBet;
      isItATie = true;
    }
  });

  if (!playerHasWonAnyOfTheBets) {
    setAppData((prevValue) => ({
      ...prevValue,
      balance: prevValue.balance - totalBetAmount,
      currentWinAmount: -totalBetAmount,
      playersChosenBet: chosenBet,
    }));

    return;
  }

  setAppData((prevValue) => ({
    ...prevValue,
    balance:
      prevValue.balance +
      betAmountConstants.betAmount_STEP *
        betValueConstants.betReturn_DOUBLE_BET,
    currentWinAmount:
      betAmountConstants.betAmount_STEP *
      betValueConstants.betReturn_DOUBLE_BET,
    playersChosenBet: chosenBet,
    wins: prevValue.wins + 1,
    isItATie,
  }));
};
