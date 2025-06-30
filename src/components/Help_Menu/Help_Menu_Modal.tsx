import React, { useState } from 'react';
import { HotKeys } from 'react-hotkeys';
import { Help_Menu } from './Help_Menu';

const keyMap = {
  TOGGLE_HELP: 'h',
};

export const Help_Menu_Modal: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);

  const handlers = {
    TOGGLE_HELP: () => setShowHelp((v) => !v),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      {showHelp && (
        <div
          onClick={() => setShowHelp(false)}
          style={{
            position: 'fixed',
            top: 30,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 50,
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Help_Menu />
          </div>
        </div>
      )}
    </HotKeys>
  );
};