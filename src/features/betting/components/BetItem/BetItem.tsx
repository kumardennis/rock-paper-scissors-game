import { memo } from 'react';
import { BetItemUnionType } from 'shared/types/BetItem.types';

type Props = {
  betData: BetItemUnionType;
  onBetClick: (bet: BetItemUnionType) => void;
  disabled: boolean;
};

const BetItem = ({ betData, onBetClick, disabled }: Props): JSX.Element => {
  const onClick = () => {
    onBetClick(betData);
  };

  let betItemClassName = '';

  switch (betData.data.type) {
    case 'ROCK':
      betItemClassName = 'bet-item-rock';
      break;

    case 'PAPER':
      betItemClassName = 'bet-item-paper';
      break;

    case 'SCISSORS':
      betItemClassName = 'bet-item-scissors';
      break;

    default:
      console.warn('Invalid bet type!');
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bet-item ${betItemClassName}`}
    >
      {betData.amount > 0 && (
        <div className="bet-item-amount">{betData.amount}</div>
      )}
      <span>{betData.data.type}</span>
    </button>
  );
};

export const MemoizedBetItem = memo(BetItem);
