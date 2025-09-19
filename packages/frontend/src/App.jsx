import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return <Welcome user={user} />;
}

export default App;
