// App.js
import React from 'react';
import Map from './MapComponent';

const BirdMap = () => {
  return (
    <div style={{ height: '500px' }}>
      <h1>Simple Map Component</h1>
      {/* Just use <Map /> like a simple JSX tag */}
      <Map center={[51.505, -0.09]} zoom={13} />
    </div>
  );
};

export default App;
