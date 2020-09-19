import React from 'react';
import Main from './components/main';
import Inspiration from './components/inspiration';
import WhoWeAre from './components/whoweare';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Main></Main>
      </div>
      <div>
        <Inspiration></Inspiration>
      </div>
      <div>
        <WhoWeAre></WhoWeAre>
      </div>
    </div>
  );
}

export default App;
