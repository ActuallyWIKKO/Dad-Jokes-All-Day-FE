import React, { useState, useEffect } from 'react';
import { Help_Menu } from './Help_Menu';

export const Help_Menu_Modal: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const tag = (event.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (event.key.toLowerCase() === 'f8'  || event.key.toLowerCase() === 'h') {
        setShowHelp((v) => !v);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <>
      {showHelp && (
        <div
          onClick={() => setShowHelp(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 450,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 50,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{ cursor: 'default' }}
          >
            <Help_Menu />
          </div>
        </div>
      )}
    </>
  );
};
