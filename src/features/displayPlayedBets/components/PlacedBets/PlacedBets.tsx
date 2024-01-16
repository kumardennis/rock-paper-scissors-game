import { useContext } from 'react';
import { AppContext } from 'shared/contexts/App.context';
import { SlotMachineTextEffect } from '../SlotMachineTextEffect/SlotMachineTextEffect';

export const PlacedBets = (): JSX.Element => {
  const { appData } = useContext(AppContext);

  if (!appData.playersBets || appData.playersBets?.length === 0)
    return <span>No bets chosen by player</span>;

  const NodeForComputersBet = appData.isLoadingComputersBet ? (
    <SlotMachineTextEffect />
  ) : (
    appData.computersBet?.type
  );

  const NodeForPlayersBet = appData.isLoadingComputersBet ? (
    appData.playersBets?.length > 1 ? (
      <SlotMachineTextEffect
        options={appData.playersBets?.map((bet) => bet.data)}
      />
    ) : (
      appData.playersBets[0].data.type
    )
  ) : (
    appData.playersChosenBet?.data.type
  );

  return (
    <div className="placed-bets">
      <span className="computer-bet font-size-lg">{NodeForComputersBet}</span>
      <span className="static-text-golden font-size-md">vs</span>
      <span className="player-bet font-size-lg">{NodeForPlayersBet}</span>
    </div>
  );
};
