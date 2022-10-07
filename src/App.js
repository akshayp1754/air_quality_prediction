import React from 'react';

import SearchCities from './SearchCities';
import './App.css';

function App() {
  return (
    <section>
      <div className="App">
      <h1 style={{
         color:'white'
      }}>Know Air Quality Index(AQI)</h1>
      <SearchCities />
    </div>
    </section>
  );
}

export default App;
