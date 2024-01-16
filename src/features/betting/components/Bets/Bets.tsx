import { MemoizedBetItem } from 'features/betting/components/BetItem/BetItem';

import {
  useBetData,
  useOnBetClick,
} from 'features/betting/hooks/BetItem.hooks';
import { useContext } from 'react';
import { BetsContext } from 'shared/contexts/Bets.context';

export const Bets = (): JSX.Element => {
  const { bets, setBets } = useContext(BetsContext);

  const onBetClick = useOnBetClick(setBets);

  if (!bets) return <span>trying to initialize</span>;

  const rockBetData = useBetData(bets.ROCK);
  const paperBetData = useBetData(bets.PAPER);
  const scissorsBetData = useBetData(bets.SCISSORS);

  const numberOfBetsPlaced = Object.values(bets).filter(
    (bet) => bet.amount > 0
  ).length;
  const isBetDisabled = numberOfBetsPlaced >= 2;

  return (
    <div className="bet-items">
      <MemoizedBetItem
        disabled={isBetDisabled && rockBetData.amount === 0}
        onBetClick={onBetClick}
        betData={rockBetData}
      />
      <MemoizedBetItem
        disabled={isBetDisabled && paperBetData.amount === 0}
        onBetClick={onBetClick}
        betData={paperBetData}
      />
      <MemoizedBetItem
        disabled={isBetDisabled && scissorsBetData.amount === 0}
        onBetClick={onBetClick}
        betData={scissorsBetData}
      />
    </div>
  );
};
