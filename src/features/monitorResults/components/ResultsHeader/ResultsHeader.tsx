import { useContext } from 'react';
import { AppContext } from 'shared/contexts/App.context';

export const ResultsHeader = (): JSX.Element => {
  const { appData } = useContext(AppContext);

  return (
    <header>
      <div className="header-item header-balance-container">
        <span className="static-text-golden">BALANCE:</span> {appData.balance}
      </div>

      <div className="header-item header-bet-container">
        <span className="static-text-golden">BET:</span> {appData.bet}
      </div>

      <div className="header-item header-win-container">
        <span className="static-text-golden">WIN:</span> {appData.wins}
      </div>
    </header>
  );
};
