import { betValueConstants } from 'shared/utils/constants';

export const computerBetGenerator = (): number => {
  return Math.floor(
    Math.random() * betValueConstants.betValue_MAX +
      betValueConstants.betValue_MIN
  );
};
