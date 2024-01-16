import { useContext } from 'react';
import { AppContext } from 'shared/contexts/App.context';
import { NoPlayedBets } from 'features/displayPlayedBets/components/NoPlayedBets/NoPlayedBets';
import { PlayedBetsAndResults } from 'features/displayPlayedBets/components/PlayedBetsAndResults/PlayedBetsAndResults';

export const DisplayPlayedBets = (): JSX.Element => {
  const { appData } = useContext(AppContext);

  if (appData.playersBets) return <PlayedBetsAndResults />;

  return <NoPlayedBets />;
};
