import { useContext } from 'react';
import { AppContext } from 'shared/contexts/App.context';
import { BetResults } from '../BetResults/BetResults';
import { PlacedBets } from '../PlacedBets/PlacedBets';

export const PlayedBetsAndResults = (): JSX.Element => {
  const { appData } = useContext(AppContext);

  return (
    <div className="placed-bets-and-results">
      <PlacedBets />
      {!appData.isLoadingComputersBet && <BetResults />}
    </div>
  );
};
