import {
  BetItemUnionType,
  BetItemConstantType,
} from 'shared/types/BetItem.types';
import { betTypeConstants } from 'shared/utils/constants';
import { itIsATie } from './itIsATie';

export const didPlayerWin = (
  playerBet: BetItemUnionType,
  computerBet: BetItemConstantType
): boolean => {
  if (itIsATie(playerBet, computerBet)) return false;

  switch (playerBet.data.type) {
    case betTypeConstants.betType_ROCK.type:
      if (computerBet.type === betTypeConstants.betType_PAPER.type) {
        return false;
      }
      break;

    case betTypeConstants.betType_PAPER.type:
      if (computerBet.type === betTypeConstants.betType_SCISSORS.type) {
        return false;
      }
      break;

    case betTypeConstants.betType_SCISSORS.type:
      if (computerBet.type === betTypeConstants.betType_ROCK.type) {
        return false;
      }
      break;

    default:
      return true;
  }

  return true;
};
