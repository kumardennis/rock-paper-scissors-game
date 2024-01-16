import { useCallback, useMemo } from 'react';
import { BetsType, BetItemUnionType } from 'shared/types/BetItem.types';
import { betAmountConstants } from 'shared/utils/constants';

export const useOnBetClick = (
  setBets: React.Dispatch<React.SetStateAction<BetsType>>
) => {
  return useCallback((bet: BetItemUnionType) => {
    setBets((prevBets: BetsType) => {
      const newAmount =
        prevBets[bet.data.type].amount + betAmountConstants.betAmount_STEP;
      return {
        ...prevBets,
        [bet.data.type]: { ...prevBets[bet.data.type], amount: newAmount },
      };
    });
  }, []);
};

export const useBetData = (bet: BetItemUnionType) => {
  return useMemo(() => bet, [bet]);
};
