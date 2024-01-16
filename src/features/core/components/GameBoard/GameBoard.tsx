import { Bets } from 'features/betting/components/Bets/Bets';
import { useBettingRound } from 'features/core/hooks/GameBoard.hooks';
import { DisplayPlayedBets } from 'features/displayPlayedBets/components/DisplayPlayedBets/DisplayPlayedBets';
import { ResultsHeader } from 'features/monitorResults/components/ResultsHeader/ResultsHeader';
import { useContext, useState } from 'react';
import { AppContext } from 'shared/contexts/App.context';
import { BetsContext, initialValue } from 'shared/contexts/Bets.context';
import { BetsType } from 'shared/types/BetItem.types';

export const GameBoard = (): JSX.Element => {
  const { appData, setAppData } = useContext(AppContext);

  const [bets, setBets] = useState<BetsType>(initialValue);

  const { playRound, clearRound } = useBettingRound(
    appData,
    setAppData,
    bets,
    setBets
  );

  // TODD: Implement ErrorBoundaries

  return (
    <div className="game-board">
      <ResultsHeader />

      <main>
        <DisplayPlayedBets />

        <BetsContext.Provider value={{ bets, setBets }}>
          <Bets />
        </BetsContext.Provider>
        <div className="action-button-container">
          {!appData.computersBet ? (
            <button onClick={playRound}>PLAY</button>
          ) : (
            <button onClick={clearRound}>CLEAR</button>
          )}
        </div>
      </main>
    </div>
  );
};
