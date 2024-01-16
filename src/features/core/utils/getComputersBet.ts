import { BetItemConstantType } from 'shared/types/BetItem.types';
import { betTypeConstants } from 'shared/utils/constants';
import { computerBetGenerator } from './computerBetGenerator';

export const getComputersBet =
  async (): Promise<BetItemConstantType | null> => {
    const betFromComputer = computerBetGenerator();

    const computerBet: BetItemConstantType | undefined = Object.values(
      betTypeConstants
    ).find((bet) => bet.value === betFromComputer);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return computerBet ?? null;
  };
