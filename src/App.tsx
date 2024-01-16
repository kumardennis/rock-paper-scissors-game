import React, { useState } from 'react';
import './App.css';
import { AppContext, initialValue } from 'shared/contexts/App.context';
import { AppDataType } from 'shared/types/App.types';
import { GameBoard } from 'features/core/components/GameBoard/GameBoard';
import ErrorBoundary from 'ErrorBoundary';

function App() {
  const [appData, setAppData] = useState<AppDataType>(initialValue);

  return (
    <ErrorBoundary>
      <AppContext.Provider value={{ appData, setAppData }}>
        <div className="App">
          <GameBoard />
        </div>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
