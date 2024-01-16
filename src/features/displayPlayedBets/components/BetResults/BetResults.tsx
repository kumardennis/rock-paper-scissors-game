import { useContext } from 'react';
import { AppContext } from 'shared/contexts/App.context';

export const BetResults = (): JSX.Element => {
  const { appData } = useContext(AppContext);

  return (
    <div className="bet-results">
      <span className="bet-result-text ">
        {appData.isItATie ? (
          <span className="font-size-lg">ITS A TIE</span>
        ) : appData.currentWinAmount > 0 ? (
          <span className="bet-result-win font-size-lg">{`${appData.playersChosenBet?.data.type} WON`}</span>
        ) : (
          <span className="bet-result-loss font-size-lg">{`${appData.computersBet?.type} WON`}</span>
        )}
      </span>
      <div>
        <span className="static-text-golden font-size-md">YOU WIN:</span>{' '}
        <span className="font-size-md">{appData.currentWinAmount}</span>
      </div>
    </div>
  );
};
