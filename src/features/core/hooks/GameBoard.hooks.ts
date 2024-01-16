import { AppDataType } from 'shared/types/App.types';
import { BetsType } from 'shared/types/BetItem.types';
import { betAmountConstants } from 'shared/utils/constants';
import { dealBettingRound } from 'features/core/utils/dealBettingRound';
import { getComputersBet } from 'features/core/utils/getComputersBet';
import { getPlayerBetsAsList } from 'features/core/utils/getPlayerBetsAsList';
import { resetBets } from 'features/core/utils/resetBets';

export const useBettingRound = (
  appData: AppDataType,
  setAppData: (value: React.SetStateAction<AppDataType>) => void,
  bets: BetsType,
  setBets: (value: React.SetStateAction<BetsType>) => void
) => {
  const playRound = async () => {
    try {
      /* BLComment: Get player's bets and send it to context already.*/
      const playerBets = getPlayerBetsAsList(bets);

      if (
        playerBets.length === 0 ||
        appData.balance < betAmountConstants.betAmount_STEP
      )
        return;

      setAppData((prevValue) => ({
        ...prevValue,
        playersBets: playerBets,
        isLoadingComputersBet: true,
        bet: prevValue.bet + 1,
      }));

      /* BLComment: Wait and Get computer's bets and send it to context.*/
      const computerBet = await getComputersBet();

      if (!computerBet) {
        console.error('Computer didnt put any bet :/');
        return;
      }

      setAppData((prevValue) => ({
        ...prevValue,
        computersBet: computerBet,
      }));

      dealBettingRound(playerBets, computerBet, setAppData);

      setAppData((prevValue) => ({
        ...prevValue,
        isLoadingComputersBet: false,
      }));
    } catch (error) {
      console.error(error);
      setAppData((prevValue) => ({
        ...prevValue,
        isLoadingComputersBet: false,
      }));
    }
  };

  const clearRound = () => resetBets(setBets, setAppData);

  return { playRound, clearRound };
};
