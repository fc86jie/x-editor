import React from 'react';
import './App.scss';
import BlockRenderer from './components/BlockRenderer';
import MOCK_DATA from './MOCK_DATA';

function App() {
  return (
    <div className="App">
      {Object.values(MOCK_DATA).map(block => {
        return <BlockRenderer key={block.id} {...block}></BlockRenderer>;
      })}
    </div>
  );
}

export default App;
