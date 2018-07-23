import React from 'react';
import Board from './Board';

const App = () => (
  <div className="container-fluid">
      Hello there!
    <div className="row">
      <div className="col-12 col-sm-6">
        <Board />
      </div>
      <div className="col-12 col-sm-6">
        A kovetkezo jatekos
      </div>
    </div>
  </div>
);

export default App;
